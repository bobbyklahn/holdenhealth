import Link from 'next/link';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  const productCategories = [
    {
      title: 'Surgical Equipment',
      description: 'Advanced surgical instruments and equipment for precision procedures',
      href: '/products/surgical',
      image: '/images/surgical.jpg'
    },
    {
      title: 'Cardiothoracic Surgery',
      description: 'Specialized products for cardiovascular and thoracic procedures',
      href: '/products/cardiothoracic',
      image: '/images/cardiothoracic.jpg'
    },
    {
      title: 'Urology',
      description: 'Comprehensive urological equipment and supplies',
      href: '/products/urology',
      image: '/images/urology.jpg'
    },
    {
      title: 'Medical Supplies',
      description: 'Essential medical supplies for healthcare facilities',
      href: '/products/medical-supplies',
      image: '/images/medical-supplies.jpg'
    }
  ];

  const solutions = [
    {
      title: 'Hospital Solutions',
      description: 'Comprehensive equipment and supply programs',
    },
    {
      title: 'Surgical Centers',
      description: 'Specialized solutions for ambulatory surgery centers',
    },
    {
      title: 'Clinical Practice',
      description: 'Tailored solutions for clinical practices',
    }
  ];

  return (
    <div>
      {/* Hero Section with Three.js Background */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <ThreeBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Excellence in <span className="text-primary">Healthcare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of medical equipment, surgical supplies, and innovative healthcare solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical solutions for healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">+</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customized solutions designed for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can support your healthcare facility
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
