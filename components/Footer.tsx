'use client';

import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/rizzer-logo.png"
                alt="Rizzer Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Your AI Dating Coach - Master Modern Dating with Confidence
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-rizzer transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-rizzer transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-rizzer transition-all duration-300"
                aria-label="TikTok"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-rizzer" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/story" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Dating Tips (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Success Stories (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Help Center (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:nidrosoft@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/sherlock-consent" className="text-gray-400 hover:text-white transition-colors">
                  Sherlock Consent
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p suppressHydrationWarning>
            © {currentYear} Rizzer. All rights reserved. Made with ❤️ by{' '}
            <a 
              href="https://www.linkedin.com/in/cyriac-zeh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rizzer-pink hover:text-rizzer-salmon transition-colors duration-200 font-semibold"
            >
              Cyriac Zeh
            </a>{' '}
            for modern daters.
          </p>
        </div>
      </div>
    </footer>
  );
}
