import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 py-16">
      <div className=" mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-gray-600  text-sm leading-relaxed mt-2">
              AgriFlow AI Platform Resources Legal Bridging the gap between the
              soil and the future of global trade with precision artificial
              intelligence.
            </p>
            <div className="flex gap-4 mt-2">
              <FaFacebook
                className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                size={20}
              />
              <FaTwitter
                className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                size={20}
              />
              <FaLinkedin
                className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                size={20}
              />
              <FaGithub
                className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>

          {/* Column 2: Platform*/}
          <div>
            <h3 className=" font-bold mb-6">
              Marketplace
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 ">
              <li className="hover:text-green-600 cursor-pointer transition-colors">
               AI Yield Analysis
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
           Smart Bidding
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
               Global Logistics
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className=" font-bold mb-6">
              Documentation
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 ">
              <li className="hover:text-green-600 cursor-pointer transition-colors">
               Trade Insights
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
              Support Center
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
                API Access
              </li>
            </ul>
          </div>

          {/* Column 4: Legal*/}
          <div>
            <h3 className="font-bold mb-6">
              Privacy Policy
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 ">
              <li className="hover:text-green-600 cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-green-600 cursor-pointer transition-colors">
             Trade Compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
          © 2024 AgriFlow AI. All rights reserved. Precision Management for Global Growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
