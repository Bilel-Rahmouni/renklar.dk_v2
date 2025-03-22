import React from "react";

function OfferHeader() {
  return (
    <div
      className="absolute
      top-20 
      left-0  
      w-screen laptop:h-9
      z-40
      flex 
      items-center 
      justify-center"
    >
      <div
        className="hidden laptop:flex justify-start h-full 
      laptop:w-1/5 bg-gradient-to-r from-blue-300 to-[#63baf8]"
      >
        {/* <div
          className="bg-[url('./assets/summer2.png')]  
          overflow-hidden
          bg-cover 
          h-full 
          w-1/2"
        ></div> */}
      </div>
      <div className="h-full w-full laptop:w-3/5 flex items-center justify-around flex-col bg-[#63baf8]">
        <div className="flex flex-row">
          {/* <h3
            className="text-xs font-semibold bg-gradient-to-r
        from-[rgb(0,0,0,0.1)]
        via-[rgb(0,0,0,0.5)] 
        to-[rgb(0,0,0,1)] 
         text-transparent
        bg-clip-text"
          >
            Back to School tilbud
          </h3> */}
          {/* <h3 className="text-xs font-semibold text-black">
            Back to School tilbud
          </h3> */}
          {/* <h3
            className="text-xs 
          font-semibold 
          bg-gradient-to-r
        from-[rgb(0,0,0,1)] 
        via-[rgb(0,0,0,0.5)] 
        to-[rgb(0,0,0,0.1)]
         text-transparent
        bg-clip-text"
          >
            Back to School tilbud
          </h3> */}
        </div>
        <h3
          className="text-md font-semibold
          text-center  
         "
        >
          Få 15% rabat på din første rengøring
        </h3>
      </div>
      <div className="hidden laptop:flex justify-end h-full laptop:w-1/5 bg-gradient-to-r from-[#63baf8] to-blue-300">
        {/* <div
          className="bg-[url('./assets/summer1.png')]
           bg-cover
          overflow-hidden
          h-full
          w-1/2"
        ></div> */}
      </div>
    </div>
  );
}

export default OfferHeader;
