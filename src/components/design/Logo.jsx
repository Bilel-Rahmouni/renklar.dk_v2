import React from "react";

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <p
        className="text-xl sm:text-xl md:text-xl lg:text-xl
                   bg-gradient-to-r from-[#00F8FF] via-[#22F9CE]
                    to-[#65FE65]
                   inline-block text-transparent bg-clip-text
                   font-Comfortaa font-bold"
        aria-label="Renklar logo"
      >
        renklar.dk
      </p>
    </div>
  );
}

export default Logo;
