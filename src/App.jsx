import About from "./components/About";
import Header from "./components/Header";
import HeroPersonal from "./components/private/HeroPersonal";
import HeroBusiness from "./components/business/HeroBusiness";
import PricingPersonal from "./components/private/PricingPersonal";
import ServicesPersonal from "./components/private/ServicesPersonal";
import ServicesBusiness from "./components/business/ServicesBusiness";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import { createContext, useState } from "react";
import Reviews from "./components/Reviews";
import CookieConsentBanner from "./components/CookieConsent";
import ScriptLoader from "./components/ScriptLoader"; 
import { SelectedServiceProvider } from "./context/SelectedServiceContext";
export const typeContext = createContext();
const App = () => {
  const [type, setType] = useState("Privat");
  return (
    <SelectedServiceProvider>
      <typeContext.Provider value={[type, setType]}>
        <Header type={type} setType={setType} />
        {type == "Privat" && (
          <>
            <HeroPersonal />
            <ServicesPersonal />
            <PricingPersonal />
            <About />
            <Reviews />
            <Contact />
            <Faq />
            <Footer />
          </>
        )}
        {type == "Erhverv" && (
          <>
            <HeroBusiness />
            <ServicesBusiness />
            <About />
            <Reviews />
            <Contact />
            <Faq />
            <Footer />
          </>
        )} 
        <CookieConsentBanner />
        <ScriptLoader />
      </typeContext.Provider>
    </SelectedServiceProvider>
  );
};

export default App;
