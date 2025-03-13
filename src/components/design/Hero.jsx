import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 w-screen 
        h-full lg:h-screen"
    >
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="relative">
          <div
            className={`w-8 h-8 absolute top-1/2 left-1 bg-gradient-to-b
             from-[#ffffff] to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-8 h-8 absolute bottom-1/4 right-1  bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-8 h-8 absolute bottom-1/4 right-1/2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-8 h-8 absolute bottom-1/4 right-1/2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-15 h-15 absolute top-1/2 right-1/2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out `}
          />
        </div>
        <div className="relative">
          <div
            className={`w-5 h-5 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-10 h-10 absolute right-8 top-2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-15 h-15 absolute top-1/2 right-1/2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-5 h-5 absolute bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out `}
          />
        </div>
        <div className="relative">
          <div
            className={`w-2 h-2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-14 h-14 absolute bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-8 h-8 absolute bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-6 h-6 absolute right-1/2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full  transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-6 h-6 absolute right-1/2 top-1/2 bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`w-8 h-8 absolute bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
        <div className="relative ">
          <div
            className={`w-2 h-2 absolute bg-gradient-to-b from-[#ffffff]
              to-[lightblue] rounded-full 
              transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
