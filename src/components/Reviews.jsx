import React from "react";
import { reviews } from "../constants";
import { AiFillStar } from "react-icons/ai";
const ReviewItem = ({ name, rating, date, location, text }) => (
  <div className="bg-white mx-3 md:w-[30%] shadow-md rounded-lg p-6 mb-6">
    <div className="flex items-center mb-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="ml-4 text-sm text-gray-600">{location}</div>
    </div>
    <div className="text-sm text-gray-500 mb-2">
      {date} | Rated {rating} stars
    </div>
    <p className="text-gray-800 mb-4">{text}</p>
    <div className="text-sm text-gray-500">Dato for oplevelse: {date}</div>
  </div>
);
const Reviews = () => (
  <div className="max-w-4xl mx-auto p-6 mt-20">
    <h2 className="text-3xl font-bold mb-6">
      Hvad vores kunder siger om vores service på
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 underline"
        href="https://dk.trustpilot.com/review/renklar.dk?languages=all"
      >
        Trustpilot.
      </a>
    </h2>
    <div className="pt-8 flex flex-col items-center gap-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <AiFillStar key={index} className="text-yellow-400 text-2xl" />
        ))}
      </div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-center">
        Bedste Rengøringsservice i Aarhus
      </h2>
      <p className="text-lg text-neutral-600">+250 tilfredse kunder</p>
    </div>

    <div className="max-w-4xl justify-around md:flex mx-auto p-6">
      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          name={review.name}
          rating={review.rating}
          date={review.date}
          location={review.location}
          text={review.text}
        />
      ))}
    </div>
  </div>
);

export default Reviews;
