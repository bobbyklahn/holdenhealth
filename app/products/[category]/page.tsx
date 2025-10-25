import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadCategoryProducts } from '@/lib/loadMedicalProducts';
import type { ProductEntry } from '@/lib/loadMedicalProducts';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const formatParagraph = (value?: string | null) => {
  if (!value) return null;
  return value.replace(/\s+/g, ' ').trim();
};

const SUBCATEGORY_ORDER: Record<string, string[]> = {
  'fluid-management': [
    'Suction Canister & Liner',
    'Yankauer Suction Device',
    'Orthopedic Suction Set',
    'Suction Connecting Tubes'
  ]
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const categoryData = await loadCategoryProducts(categorySlug);

  if (!categoryData) {
    notFound();
  }

  const { category, products } = categoryData;
  const hasSubcategories = products.some((product) => product.subcategory);
  const groupedProducts = hasSubcategories
    ? (() => {
        const map = new Map<string, ProductEntry[]>();
        for (const product of products) {
          const key = product.subcategory || 'Other';
          const existing = map.get(key) ?? [];
          existing.push(product);
          map.set(key, existing);
        }
        for (const [, list] of map) {
          list.sort((a, b) => a.name.localeCompare(b.name));
        }
        const preset = SUBCATEGORY_ORDER[category.slug] ?? [];
        const orderedKeys = [
          ...preset.filter((key) => map.has(key)),
          ...Array.from(map.keys()).filter((key) => !preset.includes(key)).sort()
        ];
        return orderedKeys.map((key) => ({
          name: key,
          products: map.get(key) ?? []
        }));
      })()
    : [
        {
          name: null,
          products: [...products]
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80 mb-4">
            <Link href="/products" className="hover:text-white transition-colors">
              Medical Products
            </Link>
            <span className="mx-2">/</span>
            <span>{category.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{category.name}</h1>
          <p className="max-w-3xl text-lg md:text-xl text-white/90">{category.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {groupedProducts.map((group) => (
            <div key={group.name ?? 'all-products'} className="space-y-8">
              {group.name && (
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm uppercase tracking-wide text-primary/70 mb-1">Subcategory</p>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">{group.name}</h3>
                </div>
              )}
              <div className="space-y-8">
                {group.products.map((product) => {
                  const description = formatParagraph(product.description);
                  return (
                    <article
                      key={product.slug}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50">
                          {product.images.length > 0 ? (
                            <div className="relative aspect-[4/3]">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-contain p-6"
                              />
                            </div>
                          ) : (
                            <div className="flex h-full items-center justify-center p-10 text-gray-400 text-sm">
                              Image coming soon
                            </div>
                          )}
                          {product.images.length > 1 && (
                            <div className="flex flex-wrap gap-3 px-6 pb-6">
                              {product.images.slice(1, 5).map((imageSrc, index) => (
                                <div key={`${product.slug}-thumb-${index}`} className="relative h-16 w-16">
                                  <Image
                                    src={imageSrc}
                                    alt={`${product.name} thumbnail ${index + 2}`}
                                    fill
                                    sizes="64px"
                                    className="rounded border border-gray-200 object-cover"
                                  />
                                </div>
                              ))}
                              {product.images.length > 5 && (
                                <span className="text-xs text-gray-500">
                                  +{product.images.length - 5} additional images
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="lg:w-2/3 p-8">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                            <span className="font-semibold uppercase tracking-wide text-primary">
                              {category.name}
                            </span>
                            {product.page && (
                              <>
                                <span aria-hidden="true">•</span>
                                <span>PDF page {product.page}</span>
                              </>
                            )}
                            {product.subcategory && (
                              <>
                                <span aria-hidden="true">•</span>
                                <span>{product.subcategory}</span>
                              </>
                            )}
                            <span aria-hidden="true">•</span>
                            <span className="font-mono text-xs uppercase text-gray-400">{product.slug}</span>
                          </div>
                          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                            {product.name}
                          </h2>
                          {description && <p className="text-gray-700 leading-relaxed mb-6">{description}</p>}

                          {product.features.length > 0 && (
                            <div className="mb-6">
                              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                Key Features
                              </h3>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                {product.features.map((feature, index) => (
                                  <li
                                    key={`${product.slug}-feature-${index}`}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {product.sizes.length > 0 && (
                            <div className="mb-6">
                              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                Sizes &amp; Configurations
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size, index) => (
                                  <span
                                    key={`${product.slug}-size-${index}`}
                                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                                  >
                                    {size}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {product.codes.length > 0 && (
                            <div className="border-t border-gray-100 pt-6">
                              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                Ordering Codes
                              </h3>
                              <ul className="space-y-2 text-sm">
                                {product.codes.map((code) => (
                                  <li
                                    key={`${product.slug}-${code.code}`}
                                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                                  >
                                    <span className="font-mono text-sm font-semibold text-primary">{code.code}</span>
                                    {code.description && (
                                      <span className="text-gray-600">{code.description}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
