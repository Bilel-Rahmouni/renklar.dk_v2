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
                    value={freq}
                    className="mr-2"
                    checked={selectedFrequency === freq}
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
                defaultValue={10}
                value={surface}
                min={10}
                max={200}
                step={5}
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
                max={25}
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
                step={5}
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
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  type="checkbox"
                  onChange={(e) => setFridge(e.target.checked ? 30 : 0)}
                />
                Køleskab
              </label>
              <label className="flex items-center">
                <input
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  type="checkbox"
                  onChange={(e) => setMicrowave(e.target.checked ? 30 : 0)}
                />
                Mikrobølgeovn
              </label>
              <label className="flex items-center">
                <input
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  type="checkbox"
                  onChange={(e) => setOven(e.target.checked ? 120 : 0)}
                />
                Ovn
              </label>
              <label className="flex items-center">
                <input
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  type="checkbox"
                  onChange={(e) => setSheets(e.target.checked ? 30 : 0)}
                />
                Sengeklæder
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