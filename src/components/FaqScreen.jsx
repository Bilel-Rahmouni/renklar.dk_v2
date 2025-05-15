import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { faq } from "../constants";
import chevron from "../assets/svg/chevron-down.svg";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter ? "rotate-180" : ""
          }`}
          src={chevron}
          alt={`Chevron indicating ${isEnter ? "collapse" : "expand"} state`}
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-5 text-left ${isEnter ? "bg-sky-500" : ""}`,
      "aria-expanded": ({ isEnter }) => (isEnter ? "true" : "false"),
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

function FaqScreen() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-32 sm:py-40 md:py-48 lg:py-56">
      <div className="container mx-auto px-4">
        <p className="text-4xl mb-12 text-center font-bold tablet:text-[3rem]">
          Frequently asked questions.
        </p>
        <div className="border-t w-2/3 mx-auto">
          <Accordion transition transitionTimeout={200}>
            {faq.map((item, index) => (
              <AccordionItem key={index} header={item.question}>
                <div className="bg-blue-200 p-5 -mx-3">{item.answer}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="h-32 sm:h-40 md:h-48 lg:h-56"></div> {/* Spacer div */}
    </section>
  );
}

export default FaqScreen;
