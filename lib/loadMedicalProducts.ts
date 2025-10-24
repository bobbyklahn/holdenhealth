import { promises as fs, Dirent } from 'fs';
import path from 'path';
import { medicalCategories, MedicalCategory } from './medicalCategories';

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg']);

interface RawProductCode {
  code: string;
  description?: string | null;
}

interface RawProduct {
  category: string;
  product_name: string;
  slug: string;
  page?: number | null;
  description?: string | null;
  features?: string[] | null;
  codes?: RawProductCode[] | null;
  sizes?: string[] | null;
}

interface RawImage {
  slug: string;
  filename: string;
}

interface RawProductFile {
  products: RawProduct[];
  images?: RawImage[];
}

export interface ProductCode {
  code: string;
  description?: string | null;
}

export interface ProductEntry {
  name: string;
  slug: string;
  description?: string;
  features: string[];
  codes: ProductCode[];
  sizes: string[];
  page?: number | null;
  images: string[];
}

export interface CategoryProducts {
  category: MedicalCategory;
  products: ProductEntry[];
}

const HH_CODE_REGEX = /\bGC(?=\d)/g;
const DASH_RUN_REGEX = /(?:-\s*){3,}/g;
const BULLET_REGEX = /[•·▪√■]+/g;
const HYPHEN_BREAK_REGEX = /([A-Za-z])-\s+([A-Za-z])/g;

const categoryMap = new Map(medicalCategories.map((category) => [category.slug, category]));

const unique = <T>(items: T[]): T[] => Array.from(new Set(items));

const sanitiseText = (value?: string | null): string | null => {
  if (!value) return null;
  let result = value.toString().replace(/\s+/g, ' ').trim();
  if (!result) return null;

  result = result.replace(BULLET_REGEX, ' ');
  result = result.replace(DASH_RUN_REGEX, ' ');
  result = result.replace(HYPHEN_BREAK_REGEX, (_, left, right) => `${left}${right}`);
  result = result.replace(/\s*www\.gcmedica\.com\s*/gi, ' ');
  result = result.replace(/\s*Version:\s*\w+\s*/gi, ' ');
  result = result.replace(/\s{2,}/g, ' ').trim();

  if (!result) return null;

  return result;
};

const sanitiseListEntry = (value?: string | null): string | null => {
  const cleaned = sanitiseText(value);
  if (!cleaned) return null;
  return cleaned.replace(/^[,;:\-\s]+/, '').replace(/\s{2,}/g, ' ').trim() || null;
};

const normaliseTextArray = (values?: string[] | null): string[] => {
  if (!Array.isArray(values)) {
    return [];
  }
  return unique(
    values
      .map((value) => sanitiseListEntry(value))
      .filter((value): value is string => Boolean(value))
  );
};

const normaliseCodes = (codes?: RawProductCode[] | null): ProductCode[] => {
  if (!Array.isArray(codes)) {
    return [];
  }

  const seen = new Map<string, ProductCode>();

  for (const entry of codes) {
    if (!entry?.code) continue;
    const normalisedCode = entry.code.replace(HH_CODE_REGEX, 'HH').trim();
    if (!seen.has(normalisedCode)) {
      seen.set(normalisedCode, {
        code: normalisedCode,
        description: entry.description?.trim() ?? null
      });
    }
  }

  return Array.from(seen.values());
};

