import "rc-slider/assets/index.css"; 
import PricingWindows from "./PricingWindows";
import PricingCar from './PricingCar';
import PricingGardening from './PricingGardening';
import PricingHome from './PricingHome';
import { useSelectedService } from "../../context/SelectedServiceContext";

const PricingPersonal = () => {
  const { selectedService } = useSelectedService();
  return (
    <div className="relative mb-16 sm:mb-24 md:mb-32 lg:mb-40 mt-16 sm:mt-24 md:mt-32 lg:mt-40 py-16 sm:py-20 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 flex flex-col items-center" id="pricing">
      {(!selectedService || selectedService === 'home') && <PricingHome />}
      {selectedService === 'window' && <PricingWindows />}
      {selectedService === 'car' && <PricingCar />}
      {selectedService === 'gardening' && <PricingGardening />}
    </div>
  );
};

export default PricingPersonal;