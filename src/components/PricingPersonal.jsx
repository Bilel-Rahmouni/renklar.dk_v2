import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { PiRug, PiToiletLight, PiDogLight } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKitchen } from "react-icons/md";
import Button from "./design/Button";

const PricingPersonal = () => {
  const mainPrice = 325; // Updated main price
  
  const [selectedFrequency, setSelectedFrequency] = useState("Ugentligt");
  const [time, setTime] = useState("01hr00min");
  const [price, setPrice] = useState(mainPrice);
  const [firstTimePrice, setFirstTimePrice] = useState(mainPrice);
  const [priceSkatDeduction, setPriceSkatDeduction] = useState(mainPrice);
  
  // Surface area and cleaning time
  const [surface, setSurface] = useState(5);
  const [cleaningTimeWithoutOptions, setCleaningTimeWithoutOptions] = useState(60);
  
  // Additional options
  const [pets, setPets] = useState(0);
  const [bathrooms, setBathrooms] = useState(1);
  const [fridge, setFridge] = useState(0);
  const [microwave, setMicrowave] = useState(0);
  const [oven, setOven] = useState(0);
  const [sheets, setSheets] = useState(0);
  const [surfaceRugs, setSurfaceRugs] = useState(0);

  useEffect(() => {
    // Calculate base cleaning time based on surface area
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
      let h = Math.floor(number / 60);
      let m = number % 60;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      setTime(`${h}hr${m}min`);
      
      // Calculate prices
      const basePrice = number * (mainPrice / 60);
      setPrice(
        selectedFrequency === "Månedligt" || selectedFrequency === "1time"
          ? (basePrice * 1.25).toFixed(2)
          : basePrice.toFixed(2)
      );
      setFirstTimePrice((basePrice * 0.85).toFixed(2));
      setPriceSkatDeduction((basePrice * 0.74).toFixed(2));
    };

    // Calculate total cleaning time
    const totalCleaningTime =
      bathrooms === 1
        ? pets +
          fridge +
          microwave +
          oven +
          sheets +
          surfaceRugs +
          cleaningTimeWithoutOptions
        : pets +
          (bathrooms - 1) * 20 +
          fridge +
          microwave +
          oven +
          sheets +
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
    sheets,
    surface,
    surfaceRugs,
    selectedFrequency,
  ]);

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  return (
    <div className="relative mb-60 sm:mb-80 md:mb-96 lg:mb-[32rem] mt-60 sm:mt-80 md:mt-96 lg:mt-[32rem] pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-4 md:px-8 lg:px-16 flex flex-col items-center" id="pricing">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-24 sm:mb-32 md:mb-40 text-center font-black">
        Ingen skjulte gebyrer - bare gennemsigtige priser.
      </h1>
      <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-24 sm:mb-32 md:mb-40 text-center font-medium">
        Priserne for rengøringsservice i Aarhus koster fra{" "}
        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">260</span> Kr./time (ekskl. moms)
      </h5>
      <div className="relative flex flex-col lg:flex-row items-start justify-around w-full gap-24 sm:gap-32 md:gap-40">
        {/* Left Side - Form Inputs */}
        <div className="relative z-10 flex flex-col w-full lg:w-2/3 space-y-12 sm:space-y-16">
          {/* Frequency of Cleaning */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="text-md flex items-center font-semibold mb-3 sm:mb-4">
              <CiCalendar
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Hvor ofte ønsker du at få rengjort?
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {["Ugentligt", "Hver 2. uge", "Månedligt", "1time"].map((freq) => (
                <label key={freq} className="flex items-center">
                  <input
                    type="radio"
                    value={freq}
                    className="mr-2 w-4 h-4"
                    checked={selectedFrequency === freq}
                    onChange={handleFrequencyChange}
                  />
                  {freq}
                </label>
              ))}
            </div>
          </div>

          {/* Surface Area */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
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
                defaultValue={10}
                value={surface}
                min={10}
                max={200}
                step={5}
                onChange={(e) => setSurface(Number(e))}
                className="w-full"
              />
              <p className="ml-4 min-w-[60px]">{surface}m²</p>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="text-md flex items-center font-semibold mb-4">
              <PiToiletLight
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
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
                className="w-full"
              />
              <p className="ml-4 min-w-[60px]">{bathrooms}</p>
            </div>
          </div>

          {/* Surface Rugs */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="text-md flex items-center font-semibold mb-4">
              <PiRug
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Hvor stort et areal er dækket af tæpper?
            </div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={0}
                min={0}
                max={surface}
                step={5}
                onChange={(e) => setSurfaceRugs(Number(e))}
                className="w-full"
              />
              <p className="ml-4 min-w-[60px]">{surfaceRugs}m²</p>
            </div>
          </div>

          {/* Pets */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="text-md flex items-center font-semibold mb-4">
              <PiDogLight
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Har du kæledyr?
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2 w-4 h-4"
                  checked={pets === 30}
                  onChange={() => setPets(30)}
                />
                Ja
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2 w-4 h-4"
                  checked={pets === 0}
                  onChange={() => setPets(0)}
                />
                Nej
              </label>
            </div>
          </div>

          {/* Options */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="text-md flex items-center font-semibold mb-4">
              <MdOutlineKitchen
                size={24}
                color="white"
                className="bg-sky-400 rounded-full p-1 mr-2"
              />
              Ønsker du at få rengjort en eller flere af disse muligheder?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  onChange={(e) => setFridge(e.target.checked ? 30 : 0)}
                />
                Køleskab
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  onChange={(e) => setMicrowave(e.target.checked ? 30 : 0)}
                />
                Mikrobølgeovn
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  onChange={(e) => setOven(e.target.checked ? 120 : 0)}
                />
                Ovn
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  onChange={(e) => setSheets(e.target.checked ? 30 : 0)}
                />
                Sengeklæder
              </label>
            </div>
          </div>
        </div>

        {/* Right Side - Price Summary */}
        <div className="relative z-10 w-full lg:w-1/3 sticky top-60 sm:top-80 md:top-96 flex flex-col items-center space-y-12 sm:space-y-16 p-12 sm:p-16 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold">Prisoversigt</h2>
          <div className="text-base sm:text-lg mb-4 w-full">
            <div className="flex justify-between mt-2">
              <span>Rengøringstid:</span>
              <span>{time}</span>
            </div>
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
          <a href="#contact" className="z-30 w-full">
            <Button className="w-full mt-2" shiny={true}>
              Få rabatkupon nu!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPersonal;