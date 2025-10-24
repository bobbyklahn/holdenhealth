export interface MedicalCategory {
  name: string;
  slug: string;
  description: string;
  href: string;
  dataFile: string;
  imageDir: string;
  pdf?: string;
  cardImage?: string;
}

export const medicalCategories: MedicalCategory[] = [
  {
    name: 'Cardiothoracic Surgery Products',
    slug: 'cardiothoracic-surgery',
    description:
      'Cardiovascular cannulas, wound drainage systems, and operating room accessories.',
    href: '/products/cardiothoracic-surgery',
    dataFile: 'cardiothoracic_products.json',
    imageDir: '/products/cardiothoracic-surgery',
    pdf: '/brochures/cardiothoracic-surgery-products.pdf',
    cardImage: '/images/categories/Cardiothoracic_Surgery.png'
  },
  {
    name: 'Enteral Feeding Product',
    slug: 'enteral-feeding',
    description: 'Feeding tubes, extension sets, placement kits, and drainage solutions.',
    href: '/products/enteral-feeding',
    dataFile: 'enteral_products.json',
    imageDir: '/products/enteral-feeding',
    pdf: '/brochures/enteral-feeding-product.pdf',
    cardImage: '/images/categories/Enteral_Feeding.png'
  },
  {
    name: 'Fluid Management System',
    slug: 'fluid-management',
    description:
      'Vacuum canisters, yankauer handles, and accessories for surgical fluid control.',
    href: '/products/fluid-management',
    dataFile: 'fluid_mgmt_products.json',
    imageDir: '/products/fluid-management',
    pdf: '/brochures/fluid-management-system.pdf',
    cardImage: '/images/categories/Fluid_Management.png'
  },
  {
    name: 'Respiratory & Anesthesia',
    slug: 'respiratory-anesthesia',
    description: 'Airway management, anesthesia delivery, and breathing circuit devices.',
    href: '/products/respiratory-anesthesia',
    dataFile: 'resp_an_products.json',
    imageDir: '/products/respiratory-anesthesia',
    pdf: '/brochures/respiratory-anesthesia.pdf',
    cardImage: '/images/categories/Respiratory_Anesthesia.png'
  },
  {
    name: 'Surgical Suction',
    slug: 'surgical-suction',
    description: 'Suction tips, tubing, connectors, and waste collection systems.',
    href: '/products/surgical-suction',
    dataFile: 'surgical_suction_products.json',
    imageDir: '/products/surgical-suction',
    pdf: '/brochures/surgical-suction.pdf',
    cardImage: '/images/categories/Surgical Suction.png'
  },
  {
    name: 'Urology',
    slug: 'urology',
    description: 'Catheters, drainage systems, and urological procedure consumables.',
    href: '/products/urology',
    dataFile: 'urology_products.json',
    imageDir: '/products/urology',
    pdf: '/brochures/urology.pdf',
    cardImage: '/images/categories/Urology.png'
  }
];
