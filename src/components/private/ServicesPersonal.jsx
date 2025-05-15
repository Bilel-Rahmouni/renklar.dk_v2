import { pricingPersonal } from "../../constants";
import Button from "../../design/Button";
import styled from "styled-components";

const ServiceCard = styled.div`
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServicesPersonal = () => {
  return (
    <section id="services" className="px-4 py-16 sm:py-20 md:py-24 lg:py-32 mb-16 sm:mb-24 md:mb-32 lg:mb-40 flex flex-col items-center">
      <div className="container mx-auto px-4">
        
      <header className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-4xl font-bold tablet:text-[3rem]">
          Find din ideelle plan.
        </h2>
      </header>
        <div className="text-center mb-12 sm:mb-16 md:mb-20"> 
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Vælg den plan, der passer bedst til dine behov. Alle vores rengøringstjenester er miljøvenlige og professionelle.
          </p>
        </div>

        {/* Container for service cards */}
              <div className="w-full h-auto min-h-[30rem] flex p-4 sm:p-6 md:p-8 flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
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
                  <a href="#contact"><Button href="#contact" className="w-full" shiny={true}>
                    Få et tilbud
                  </Button></a>
                </div>
              </ServiceCard>
            ))} 
        </div>
      </div>
    </section>
  );
};

export default ServicesPersonal;
