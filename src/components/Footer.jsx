import React from "react";
import { socials } from "../constants";
import Logo from "./design/Logo";
import { IoMail } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { BsClockFill } from "react-icons/bs";
import PXLZLogo from "../assets/pxlz_logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm sm:text-base">
              Professionel rengøring til private og erhverv i Århus og omegn.
              Vi sætter kvalitet og kundetilfredshed i højsædet.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <HiLocationMarker className="text-lg sm:text-xl text-primary-500" />
                <span className="text-sm sm:text-base">Århus, Danmark</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <IoMail className="text-lg sm:text-xl text-primary-500" />
                <a href="mailto:info@renklar.dk" className="text-sm sm:text-base hover:text-primary-500 transition-colors">
                  info@renklar.dk
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <BsClockFill className="text-lg sm:text-xl text-primary-500" />
                <span className="text-sm sm:text-base">Man - Søn: 06:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Hurtige Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors">
                  Priser
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors">
                  Om Os
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm sm:text-base text-gray-400 hover:text-primary-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="text-sm sm:text-base text-gray-400">Privat Rengøring</li>
              <li className="text-sm sm:text-base text-gray-400">Erhvervsrengøring</li>
              <li className="text-sm sm:text-base text-gray-400">Vinduespudsning</li>
              <li className="text-sm sm:text-base text-gray-400">Flytterengøring</li>
              <li className="text-sm sm:text-base text-gray-400">Kontorrengøring</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Følg Os</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Følg os på sociale medier for nyheder og opdateringer
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors hover:bg-primary-500"
                >
                  <img src={item.iconUrl} width={14} height={14} className="sm:w-4 sm:h-4" alt={item.title} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400">
              <span>© {new Date().getFullYear()} RenKlar.dk</span>
              <span>CVR: 44836017</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
              <a href="/terms" className="text-gray-400 hover:text-primary-500 transition-colors">
                Vilkår og Betingelser
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors">
                Privatlivspolitik
              </a>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
              <span>Developed by:</span>
              <a 
                href="https://pxlz.dk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={PXLZLogo} alt="PXLZ Logo" className="h-5 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
