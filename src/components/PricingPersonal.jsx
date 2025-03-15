import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { PiRug, PiToiletLight, PiDogLight } from "react-icons/pi";
import { BsHouse, BsPatchQuestion, BsCalendar4 } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

import { MdOutlineKitchen } from "react-icons/md";
import Button from "./design/Button";

const PricingPersonal = () => {
  const mainPrice = 325;
  const [selectedFrequency, setSelectedFrequency] = useState("Ugentligt"); 
  const [price, setPrice] = useState(mainPrice);
  const [firstTimePrice, setFirstTimePrice] = useState(mainPrice);
  const [priceSkatDeduction, setPriceSkatDeduction] = useState(mainPrice);
  const [surface, setSurface] = useState(0);
  const [cleaningTimeWithoutOptions, setCleaningTimeWithoutOptions] =
    useState(60);
  const [pets, setPets] = useState(0);
  const [bathrooms, setBathrooms] = useState(15);
  const [fridge, setFridge] = useState(0);
  const [microwave, setMicrowave] = useState(0);
  const [oven, setOven] = useState(0);
  const [kitchenHood, setKitchenHood] = useState(0);
  const [surfaceRugs, setSurfaceRugs] = useState(0);

  useEffect(() => {
    if (surface <= 40) {
      setCleaningTimeWithoutOptions(60);
    } else if (surface <= 70) {
      setCleaningTimeWithoutOptions(90);
    } else if (surface <= 100) {
      setCleaningTimeWithoutOptions(120);
    } else if (surface <= 130) {
      setCleaningTimeWithoutOptions(150);
    } else if (surface <= 160) {
      setCleaningTimeWithoutOptions(180);
    } else if (surface <= 190) {
      setCleaningTimeWithoutOptions(210);
    } else if (surface <= 220) {
      setCleaningTimeWithoutOptions(240);
    } else if (surface <= 250) {
      setCleaningTimeWithoutOptions(270);
    } else if (surface <= 280) {
      setCleaningTimeWithoutOptions(300);
    } else if (surface <= 300) {
      setCleaningTimeWithoutOptions(330);
    } else {
      setCleaningTimeWithoutOptions(60);
    }

    const convertToTime = (number) => { 
      setPrice(
        selectedFrequency === "Månedligt" || selectedFrequency === "1time"
          ? (number * (mainPrice / 60) * 1.25).toFixed(2)
          : (number * (mainPrice / 60)).toFixed(2)
      );
      setFirstTimePrice((number * (mainPrice / 60) * 0.85).toFixed(2));
      setPriceSkatDeduction((number * (mainPrice / 60) * 0.74).toFixed(2));
    };

    const totalCleaningTime =
      bathrooms === 15
        ? pets +
          fridge +
          microwave +
          oven +
          kitchenHood +
          surfaceRugs +
          cleaningTimeWithoutOptions
        : pets +
          bathrooms +
          fridge +
          microwave +
          oven +
          kitchenHood +
          surfaceRugs +
          cleaningTimeWithoutOptions;

    convertToTime(totalCleaningTime);
  }, [
    cleaningTimeWithoutOptions,
    pets,
    bathrooms,
    fridge,
    microwave,
    oven,
    kitchenHood,
    surface,
    surfaceRugs,
    selectedFrequency,
  ]);

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  return (
    <div
      className="mb-10 mt-52 pt-24 px-4 flex flex-col items-center"
      id="pricing"
    >
      <h1 className="text-4xl mb-8 text-center font-black tablet:text-[3rem]">
        Ingen skjulte gebyrer - bare gennemsigtige priser.
      </h1>
      <h5 className="text-xl mb-8 text-center font-medium">
        Priserne for rengøringsservice i Aarhus koster fra{" "}
        <span className="text-4xl font-extrabold">260</span> Kr./time (ekskl.
        moms)
      </h5>
      <div className="flex flex-col tablet:flex-row items-center justify-center w-full gap-4">
        {/* Left Side - Form Inputs */}
        <div className="flex flex-col tablet:w-1/3 space-y-6">
          {/* Frequency of Cleaning */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <CiCalendar
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Hvor ofte ønsker du at få rengjort?
            </div>
            <div className="flex flex-row space-x-5">
              {["Ugentligt", "Hver 2. uge", "Månedligt", "1time"].map(
                (freq) => (
                  <label key={freq} className="flex items-center">
                    <input
                      type="radio"
                      value={freq}
                      className="mr-2"
                      checked={selectedFrequency === freq}
                      onChange={handleFrequencyChange}
                    />
                    {freq}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Surface Area */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <BsHouse
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Hvor stort et areal ønsker du at få rengjort?
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={0}
                value={surface}
                min={0}
                max={300}
                step={10}
                onChange={(e) => setSurface(Number(e))}
              />
              <p className="ml-4">{surface}m²</p>
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <PiToiletLight
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              Hvor mange badeværelser vil du gerne have rengjort?
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={1}
                min={1}
                max={5}
                step={1}
                onChange={(e) => setBathrooms(15 * Number(e))}
              />
              <p className="ml-4">{bathrooms / 15}</p>
            </div>
          </div>

          {/* Surface Rugs */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <PiRug
               size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              Hvor stort et areal er dækket af tæpper?
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={0}
                min={0}
                max={surface}
                step={10}
                onChange={(e) => setSurfaceRugs(Number(e))}
              />
              <p className="ml-4">{surfaceRugs}m²</p>
            </div>
          </div>

          {/* Pets */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <PiDogLight
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              Har du kæledyr?
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  checked={pets === 30}
                  onChange={() => setPets(30)}
                />
                Ja
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  checked={pets === 0}
                  onChange={() => setPets(0)}
                />
                Nej
              </label>
            </div>
          </div>

          {/* Options */}
          <div>
            <div className="text-md flex items-center font-semibold mb-4">
              <MdOutlineKitchen
               size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"/>
              Ønsker du at få rengjort en eller flere af disse muligheder?
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setFridge(e.target.checked ? 30 : 0)}
                />
                Køleskab
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setMicrowave(e.target.checked ? 30 : 0)}
                />
                Mikrobølgeovn
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setOven(e.target.checked ? 120 : 0)}
                />
                Ovn
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setKitchenHood(e.target.checked ? 30 : 0)}
                />
                Køkkenhætte
              </label>
            </div>
          </div>
        </div>

        {/* Right Side - Price Summary */}
        <div className="tablet:w-1/3 flex flex-col items-center space-y-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold">Prisoversigt</h2>
          <div className="text-lg mb-4">
            <div className="flex justify-between mt-2">
              <span>Pris:</span>
              <span>{price} DKK</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Første gang rabat:</span>
              <span>{firstTimePrice} DKK</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Skattemæssig fradrag:</span>
              <span>{priceSkatDeduction} DKK</span>
            </div>
          </div>
          <a href="#contact" className="z-30">
            <Button className="mt-2" shiny={"true"}>
              Få rabatkupon nu!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPersonal;