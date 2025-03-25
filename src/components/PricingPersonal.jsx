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
  const mainPrice = 325; // Price per hour
  
  // Define frequency options with their multipliers
  const frequencyOptions = [
    { id: 1, multiplier: 1.0 },    // Weekly
    { id: 2, multiplier: 1.0 },   // Biweekly
    { id: 3, multiplier: 1.25 },   // Monthly
    { id: 4, multiplier: 1.25 }    // One-time
  ];

  const [selectedFrequency, setSelectedFrequency] = useState(1); 
  const [price, setPrice] = useState(0);
  const [firstTimePrice, setFirstTimePrice] = useState(0);
  const [priceSkatDeduction, setPriceSkatDeduction] = useState(0);
  
  // Surface area (minutes per 10m²)
  const [surface, setSurface] = useState(0);
  const surfaceMinutesPer10m2 = 15; // 15 minutes per 10m²

  // Bathrooms (minutes per bathroom)
  const [bathrooms, setBathrooms] = useState(1);
  const bathroomMinutes = 15; // 15 minutes per bathroom

  // Pets (additional minutes)
  const [pets, setPets] = useState(0);
  const petMinutes = 30; // 30 minutes for pets

  // Additional options (minutes)
  const [fridge, setFridge] = useState(0);
  const [microwave, setMicrowave] = useState(0);
  const [oven, setOven] = useState(0);
  const [kitchenHood, setKitchenHood] = useState(0);
  const [surfaceRugs, setSurfaceRugs] = useState(0);

  const fridgeMinutes = 30;
  const microwaveMinutes = 30;
  const ovenMinutes = 120;
  const hoodMinutes = 30;
  const rugMinutesPer10m2 = 10; // 10 minutes per 10m² of rugs

  useEffect(() => {
    // Calculate total minutes based on all options
    const surfaceMinutes = (surface / 10) * surfaceMinutesPer10m2;
    const bathroomTotalMinutes = bathrooms * bathroomMinutes;
    const petTotalMinutes = pets * petMinutes;
    const rugTotalMinutes = (surfaceRugs / 10) * rugMinutesPer10m2;
    
    const totalMinutes = 
      surfaceMinutes +
      bathroomTotalMinutes +
      petTotalMinutes +
      fridge +
      microwave +
      oven +
      kitchenHood +
      rugTotalMinutes;

    // Calculate base price based on minutes
    let calculatedPrice = (totalMinutes / 60) * mainPrice;
    
    // Ensure minimum price for areas between 0 and 30m²
    if (surface <= 30) {
      calculatedPrice = Math.max(325, calculatedPrice);
    }
    
    // Apply frequency multiplier
    const selectedOption = frequencyOptions.find(option => option.id === selectedFrequency);
    if (selectedOption) {
      calculatedPrice *= selectedOption.multiplier;
    }

    setPrice(Number(calculatedPrice.toFixed(2)));
    
    // Calculate first-time price with 15% discount
    const firstTimeCalculatedPrice = calculatedPrice * 0.85;
    setFirstTimePrice(Number(firstTimeCalculatedPrice.toFixed(2)));

    // Calculate tax deduction (26%)
    const taxDeductionPrice = calculatedPrice * 0.74;
    setPriceSkatDeduction(Number(taxDeductionPrice.toFixed(2)));
  }, [
    surface,
    bathrooms,
    pets,
    fridge,
    microwave,
    oven,
    kitchenHood,
    surfaceRugs,
    selectedFrequency
  ]);

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(Number(event.target.value));
  };

  return (
    <div className="mb-10 mt-32 sm:mt-52 pt-12 sm:pt-24 px-4 md:px-8 lg:px-16 flex flex-col items-center" id="pricing">
      <h1 className="text-3xl sm:text-4xl mb-4 sm:mb-8 text-center font-black">
        Ingen skjulte gebyrer - bare gennemsigtige priser.
      </h1>
      <h5 className="text-lg sm:text-xl mb-6 sm:mb-8 text-center font-medium">
        Priserne for rengøringsservice i Aarhus koster fra{" "}
        <span className="text-4xl font-extrabold">260</span> Kr./time (ekskl. moms)
      </h5>
      <div className="flex flex-col md:flex-row items-start justify-around w-full gap-6 sm:gap-8">
        {/* Left Side - Form Inputs */}
        <div className="flex flex-col w-full md:w-2/3 space-y-4 sm:space-y-6">
          {/* Frequency of Cleaning */}
          <div>
            <div className="text-md flex items-center font-semibold mb-3 sm:mb-4">
              <CiCalendar
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Hvor ofte ønsker du at få rengjort?
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {["Ugentligt", "Hver 2. uge", "Månedligt", "1time"].map((freq, index) => (
                <label key={freq} className="flex items-center">
                  <input
                    type="radio"
                    value={index + 1}
                    className="mr-2"
                    checked={selectedFrequency === index + 1}
                    onChange={handleFrequencyChange}
                  />
                  {freq}
                </label>
              ))}
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
                onChange={(e) => setBathrooms(Number(e))}
              />
              <p className="ml-4">{bathrooms}</p>
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
                  checked={pets === 1}
                  onChange={() => setPets(1)}
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
                  onChange={(e) => setFridge(e.target.checked ? fridgeMinutes : 0)}
                />
                Køleskab
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setMicrowave(e.target.checked ? microwaveMinutes : 0)}
                />
                Mikrobølgeovn
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setOven(e.target.checked ? ovenMinutes : 0)}
                />
                Ovn
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => setKitchenHood(e.target.checked ? hoodMinutes : 0)}
                />
                Køkkenhætte
              </label>
            </div>
          </div>
        </div>

        {/* Right Side - Price Summary */}
        <div className="w-full md:w-1/3 sticky top-24 sm:top-32 flex flex-col items-center space-y-4 sm:space-y-6 p-4 sm:p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold">Prisoversigt</h2>
          <div className="text-base sm:text-lg mb-4 w-full">
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