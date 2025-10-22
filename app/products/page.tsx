import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      category: 'Surgical Equipment',
      items: [
        { name: 'Surgical Instruments', description: 'High-precision surgical instruments' },
        { name: 'Operating Tables', description: 'Advanced positioning systems' },
        { name: 'Surgical Lights', description: 'LED surgical lighting solutions' },
        { name: 'Sterilization Equipment', description: 'Autoclave and sterilization systems' }
      ]
    },
    {
      category: 'Cardiothoracic Surgery',
      items: [
        { name: 'Cardiovascular Instruments', description: 'Specialized cardiac surgery tools' },
        { name: 'Thoracic Surgery Sets', description: 'Complete thoracic procedure kits' },
        { name: 'Heart-Lung Machines', description: 'Cardiopulmonary bypass systems' },
        { name: 'Vascular Grafts', description: 'Synthetic and biological grafts' }
      ]
    },
    {
      category: 'Urology',
      items: [
        { name: 'Endoscopy Equipment', description: 'Urological endoscopes and accessories' },
        { name: 'Lithotripsy Devices', description: 'Stone fragmentation systems' },
        { name: 'Catheters & Drains', description: 'Urological drainage solutions' },
        { name: 'Prostate Treatment', description: 'BPH and prostate care devices' }
      ]
    },
    {
      category: 'Medical Supplies',
      items: [
        { name: 'Disposable Supplies', description: 'Single-use medical products' },
        { name: 'Protective Equipment', description: 'PPE and safety gear' },
        { name: 'Wound Care', description: 'Dressings and wound management' },
        { name: 'Diagnostic Equipment', description: 'Medical diagnostic tools' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Products</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive range of medical equipment and supplies for healthcare professionals
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary">
                  {product.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <div className="w-6 h-6 bg-primary rounded"></div>
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is ready to assist you
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
