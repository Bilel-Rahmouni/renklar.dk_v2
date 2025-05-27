import { pricingPersonal } from "../../constants";
import Button from "../../design/Button";
import styled from "styled-components";
import { useSelectedService } from "../../context/SelectedServiceContext";
import { useState, useEffect } from "react";
import { BsHouse, BsCarFront, BsFlower1 } from "react-icons/bs"; 
import { TbWindow } from "react-icons/tb";
import { LuKeySquare } from "react-icons/lu"; 

const ServiceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 300px;
  }
  border-radius: 2rem;
  overflow: hidden;
  background: white;
  border: 1.5px solid #e5e7eb;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.18);
  }
`;

const ServiceIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1rem;
  background: ${props => props.isSelected ? 'rgba(59, 130, 246, 0.1)' : 'transparent'};
  min-width: 120px;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
  }
  
  svg {
    font-size: 2.5rem;
    color: ${props => props.isSelected ? '#3b82f6' : '#6b7280'};
    margin-bottom: 0.75rem;
  }
  
  span {
    color: ${props => props.isSelected ? '#3b82f6' : '#6b7280'};
    font-weight: ${props => props.isSelected ? '600' : '400'};
    font-size: 1.1rem;
  }
`;

const ServicesPersonal = () => {
  const { setSelectedService } = useSelectedService();
  const [selectedServiceId, setSelectedServiceId] = useState("0"); // Default to house service

  useEffect(() => {
    // Set initial service to house
    setSelectedServiceId("0");
    setSelectedService('home');
  }, []);

  const handleSeePrice = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceIcon = (title) => {
    switch(title.toLowerCase()) {
      case 'hjem':
        return <BsHouse />;
      case 'flytning':
        return <LuKeySquare />;
      case 'vinduespudsning':
        return <TbWindow />;
      case 'bilrengøring':
        return <BsCarFront />;
      case 'havearbejde':
        return <BsFlower1 />;
      default:
        return <BsHouse />;
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-4 md:mb-4 text-center font-black">
            Vælg din service der passer bedst til dine behov
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Alle vores rengøringstjenester er miljøvenlige og professionelle.
          </p>
        </header>

        {/* Service Icons Header */}
        <div className="flex justify-center gap-8 mb-12">
          {pricingPersonal.map((item) => {
            let serviceType = item.title.toLowerCase();
            if (serviceType === 'flytning') serviceType = 'move out';
            else if (serviceType === 'hjem') serviceType = 'home';
            else if (serviceType === 'vinduespudsning') serviceType = 'window';
            else if (serviceType === 'bilrengøring') serviceType = 'car';
            else if (serviceType === 'havearbejde') serviceType = 'gardening';
            return (
              <ServiceIcon
                key={item.id}
                isSelected={selectedServiceId === item.id}
                onClick={() => {
                  setSelectedServiceId(item.id);
                  setSelectedService(serviceType);
                }}
              >
                {getServiceIcon(item.title)}
                <span>{item.title}</span>
              </ServiceIcon>
            );
          })}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-3xl mx-auto px-2 sm:px-4">
          {pricingPersonal.map((item) => {
            let serviceType = item.title.toLowerCase();
            if (serviceType === 'flytning' || serviceType === 'hjem') serviceType = 'home';
            if (serviceType === 'vinduespudsning') serviceType = 'window';
            if (serviceType === 'bilrengøring') serviceType = 'car';
            if (serviceType === 'havearbejde') serviceType = 'gardening';

            return (
              <div
                key={item.id}
                className={`transition-all duration-500 ${
                  selectedServiceId === item.id
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform -translate-y-4 pointer-events-none absolute'
                }`}
              >
                <ServiceCard className="group">
                  {/* Left: Image with floating icon */}
                  <div className="relative w-full h-48 sm:h-56 lg:w-60 lg:min-w-[192px] lg:h-full flex items-center justify-center bg-gray-100 mx-auto">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Right: Info */}
                  <div className="flex-1 flex flex-col justify-between p-4 sm:p-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.features.map((feature, index) => (
                          <span key={index} className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-end gap-4 mt-auto">
                      {item.price && (
                        <div>
                          <span className="text-xl font-bold text-gray-900">{item.price} DKK</span>
                          <span className="text-base text-gray-500 ml-1">/time</span>
                        </div>
                      )}
                      <Button
                        onClick={handleSeePrice}
                        className="rounded-full py-2 px-6 text-base font-semibold"
                        shiny={true}
                      >
                        Se pris
                      </Button>
                    </div>
                  </div>
                </ServiceCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPersonal;
