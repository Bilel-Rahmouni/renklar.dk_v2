import { pricingBusiness } from "../constants";
import Button from "./design/Button";

const ServicesBusiness = () => {
  return (
    <section
      id="services"
      className="px-4 md:pt-24 h-[150vh] mb-40 md:mb-20 flex flex-col items-center"
    >
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold tablet:text-[3rem]">
          Find din ideelle plan.
        </h2>
      </header>

      {/* Container for service cards */}
      <div className="w-full h-[30rem] flex p-8 flex-wrap justify-center gap-6">
        {pricingBusiness.map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-[28rem] items-center w-56 max-w-sm shadow-2xl p-4 relative"
            style={{ maxWidth: "300px" }}
          >
            <img
              src={item.img}
              alt={`${item.title} package image`}
              className="w-full h-32 object-cover"
            />
            <h4 className="text-center w-full mt-4" style={{ color: item.bg }}>
              {item.title}
            </h4>
            <p className="my-4 min-h-[4rem] text-n-8/50 text-center px-4">
              {item.description}
            </p>

            <div className="absolute bottom-4 w-full flex justify-center">
              <a href="#contact">
                <Button shiny={true}>Få et tilbud</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBusiness;
