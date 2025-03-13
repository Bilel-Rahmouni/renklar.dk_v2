import { useEffect, useState } from "react";
import Button from "./design/Button";
import styled, { keyframes } from "styled-components";
import heroImage from "../assets/team1.jpg";
import { AiFillStar } from "react-icons/ai";

// Define the shine animation
const shine = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ShiningText = styled.h1`
  text-align: center;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #00f8ff, #22f9ce, #65fe65);
  background-size: 200%;
  animation: ${shine} 3s linear infinite;
  z-index: 30;
`;

const FloatingElement = styled.div`
  animation: ${float} 6s ease-in-out infinite;
`;

const BranchLeft = styled.svg`
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: auto;
  fill: #22c55e;
  stroke: #22c55e;
  stroke-width: 1;
`;

const BranchRight = styled.svg`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%) scaleX(-1);
  width: 80px;
  height: auto;
  fill: #22c55e;
  stroke: #22c55e;
  stroke-width: 1;
`;

const HeroPersonal = () => {
  const [hours, setHours] = useState(19);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            // Reset the timer when it reaches 00:00:00
            setHours(19);
            setMinutes(0);
            setSeconds(0);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative"
      id="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
   
      }}
    >
      {/* Dark overlay with gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 
      via-black/20 "></div> */}
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-relaxed">
              Professionel rengøring i{" "}
              <span className="bg-gradient-to-r pt-2 from-[#00F8FF] via-[#22F9CE] to-[#65FE65] inline-block text-transparent bg-clip-text">
                Århus
              </span>
        </h1>
            <p className="text-lg sm:text-xl text-black-200 max-w-2xl mx-auto lg:mx-0">
              Vi tilbyder professionel rengøring til private hjem i Århus og omegn. 
              Vores erfarne team sikrer et rent og sundt hjem for dig og din familie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center
             lg:justify-start gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-black-300">Priser fra</p>
                <p className="text-3xl sm:text-4xl font-bold text-blue-400">260 Kr./time</p>
                <p className="text-sm text-black-300">(ekskl. moms)</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-black-300">Første gangs pris</p>
                <p className="text-3xl sm:text-4xl font-bold text-green-400">-15%</p>
                <p className="text-sm text-black-300">på første rengøring</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-black-300">Udflytningsrengøring</p>
                <p className="text-3xl sm:text-4xl font-bold text-green-400">-30%</p>
                <p className="text-sm text-black-300">på udflytningsrengøring</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#contact" className="button w-full sm:w-auto" shiny={true}>
                Få et tilbud
              </Button> 
              <Button href="#pricing" className="button w-full sm:w-auto" shiny={true}>
                Se priser
              </Button>
            </div>
          </div>

          {/* Right Content - Empty for now */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPersonal;
