import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { PiRug, PiToiletLight, PiDogLight } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKitchen } from "react-icons/md";
import Button from "../../design/Button";  

const PricingWindows = () => {
  // State for each question
  const [sqm, setSqm] = useState(50);
  const [hasSkylights, setHasSkylights] = useState(false);
  const [hasHighWindows, setHasHighWindows] = useState(false);
  const [housingType, setHousingType] = useState("Lejlighed");
  const [hasConservatory, setHasConservatory] = useState(false);
  const [hasBars, setHasBars] = useState(false);
  const [includeIndoors, setIncludeIndoors] = useState(true);
  const [frequency, setFrequency] = useState("Hver måned");

  // Price calculation (simple example, adjust as needed)
  const basePrice = 150;
  let price = basePrice + (sqm > 100 ? 50 : 0);
  if (hasSkylights) price += 30;
  if (hasHighWindows) price += 40;
  if (hasConservatory) price += 50;
  if (hasBars) price += 20;
  if (includeIndoors) price += 30;
  if (housingType === "Villa") price += 40;
  if (frequency === "Hver uge") price *= 0.9;
  if (frequency === "Hver 2. uge") price *= 0.95;
  // First time and after-tax
  const firstTimePrice = (price * 0.85).toFixed(2);
  const priceSkatDeduction = (price * 0.74).toFixed(2);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-center font-black">
        Vinduespolering - få din pris
      </h1>
      <div className="relative flex flex-col lg:flex-row items-start justify-around w-full gap-8">
        {/* Left Side - Form Inputs */}
        <div className="relative z-10 flex flex-col w-full lg:w-2/3 space-y-2 sm:space-y-1">
          {/* Hvor mange kvadratmeter er dit hjem? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Hvor mange kvadratmeter er dit hjem?</div>
            <div className="flex items-center">
              <Slider
                handleStyle={{ background: "#1e90ff", borderColor: "#1e90ff" }}
                defaultValue={50}
                value={sqm}
                min={10}
                max={500}
                step={5}
                onChange={(e) => setSqm(Number(e))}
                className="w-full"
              />
              <p className="ml-4 min-w-[60px]">{sqm}m²</p>
            </div>
          </div>
          {/* Har du ovenlys vinduer? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Har du ovenlys vinduer?</div>
            <label className="mr-4"><input type="radio" checked={hasSkylights} onChange={() => setHasSkylights(true)} /> Ja</label>
            <label><input type="radio" checked={!hasSkylights} onChange={() => setHasSkylights(false)} /> Nej</label>
          </div>
          {/* Har du vinduer i højden? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Har du vinduer i højden?</div>
            <label className="mr-4"><input type="radio" checked={hasHighWindows} onChange={() => setHasHighWindows(true)} /> Ja</label>
            <label><input type="radio" checked={!hasHighWindows} onChange={() => setHasHighWindows(false)} /> Nej</label>
          </div>
          {/* Boligtype */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Boligtype</div>
            <select value={housingType} onChange={e => setHousingType(e.target.value)} className="w-full border rounded p-2">
              <option>Lejlighed</option>
              <option>Villa</option>
              <option>Rækkehus</option>
            </select>
          </div>
          {/* Har du en udestue? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Har du en udestue?</div>
            <label className="mr-4"><input type="radio" checked={hasConservatory} onChange={() => setHasConservatory(true)} /> Ja</label>
            <label><input type="radio" checked={!hasConservatory} onChange={() => setHasConservatory(false)} /> Nej</label>
          </div>
          {/* Har du sprosser i dine vinduer? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Har du sprosser i dine vinduer?</div>
            <label className="mr-4"><input type="radio" checked={hasBars} onChange={() => setHasBars(true)} /> Ja</label>
            <label><input type="radio" checked={!hasBars} onChange={() => setHasBars(false)} /> Nej</label>
          </div>
          {/* Skal vi også pudse indendørs? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Skal vi også pudse indendørs?</div>
            <label className="mr-4"><input type="radio" checked={includeIndoors} onChange={() => setIncludeIndoors(true)} /> Ja</label>
            <label><input type="radio" checked={!includeIndoors} onChange={() => setIncludeIndoors(false)} /> Nej</label>
          </div>
          {/* Hvor ofte skal vi pudse? */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-md font-semibold mb-2">Hvor ofte skal vi pudse?</div>
            <select value={frequency} onChange={e => setFrequency(e.target.value)} className="w-full border rounded p-2">
              <option>Hver uge</option>
              <option>Hver 2. uge</option>
              <option>Hver måned</option>
              <option>Hver 3. måned</option>
            </select>
          </div>
        </div>
        {/* Right Side - Price Summary */}
        <div className="relative z-10 w-full lg:w-1/3 sticky top-60 sm:top-80 md:top-96 flex flex-col items-center space-y-12 sm:space-y-16 p-12 sm:p-16 bg-gray-100 rounded-lg shadow-lg">
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
          <a href="#contact" className="z-30 w-full">
            <Button className="w-full mt-2" shiny={true}>
              Få rabatkupon nu!
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PricingWindows