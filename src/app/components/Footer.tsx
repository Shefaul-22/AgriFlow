import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 dark:bg-black border-t border-gray-200 dark:border-zinc-800 py-16">
      <div className="mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-purple-600 dark:text-zinc-400 text-sm leading-relaxed mt-2">
              Modernizing agriculture through smart technology. Empowering farmers and dealers worldwide.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <FaFacebook
                className="text-[#1877F2] hover:text-gray-400 hover:scale-110 transition-all duration-200 cursor-pointer"
                size={20}
              />
              <FaXTwitter
                className="text-black hover:text-gray-400 hover:scale-110 transition-all duration-200 cursor-pointer"
                size={20}
              />
              <FaLinkedin
                className="text-[#0A66C2] hover:text-gray-400 hover:scale-110 transition-all duration-200 cursor-pointer"
                size={20}
              />
              <FaGithub
                className="text-[#111827] hover:text-gray-400 hover:scale-110 transition-all duration-200 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* Reusable class */}
          {/*
            hover effect:
            - text green
            - underline grow animation
          */}

          {/* Column 2 */}
          <div>
            <h3 className="text-black dark:text-white font-bold mb-6">Products</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 dark:text-zinc-400">
              {["Marketplace","Dealer Dashboard","Farmer Tools","Pricing"].map((item) => (
                <li
                  key={item}
                  className="relative w-fit cursor-pointer transition-colors hover:text-green-600
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-green-600 after:transition-all
                  hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-black dark:text-white font-bold mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 dark:text-zinc-400">
              {["About Us","Careers","Blog","Contact"].map((item) => (
                <li
                  key={item}
                  className="relative w-fit cursor-pointer transition-colors hover:text-green-600
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-green-600 after:transition-all
                  hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-black dark:text-white font-bold mb-6">Support</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 dark:text-zinc-400">
              {["Help Center","Terms of Service","Privacy Policy","Security"].map((item) => (
                <li
                  key={item}
                  className="relative w-fit cursor-pointer transition-colors hover:text-green-600
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-green-600 after:transition-all
                  hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-zinc-500 text-xs">
            © 2026<span className="text-green-500 text-xl"> Agri</span>Flow Inc. All rights reserved.
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