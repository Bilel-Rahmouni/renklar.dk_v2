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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
          <Logo />
            <p className="text-gray-400 text-sm">
              Professionel rengøring til private og erhverv i Århus og omegn.
              Vi sætter kvalitet og kundetilfredshed i højsædet.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <HiLocationMarker className="text-xl text-primary-500" />
                <span>Århus, Danmark</span>
        </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <IoMail className="text-xl text-primary-500" />
                <a href="mailto:info@renklar.dk" className="hover:text-primary-500 transition-colors">
                  info@renklar.dk
          </a>
        </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <BsClockFill className="text-xl text-primary-500" />
                <span>Man - Søn: 08:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hurtige Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Priser
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Om Os
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-primary-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Privat Rengøring</li>
              <li className="text-gray-400">Erhvervsrengøring</li>
              <li className="text-gray-400">Vinduespudsning</li>
              <li className="text-gray-400">Flytterengøring</li>
              <li className="text-gray-400">Kontorrengøring</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Følg Os</h3>
            <p className="text-gray-400 mb-6">
              Følg os på sociale medier for nyheder og opdateringer
            </p>
            <div className="flex space-x-4">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.title}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors hover:bg-primary-500"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} RenKlar.dk</span>
              <span>CVR: 44836017</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-primary-500 transition-colors">
                Vilkår og Betingelser
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors">
                Privatlivspolitik
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Developed by:</span>
              <a 
                href="https://pxlzstudio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={PXLZLogo} alt="PXLZ Logo" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
