import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`${
      darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-300'
    } py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/BIOSPN logo.png"
              alt="BIOSPN HiPurity Systems"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm">
              Leading provider of advanced purification systems for pharmaceutical, biotech, and research industries.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">info@biospnhipurity.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            © 2025 BIOSPN HiPurity. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
