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
    <div className="flex flex-col items-center justify-around py-16 sm:py-20 laptop:h-screen">
      <p className="text-4xl mb-12 text-center font-bold tablet:text-[3rem]">
        Frequently asked questions.
      </p>
      <div className="border-t w-2/3">
        <Accordion transition transitionTimeout={200}>
          {faq.map((item, index) => (
            <AccordionItem key={index} header={item.question}>
              <div className="bg-blue-200 p-5 -mx-3">{item.answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqScreen;
