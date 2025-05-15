import Button from "../../design/Button";

const HeroBusiness = () => {
  return (
    <section
      className="py-20 min-h-screen
        px-5 flex justify-center items-center
        relative "
      id="hero"
    >
      <div className="flex flex-col tablet:flex-row justify-center items-center gap-10 w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center tablet:items-start tablet:w-1/2 space-y-4 tablet:space-y-6 text-center tablet:text-left">
          <h1 className="text-4xl font-black text-gray-800 z-30 leading-tight">
            Erhvervsrengøring i Aarhus
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 z-30">
            Spar dig selv for besværet i din virksomhed – vi tager os af
            rengøringen for dig.
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 z-30">
            Priser fra{" "}
            <span className="text-5xl font-extrabold">260 Kr./time</span>{" "}
            (ekskl. moms)
          </h3>
          <h4 className="text-xl font-medium text-gray-700 z-30">
            Kontakt os for et skræddersyet tilbud
          </h4>

          <a href="#contact">
            <Button children="Få et tilbud" shiny={true} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBusiness;
