import { useEffect, useState, useRef } from "react";
import Button from "../../design/Button";

// Import all before images
import before1 from "../../assets/before and after/1before.jpg";
import before2 from "../../assets/before and after/2before.jpg";
import before3 from "../../assets/before and after/3before.jpg";
import before4 from "../../assets/before and after/4before.jpg";
import before5 from "../../assets/before and after/5before.jpg";
import before6 from "../../assets/before and after/6before.jpg";
import before7 from "../../assets/before and after/7before.jpg";

// Import all after images
import after1 from "../../assets/before and after/1after.jpg";
import after2 from "../../assets/before and after/2after.jpg";
import after3 from "../../assets/before and after/3after.jpg";
import after4 from "../../assets/before and after/4after.jpg";
import after5 from "../../assets/before and after/5after.jpg";
import after6 from "../../assets/before and after/6after.jpg";
import after7 from "../../assets/before and after/7after.jpg";

const HeroPersonal = () => {
  const [hours, setHours] = useState(19);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const beforeImages = [before1, before2, before3, before4, before5, before6, before7];
  const afterImages = [after1, after2, after3, after4, after5, after6, after7];

  // Create duplicated arrays for infinite scroll
  const duplicatedBeforeImages = [...beforeImages, ...beforeImages, ...beforeImages];
  const duplicatedAfterImages = [...afterImages, ...afterImages, ...afterImages];

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setHours(19);
            setMinutes(0);
            setSeconds(0);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  // Updated auto scroll effect with single scroll position
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        // Reset position when reaching end of middle set
        if (newPosition >= (beforeImages.length * 300)) {
          return 0;
        }
        return newPosition;
      });
    }, 50);

    return () => clearInterval(scrollInterval);
  }, [beforeImages.length]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index % beforeImages.length);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  // Pause scrolling when modal is open
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isModalOpen) {
        setScrollPosition((prev) => {
          const newPosition = prev + 1;
          if (newPosition >= (beforeImages.length * 300)) {
            return 0;
          }
          return newPosition;
        });
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, [beforeImages.length, isModalOpen]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4
       sm:px-6 lg:px-8 py-32 sm:py-32 lg:py-32 relative bg-gradient-to-b
        from-white to-gray-50"
      id="hero"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-relaxed">
            Professionel rengøring i{" "}
            <span className="bg-gradient-to-r pt-2 from-[#00F8FF] via-[#22F9CE] to-[#65FE65] inline-block text-transparent bg-clip-text">
              Århus
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-black-200 max-w-2xl mx-auto">
            Vi tilbyder professionel rengøring til private hjem i Århus og omegn. 
            Vores erfarne team sikrer et rent og sundt hjem for dig og din familie.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-sm text-black-300">Priser fra</p>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">240 Kr./time</p>
              <p className="text-sm text-black-300">(ekskl. moms)</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-black-300">Første gangs pris</p>
              <p className="text-3xl sm:text-4xl font-bold text-green-400">-15%</p>
              <p className="text-sm text-black-300">på første rengøring</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-black-300">Udflytningsrengøring</p>
              <p className="text-3xl sm:text-4xl font-bold text-green-400">-15%</p>
              <p className="text-sm text-black-300">på udflytningsrengøring</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact"><Button href="#contact" className="button w-full sm:w-auto" shiny={true}>
              Få et tilbud
            </Button></a> 
               <a href="#pricing">
            <Button href="#pricing" className="button w-full sm:w-auto" shiny={true}>
              Se priser
            </Button></a>
          </div>
        </div>
      </div>

      {/* Combined Before/After Images Scroll */}
      <div className="w-full flex flex-col gap-4">
        {/* Before Images Row */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${duplicatedBeforeImages.length * 300}px`
            }}
          >
            {duplicatedBeforeImages.map((img, index) => (
              <div 
                key={`before-${index}`} 
                className="relative min-w-[280px] h-[200px] rounded-lg overflow-hidden group cursor-pointer
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => handleImageClick(index)}
              >
                <img 
                  src={img} 
                  alt={`Before cleaning ${(index % beforeImages.length) + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-3 py-1 rounded-tr">
                  Før
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Klik for at sammenligne
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After Images Row */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${duplicatedAfterImages.length * 300}px`
            }}
          >
            {duplicatedAfterImages.map((img, index) => (
              <div 
                key={`after-${index}`} 
                className="relative min-w-[280px] h-[200px] rounded-lg overflow-hidden group cursor-pointer
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => handleImageClick(index)}
              >
                <img 
                  src={img} 
                  alt={`After cleaning ${(index % afterImages.length) + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-3 py-1 rounded-tr">
                  Efter
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Klik for at sammenligne
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for image comparison */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
             onClick={closeModal}>
          <div className="bg-white rounded-xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
               onClick={e => e.stopPropagation()}>
            <div className="flex justify-end mb-4">
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={beforeImages[selectedImageIndex]} 
                  alt={`Before cleaning ${selectedImageIndex + 1}`}
                  className="w-full rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                  Før
                </div>
              </div>
              <div className="relative">
                <img 
                  src={afterImages[selectedImageIndex]} 
                  alt={`After cleaning ${selectedImageIndex + 1}`}
                  className="w-full rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                  Efter
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroPersonal;
