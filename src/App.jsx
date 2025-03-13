import About from "./components/About";
import Header from "./components/Header";
import HeroPersonal from "./components/HeroPersonal";
import HeroBusiness from "./components/HeroBusiness";
import PricingPersonal from "./components/PricingPersonal";
import ServicesPersonal from "./components/ServicesPersonal";
import ServicesBusiness from "./components/ServicesBusiness";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import { createContext, useState } from "react";
import Reviews from "./components/Reviews";
import CookieConsentBanner from "./components/CookieConsent";
import ScriptLoader from "./components/ScriptLoader";
export const typeContext = createContext();
const App = () => {
  const [type, setType] = useState("Privat");
  return (
    <typeContext.Provider value={[type, setType]}>
      <Header type={type} setType={setType} />
      {type == "Privat" && (
        <>
          <HeroPersonal />
          <ServicesPersonal />
          <PricingPersonal />
        </>
      )}
      {type == "Erhverv" && (
        <>
          <HeroBusiness />
          <ServicesBusiness />
        </>
      )}
      <About />
      <Reviews />
      <Contact />
      <Faq />
      <Footer />
      <CookieConsentBanner />
      <ScriptLoader />
    </typeContext.Provider>
  );
};

export default App;
