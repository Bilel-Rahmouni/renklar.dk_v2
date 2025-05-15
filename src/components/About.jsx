import React from "react";
import { TbLeaf, TbPigMoney } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineSparkles } from "react-icons/hi2";
import employeeImage from "../assets/employee.jpg"; 
import Logo from "./design/Logo";
import styled from "styled-components";

const IconWrapper = styled.div`
  background: #EFF6FF;
  padding: 0.375rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                Hvorfor vælge <span className="text-primary-600 mr-14 ml-2 flex items-center"
                  style={{ transform: 'scale(1.5)', transformOrigin: 'left center' }}>
                  <Logo />
                </span>?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-50 rounded-lg">
              <div className=" flex flex-row items-start">
                  <IconWrapper className="text-primary-600 text-base mr-6">
                  <HiOutlineSparkles className="text-primary-600 text-base " />
                  </IconWrapper>
           <h3 className="text-lg font-semibold mb-2">Kvalitet</h3>
              </div>
                <p className="text-neutral-600">
                  Vi prioriterer førsteklasses rengøringskvalitet og sikrer fejlfri resultater hver gang.
                </p>
              </div>

              <div className="p-6 bg-neutral-50 rounded-lg flex flex-col items-start">
              <div className=" flex flex-row items-start">
                      <IconWrapper className="text-primary-600 text-base mr-6">
                  <VscWorkspaceTrusted className="text-primary-600 text-base" />
                  </IconWrapper>
                <h3 className="text-lg font-semibold mb-2">Tillid</h3>
              </div>
                <p className="text-neutral-600">
                  Du kan være tryg ved, at vi prioriterer sikkerhed og tryghed med største integritet.
                </p>
              </div>

              <div className="p-6 bg-neutral-50 rounded-lg flex flex-col items-start">
              <div className=" flex flex-row items-start">
                   <IconWrapper className="text-primary-600 text-base mr-6">
                  <TbLeaf className="text-primary-600 text-base" />
                  </IconWrapper>
                <h3 className="text-lg font-semibold mb-2">Bæredygtighed</h3>
                </div>
                <p className="text-neutral-600">
                  Vi er engagerede i grønne praksisser og sikrer et renere miljø for kommende generationer.
                </p>
              </div>

              <div className="p-6 bg-neutral-50 rounded-lg flex flex-col items-start">
              <div className=" flex flex-row items-start">
                   <IconWrapper className="text-primary-600 text-base mr-6">
                  <TbPigMoney className="text-primary-600 text-base" />
                  </IconWrapper>
                <h3 className="text-lg font-semibold mb-2">Gennemsigtige Priser</h3>
                </div>
                <p className="text-neutral-600">
                  Nyd overkommelige priser med gennemsigtige beregninger og fleksible aftaler.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="h-full space-y-8">
              <img 
                src={employeeImage} 
                alt="Renklar Employee" 
                className="w-full h-full rounded-lg object-center"
              />
           </div>
        </div>
      </div>
    </section>
  );
}

export default About;
