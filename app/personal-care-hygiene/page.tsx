import Link from 'next/link';

const personalCareProducts = [
  {
    name: 'Incontinence Care Essentials',
    description: 'Absorbent briefs, pads, and barrier creams designed for dignity and daily comfort.',
  },
  {
    name: 'Skin & Wound Hygiene Kits',
    description: 'Cleansing foams, pH-balanced washes, and protective dressings for gentle skin management.',
  },
  {
    name: 'Patient Bathing Solutions',
    description: 'No-rinse bathing wipes, shampoo caps, and bedside hygiene packs for convenient care.',
  },
  {
    name: 'Hand Hygiene Stations',
    description: 'Alcohol-based sanitizers, soap dispensers, and refill systems for high-traffic areas.',
  },
];

export default function PersonalCareHygienePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">Personal Care &amp; Hygiene</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Trusted solutions that support daily care routines, promote comfort, and maintain infection control standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalCareProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h2 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm flex-1">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Need tailored personal care solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can recommend bundles and supply plans to match your facility&apos;s needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
