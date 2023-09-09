import React from "react";
import { ICar } from "../../../interfaces/Car";

interface CardProps {
  car: ICar;
  className?: string;
  style?: object;
}

const CarsCard = ({ car }: CardProps) => {
  return (
    <div className="card-container px-3 hover:text-sky-700 cursor-pointer space-y-4">
      <div className="flex flex-col space-y-2 mt-10">
        <p>{car.bodyType}</p>
        <div className="flex gap-4">
          <p className="font-semibold">{car.modelName}</p>
          <span className="text-gray-500">{car.modelType}</span>
        </div>
      </div>
      <img
        src={car.imageUrl}
        alt={car.modelName}
        className="w-full object-cover	"
      />
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="text-sky-700 font-semibold flex items-center hover:text-gray-800"
        >
          LEARN
          <svg
            aria-hidden="true"
            className="w-4 h-5 mr-4 -ml-1"
            fill="currentColor"
            viewBox="0 0 11 11"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "10px" }}
          >
            <path
              d="M2 1.5l4 4-4 4"
              fill="none"
              stroke="#1c6bba"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="text-sky-700 font-semibold flex items-center hover:text-gray-800"
        >
          SHOP
          <svg
            aria-hidden="true"
            className="w-4 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 11 11"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "10px" }}
          >
            <path
              d="M2 1.5l4 4-4 4"
              fill="none"
              stroke="#1c6bba"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarsCard;
