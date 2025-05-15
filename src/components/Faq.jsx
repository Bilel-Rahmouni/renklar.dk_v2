import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../assets/svg/chevron-down.svg";
import Button from "../design/Button";
import { faq } from "../constants";
import { Link } from "react-router-dom";
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-5 text-left ${isEnter && "bg-sky-500"}`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);
function Faq() {
  return (
    <div className="flex h-screen flex-col justify-around mt-80 laptop:h-screen items-center">
      <p className="text-4xl mb-12 text-center font-bold tablet:text-[3rem]">
        Frequently asked questions.
      </p>
      <div className="border-t w-2/3">
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={200}>
          {faq.slice(0, 3).map((item, index) => (
            <AccordionItem key={index} header={item.question}>
              <div className="bg-gray-300 p-5 -mx-3">{item.answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Link to={"/Faq"} target="_blank">
        <p className="font-code underline font-semibold">Se mere.</p>
      </Link>
      <a href={"#contact"}>
        <Button className="m-12" children={"Stil et spørgsmål."} shiny={true}></Button>
      </a>
    </div>
  );
}

export default Faq;
