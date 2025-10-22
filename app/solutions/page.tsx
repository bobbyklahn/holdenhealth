export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Hospital Solutions',
      description: 'Comprehensive programs designed for hospitals of all sizes',
      features: [
        'Equipment procurement and management',
        'Inventory optimization',
        'Clinical education and training',
        'Technical support and maintenance'
      ]
    },
    {
      title: 'Surgical Centers',
      description: 'Specialized solutions for ambulatory surgery centers',
      features: [
        'Surgical equipment packages',
        'Supply chain management',
        'Regulatory compliance support',
        'Cost optimization strategies'
      ]
    },
    {
      title: 'Clinical Practice',
      description: 'Tailored solutions for medical practices and clinics',
      features: [
        'Practice-specific equipment',
        'Flexible financing options',
        'Training and onboarding',
        'Ongoing technical support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">Healthcare Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Customized solutions designed to meet the unique needs of your healthcare facility
          </p>
        </div>
      </section>

      {/* Solutions Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary p-6">
                  <h2 className="text-2xl font-heading font-bold text-white">
                    {solution.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <h3 className="font-heading font-semibold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">
            Why Choose Holden Health?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality Products', description: 'Premium medical equipment from trusted manufacturers' },
              { title: 'Expert Support', description: 'Dedicated team of healthcare specialists' },
              { title: 'Competitive Pricing', description: 'Cost-effective solutions without compromising quality' },
              { title: 'Reliable Service', description: 'On-time delivery and responsive customer service' }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
