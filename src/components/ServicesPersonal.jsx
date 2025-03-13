import { pricingPersonal } from "../constants";
import Button from "./design/Button";
import styled from "styled-components";

const ServiceCard = styled.div`
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServicesPersonal = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Find din ideelle plan</h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Vælg den plan, der passer bedst til dine behov. Alle vores rengøringstjenester er miljøvenlige og professionelle.
          </p>
        </div>

        {/* Container for service cards */}
        <div className="flex justify-center">
          <div className=" 
          w-full   flex flex-1 justify-around items-center">
            {pricingPersonal.map((item) => (
              <ServiceCard
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm sm:text-base text-neutral-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="#contact" className="w-full" shiny={true}>
                    Få et tilbud
                  </Button>
                </div>
              </ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPersonal;
