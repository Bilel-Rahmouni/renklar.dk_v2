import Button from "../../design/Button";

const HeroBusiness = () => {
  return (
    <section
      className="min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 flex justify-center items-center relative bg-gradient-to-b from-white to-gray-50"
      id="hero"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 z-30 leading-tight">
              Erhvervsrengøring i Aarhus
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 z-30 leading-relaxed">
              Spar dig selv for besværet i din virksomhed – vi tager os af
              rengøringen for dig.
            </h2>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 z-30 mb-2">
                Priser fra{" "}
               <p className="text-4xl sm:text-4xl font-bold text-blue-600"> 240 Kr./time
                </p>
              </h3>
              <h4 className="text-lg sm:text-xl md:text-2xl text-gray-600 z-30">
                (ekskl. moms)
              </h4>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 z-30">
              Kontakt os for et skræddersyet tilbud
            </h4>

            <a href="#contact" className="w-full sm:w-auto mt-4">
              <Button className="w-full sm:w-auto text-lg sm:text-xl py-4 px-8" shiny={true}>
                Få et tilbud
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBusiness;
