import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-zinc-800 py-16">
      <div className=" mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed mt-2">
              Modernizing agriculture through smart technology. Empowering farmers and dealers worldwide.
            </p>
            <div className="flex gap-4 mt-2">
              <FaFacebook className="text-gray-400 hover:text-green-600 cursor-pointer transition-colors" size={20} />
              <FaTwitter className="text-gray-400 hover:text-green-600 cursor-pointer transition-colors" size={20} />
              <FaLinkedin className="text-gray-400 hover:text-green-600 cursor-pointer transition-colors" size={20} />
              <FaGithub className="text-gray-400 hover:text-green-600 cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-black dark:text-white font-bold mb-6">Product</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 dark:text-zinc-400">
              <li className="hover:text-green-600 cursor-pointer transition-colors">Marketplace</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Dealer Dashboard</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Farmer Tools</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Pricing</li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-black dark:text-white font-bold mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 dark:text-zinc-400">
              <li className="hover:text-green-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-black dark:text-white font-bold mb-6">Support</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 dark:text-zinc-400">
              <li className="hover:text-green-600 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">Security</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-zinc-500 text-xs">
            © 2026 AgriFlow Inc. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-zinc-500 text-xs">
            Designed by <span className="text-green-600 font-medium">Sanjida Sefa</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;