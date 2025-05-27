import React, { useRef, useState } from "react";
import { HiBadgeCheck } from "react-icons/hi"; 
import Popup from "reactjs-popup"; 
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import hrImage from "../assets/hr.jpg";
import Button from "../design/Button";

const FormInput = styled.input`
  @apply w-full px-5 py-4 rounded-xl border-2 border-neutral-200 bg-gray-100
  focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
  transition-all duration-300 text-gray-900
  hover:border-blue-300;

  &::placeholder {
    color: rgb(107 114 128) !important;
  }
  
  &:focus {
    @apply transform scale-[1.02] bg-white text-gray-900;
  }
  
  &:disabled {
    @apply bg-gray-100 cursor-not-allowed;
  }
`;

const FormTextArea = styled.textarea`
  @apply w-full px-5 py-4 rounded-xl border-2 border-neutral-200 bg-gray-100
  focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
  transition-all duration-300 text-gray-900
  hover:border-blue-300;
  min-height: 150px;
  resize: vertical;

  &::placeholder {
    color: rgb(107 114 128) !important;
  }
  
  &:focus {
    @apply transform scale-[1.02] bg-white text-gray-900;
  }
  
  &:disabled {
    @apply bg-gray-100 cursor-not-allowed;
  }
`;

const ImageContainer = styled.div`
  @apply rounded-lg overflow-hidden mb-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.02];
  img {
    @apply w-full h-64 object-cover;
  }
`;

// Add custom styles for the dropdown
const StyledDropdown = styled(Dropdown)`
  .Dropdown-control {
    @apply bg-gray-100 border-2 border-neutral-200 rounded-xl px-5 py-4 text-gray-900;
  }
  
  .Dropdown-placeholder {
    color: rgb(107 114 128) !important;
  }
  
  .Dropdown-option {
    @apply py-3 px-5 cursor-pointer text-gray-900;
  }
  
  .Dropdown-option.is-selected {
    @apply bg-blue-500 text-white;
  }
  
  .Dropdown-option:hover {
    @apply bg-blue-50;
  }
`;

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const options = [
    "Privat rengøringstjeneste",
    "Erhvervsrengøring",
    "Jeg søger et job.",
  ];
  const defaultOption = options[0];

  const closeModal = () => setOpen(false);
  const openModal2 = () => {
    setOpen2(true);
    setDisabled(true);
  };
  const closeModal2 = () => setOpen2(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mldjbenn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          zip,
          phone,
          email,
          message,
          service: defaultOption
        }),
      });
      
      if (response.ok) {
        setName("");
        setZip("");
        setPhone("");
        setEmail("");
        setMessage("");
        setOpen(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-4 md:mb-4 text-center font-black">
            For et tilbud på rengøring i Aarhus og omegn
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Få et uforpligtende tilbud. Kontakt os, og vi vil kontakte dig inden for 1 time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Image */}
          <div>
            <ImageContainer>
              <img src={hrImage} alt="Renklar HR" className="w-full h-full object-cover rounded-lg" />
            </ImageContainer>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-white to-sky-50 rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} action="https://formspree.io/f/mldjbenn" method="POST" className="space-y-8">
                {/* Name and Zip Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-gray-700">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Navn
                      </span>
                    </label>
                    <FormInput
                      required
                      value={name} 
                      placeholder="Dit navn"
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-gray-700">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Postnummer
                      </span>
                    </label>
                    <FormInput
                      required
                      value={zip}
                      placeholder="Dit postnummer"
                      type="text"
                      name="zip"
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-gray-700">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Telefonnummer
                      </span>
                    </label>
                    <FormInput
                      required
                      value={phone}
                      placeholder="Dit telefonnummer"
                      type="tel"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-gray-700">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </span>
                    </label>
                    <FormInput
                      required
                      value={email}
                      placeholder="Din email"
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-700">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Type af service
                    </span>
                  </label>
                  <StyledDropdown
                    options={options}
                    onChange={(x) => {
                      if (x.value === "Jeg søger et job.") {
                        openModal2();
                      }
                    }}
                    value={defaultOption}
                    name="service"
                    placeholder="Vælg en service"
                  />
                </div>

                <div className="space-y-3 col-span-full">
                  <label className="block text-sm font-bold text-gray-700">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Besked
                    </span>
                  </label>
                  <FormTextArea
                    required
                    value={message}
                    placeholder="Fortæl os om dine behov..."
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full"
                  />
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    shiny={true}
                    className="w-full py-4 text-lg font-semibold rounded-full"
                    disabled={disabled}
                  >
                    Send besked
                  </Button>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        modal
        position="center center"
        className="success-modal"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto relative">
          <button 
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiBadgeCheck className="text-green-500 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Tak for din besked!</h3>
            <p className="text-gray-600 text-center">Vi har modtaget din henvendelse og vil kontakte dig inden for 1 time.</p>
          </div>
        </div>
      </Popup>

      {/* Job Application Modal */}
      <Popup
        open={open2}
        closeOnDocumentClick
        onClose={closeModal2}
        className="p-4"
      >
        <div className="card p-8 max-w-md mx-auto text-center">
          <button 
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
            onClick={closeModal2}
          >
            ✕
          </button>
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiBadgeCheck className="text-primary-600 text-2xl" />
          </div>
          <h3 className="h4 mb-4">Tak for din interesse!</h3>
          <p className="text-neutral-600">
            Vi ansætter desværre ikke nye medarbejdere i øjeblikket. 
            Vi ønsker dig held og lykke med din jobsøgning!
          </p>
        </div>
      </Popup>
    </section>
  );
};

export default Contact;
