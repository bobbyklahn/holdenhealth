export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">About Holden Health</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Your trusted partner in healthcare solutions for over two decades
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Holden Health, we are committed to providing healthcare facilities with the highest quality
              medical equipment and supplies. Our mission is to support healthcare professionals in delivering
              exceptional patient care through innovative solutions and reliable service.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest medical equipment from trusted manufacturers worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your success is our priority. We provide personalized support and solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek cutting-edge solutions to meet evolving healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Expertise You Can Trust
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 20 years of experience in the healthcare industry, Holden Health has established
                  itself as a leading provider of medical equipment and supplies.
                </p>
                <p>
                  Our team of healthcare specialists works closely with hospitals, surgical centers, and
                  clinical practices to deliver customized solutions that meet their unique requirements.
                </p>
                <p>
                  From surgical instruments to diagnostic equipment, we offer a comprehensive range of
                  products backed by exceptional service and support.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Healthcare Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">10K+</div>
                  <div className="text-gray-600">Products Available</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
