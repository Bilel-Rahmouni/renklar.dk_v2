import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigationPersonal, navigationBusiness, navigationCars } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { useContext, useEffect, useState } from "react";
import { typeContext } from "../App";
import OfferHeader from "./OfferHeader"; 
import Logo from "../design/Logo";
import Button from "../design/Button";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Privat");
  const [type, setType] = useContext(typeContext);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    setIsScrolled(scrollTop > windowHeight);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setType(option);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = selectedOption === "Privat" ? navigationPersonal : navigationBusiness;

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-lg"}`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Logo />
        </a>

        {/* Service Type Toggle */}
        <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-full">
          <button
            onClick={() => handleOptionChange("Privat")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${selectedOption === "Privat" 
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-gray-600 hover:text-blue-600"}`}
          >
            Privat
          </button>
          <button
            onClick={() => handleOptionChange("Erhverv")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${selectedOption === "Erhverv" 
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-gray-600 hover:text-blue-600"}`}
          >
            Erhverv
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              {item.title}
            </a>
          ))}
          <Button 
            onClick={scrollToContact}
            className="px-6 py-2 rounded-full font-semibold"
            shiny={true}
          >
            Få et tilbud
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleNavigation}
          aria-label="Toggle menu"
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {openNavigation && (
        <nav className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className="text-gray-600 hover:text-blue-600 font-medium text-lg py-2 transition-colors"
                >
                  {item.title}
                </a>
              ))}
              <Button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-full font-semibold mt-4"
                shiny={true}
              >
                Få et tilbud
              </Button>
            </div>
          </div>
        </nav>
      )}

      <OfferHeader />
    </header>
  );
};

export default Header;
