import React, { useRef, useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Popup from "reactjs-popup";
import { IoMail } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import hrImage from "../assets/hr.jpg";

const FormInput = styled.input`
  @apply w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200;
`;

const FormTextArea = styled.textarea`
  @apply w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200;
  min-height: 200px;
  resize: vertical;
`;

const ImageContainer = styled.div`
  @apply rounded-lg overflow-hidden mb-8;
  img {
    @apply w-full h-64 object-cover;
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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setName("");
          setZip("");
          setPhone("");
          setEmail("");
          setMessage("");
          setOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">For et tilbud på rengøring i Aarhus og omegn</h2>
          <p className="body-1 text-neutral-600 max-w-2xl mx-auto">
            Få et uforpligtende tilbud. Kontakt os, og vi vil kontakte dig inden for 1 time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Image */}
          <div>
            <ImageContainer>
              <img src={hrImage} alt="Renklar HR" className="w-full
               h-full object-cover rounded-lg" />
            </ImageContainer>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8">
            {/* Email Contact Info */}
            <div className="flex items-start space-x-4 bg-primary-50 p-6 rounded-lg">
              <div className="bg-primary-100 p-3 rounded-full">
                <IoMail className="text-primary-600 text-xl" />
              </div>
              <div>
                <a
                  href="mailto:info@renklar.dk"
                  className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@renklar.dk
                </a>
                <p className="text-neutral-600 mt-1">Vi bestræber os på at svare inden for 1 time</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Navn</label>
                  <FormInput
                    required
                    value={name}
                    placeholder="Dit navn"
                    type="text"
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Postnummer</label>
                  <FormInput
                    required
                    value={zip}
                    placeholder="Dit postnummer"
                    type="text"
                    name="user_zip"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Telefonnummer</label>
                  <FormInput
                    required
                    value={phone}
                    placeholder="Dit telefonnummer"
                    type="text"
                    name="user_phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <FormInput
                    required
                    value={email}
                    placeholder="Din email"
                    type="email"
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Type af service</label>
                  <Dropdown
                    options={options}
                    onChange={(x) => {
                      if (x.value === "Jeg søger et job.") {
                        openModal2();
                      }
                    }}
                    value={defaultOption}
                    placeholder="Vælg en service"
                    className="mb-4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Besked</label>
                  <FormTextArea
                    required
                    value={message}
                    placeholder="Din besked"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  className={`button button-primary w-full py-4 text-lg ${
                    disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  shiny={true}
                >
                  Send besked
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
        className="p-4"
      >
        <div className="card p-8 max-w-md mx-auto text-center">
          <button 
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiBadgeCheck className="text-primary-600 text-2xl" />
          </div>
          <h3 className="h4 mb-2">Tak for din besked!</h3>
          <p className="text-neutral-600">Vi vil kontakte dig inden for 1 time.</p>
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
