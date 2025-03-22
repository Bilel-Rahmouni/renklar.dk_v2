import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigationPersonal, navigationBusiness } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useContext, useEffect, useState } from "react";
import { typeContext } from "../App";
import OfferHeader from "./OfferHeader";
import Logo from "./design/Logo";
import Button from "./design/Button";
const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Privat");
  const [type, setType] = useContext(typeContext);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [color, setColor] = useState("black");
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
    if (scrollTop > windowHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setType(option);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    isScrolled ? setColor("black") : setColor("black");
  }, [isScrolled]);
  return (
    <div
      className={`px-6 fixed top-0 left-0 w-full h-20 z-50 flex 
        items-center justify-between ${
        isScrolled ? "lg:bg-white text-black shadow-sm" : "lg:backdrop-blur-xl"
      } 
      ${openNavigation ? "bg-white text-black" : "backdrop-blur-lg"}`}
    >
      <a className="block w-[12rem] xl:mr-8 -mt-1" href="#hero">
        <Logo />
      </a> 
      {/* Business/Personal Toggle */}
      <div className="flex flex-row h-10 rounded-xl -mt-1">
        <div
          onClick={() => handleOptionChange("Privat")}
          className={`px-4 py-2 justify-center flex items-center cursor-pointer rounded-3xl text-sm sm:text-base transition-colors ${
            selectedOption === "Privat"
              ? `bg-blue-200 text-blue-800`
              : `bg-transparent text-${color} hover:bg-blue-50`
          }`}
        >
          Privat
        </div>
        <div
          onClick={() => handleOptionChange("Erhverv")}
          className={`px-4 py-2 justify-center flex items-center cursor-pointer rounded-3xl text-sm sm:text-base transition-colors ${
            selectedOption === "Erhverv"
              ? `bg-blue-200 text-blue-800`
              : `bg-transparent text-${color} hover:bg-blue-50`
          }`}
        >
          Erhverv
        </div>
      </div> 
      {/* Navigation Menu */}
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed top-24 left-0 right-0 bottom-0
         bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
      >
        <div
          className="relative z-2 flex flex-col 
          items-center justify-center w-full h-full
          lg:flex-row lg:h-auto lg:w-auto -mt-1"
        >
          {selectedOption === "Privat"
            ? navigationPersonal.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative text-xl text-center w-full
                   transition-colors hover:text-blue-600 
                   px-6 py-3 md:py-4 lg:py-6 lg:-mr-0.25 lg:text-sm lg:font-semibold
                   lg:w-auto z-2 text-${color} lg:leading-5 lg:hover:text-n-8 xl:px-8`}
                >
                  {item.title}
                </a>
              ))
            : navigationBusiness.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative text-xl text-center w-full
                   transition-colors hover:text-blue-600
                   px-6 py-3 md:py-4 lg:py-6 lg:-mr-0.25 lg:text-sm
                   lg:font-semibold lg:w-auto text-${color}
                   lg:leading-5 lg:hover:text-n-8 xl:px-8`}
                >
                  {item.title}
                </a>
              ))}
        </div>
      </nav> 

      {/* Contact Button */}
      <div className="hidden lg:block lg:ml-4 -mt-1">
        <a href="#contact" className="inline-block">
          <Button 
            className="button py-3 px-8 text-sm font-semibold hover:transform hover:scale-105 transition-all duration-300"
            shiny={true}
          >
            Få et tilbud
          </Button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto z-50 lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors -mt-1"
        onClick={toggleNavigation}
        aria-label="Toggle menu"
      >
        <MenuSvg openNavigation={openNavigation} />
      </button>

      <OfferHeader />
    </div>
  );
};

export default Header;
