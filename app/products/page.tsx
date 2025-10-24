import Link from 'next/link';
import { medicalCategories } from '@/lib/medicalCategories';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">Medical Product Portfolio</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Explore Holden Health’s six specialist product families covering perioperative care,
            critical care, and allied clinical services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {medicalCategories.map((category) => (
              <article
                key={category.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="p-8 flex flex-col h-full">
                  <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{category.description}</p>
                  <div className="space-y-3">
                    <Link
                      href={category.href}
                      className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      View Products
                      <svg
                        className="ml-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12H3" />
                      </svg>
                    </Link>
                    {category.pdf && (
                      <Link
                        href={category.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
                      >
                        Download brochure
                        <svg
                          className="ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12L12 16.5m0 0l4.5-4.5M12 16.5V3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our clinical specialists can recommend compatible accessories, sizing, and stock plans.
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