export async function loadCategoryProducts(slug: string): Promise<CategoryProducts | null> {
  const category = categoryMap.get(slug);
  if (!category) {
    return null;
  }

  const dataPath = path.join(process.cwd(), 'data', 'medical', category.dataFile);
  const rawBuffer = await fs.readFile(dataPath, 'utf8');
  const parsed = JSON.parse(rawBuffer) as RawProductFile;

  const productSlugs = unique(
    (parsed.products ?? [])
      .map((product) => product?.slug)
      .filter((slug): slug is string => Boolean(slug))
  );

  const imageMap = new Map<string, string[]>();
  if (Array.isArray(parsed.images)) {
    for (const image of parsed.images) {
      if (!image?.slug || !image?.filename) continue;
      const list = imageMap.get(image.slug) ?? [];
      const relativePath = path.posix.join(category.imageDir, image.filename);
      if (!list.includes(relativePath)) {
        list.push(relativePath);
      }
      imageMap.set(image.slug, list);
    }
  }

  const buildDirectoryImageMap = async (): Promise<Map<string, string[]>> => {
    const result = new Map<string, string[]>();
    if (!productSlugs.length) {
      return result;
    }

    const trimmedDir = category.imageDir.replace(/^\/+/, '');
    const absoluteDir = path.join(process.cwd(), 'public', trimmedDir);
    let dirEntries: Dirent[];

    try {
      dirEntries = await fs.readdir(absoluteDir, { withFileTypes: true });
    } catch {
      return result;
    }

    const slugLookup = new Map<string, string>();
    for (const slugValue of productSlugs) {
      slugLookup.set(slugValue.toLowerCase(), slugValue);
    }
    const slugEntries = Array.from(slugLookup.entries()).sort(
      ([slugA], [slugB]) => slugB.length - slugA.length
    );

    for (const entry of dirEntries) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(ext)) continue;

      const lowerName = entry.name.toLowerCase();

      const match = slugEntries.find(
        ([lowerSlug]) => lowerName === lowerSlug || lowerName.startsWith(`${lowerSlug}-`)
      );
      if (!match) {
        continue;
      }
      const [, originalSlug] = match;
      const relativePath = path.posix.join(category.imageDir, entry.name);
      const list = result.get(originalSlug) ?? [];
      if (!list.includes(relativePath)) {
        list.push(relativePath);
      }
      result.set(originalSlug, list);
    }

    for (const [slugValue, files] of result.entries()) {
      result.set(slugValue, files.sort((a, b) => a.localeCompare(b)));
    }

    return result;
  };

  const directoryImageMap = await buildDirectoryImageMap();

  const productMap = new Map<
    string,
    {
      name: string;
      slug: string;
      description?: string;
      features: string[];
      codes: ProductCode[];
      sizes: string[];
      page?: number | null;
    }
  >();

  for (const product of parsed.products ?? []) {
    if (!product?.slug) continue;

    const existing = productMap.get(product.slug);
    const description = sanitiseText(product.description ?? undefined) ?? undefined;
    const features = normaliseTextArray(product.features);
    const codes = normaliseCodes(product.codes);
    const sizes = normaliseTextArray(product.sizes);
    const page = product.page ?? existing?.page ?? null;

    if (!existing) {
      productMap.set(product.slug, {
        name: product.product_name?.trim() ?? product.slug,
        slug: product.slug,
        description,
        features,
        codes,
        sizes,
        page
      });
      continue;
    }

    if (description) {
      if (!existing.description) {
        existing.description = description;
      } else if (
        existing.description &&
        description.length > existing.description.length &&
        !DASH_RUN_REGEX.test(description)
      ) {
        existing.description = description;
      }
    }
    existing.features = unique([...existing.features, ...features]);
    existing.sizes = unique([...existing.sizes, ...sizes]);

    if (codes.length) {
      const combined = [...existing.codes];
      const existingCodes = new Set(existing.codes.map((item) => item.code));
      for (const code of codes) {
        if (!existingCodes.has(code.code)) {
          combined.push(code);
          existingCodes.add(code.code);
        }
      }
      existing.codes = combined;
    }

    if (!existing.page && page) {
      existing.page = page;
    }

    if (description && !existing.description) {
      existing.description = description;
    }
  }

  const products: ProductEntry[] = Array.from(productMap.values())
    .sort((a, b) => {
      if (a.page && b.page && a.page !== b.page) {
        return a.page - b.page;
      }
      return a.name.localeCompare(b.name);
    })
    .map((entry) => ({
      ...entry,
      description: entry.description,
      features: entry.features,
      codes: entry.codes,
      sizes: entry.sizes,
      images: unique([
        ...(imageMap.get(entry.slug) ?? []),
        ...(directoryImageMap.get(entry.slug) ?? [])
      ])
    }));

  return {
    category,
    products
  };
}
