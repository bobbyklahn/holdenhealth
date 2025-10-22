import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              HOLDEN HEALTH
            </h3>
            <p className="text-gray-400 text-sm">
              Leading provider of medical equipment, surgical supplies, and healthcare solutions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/surgical" className="text-gray-400 hover:text-primary transition-colors">
                  Surgical Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/cardiothoracic" className="text-gray-400 hover:text-primary transition-colors">
                  Cardiothoracic Surgery
                </Link>
              </li>
              <li>
                <Link href="/products/urology" className="text-gray-400 hover:text-primary transition-colors">
                  Urology
                </Link>
              </li>
              <li>
                <Link href="/products/medical-supplies" className="text-gray-400 hover:text-primary transition-colors">
                  Medical Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@holdenhealth.com</li>
              <li>Phone: 1-800-HOLDEN-H</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Holden Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
