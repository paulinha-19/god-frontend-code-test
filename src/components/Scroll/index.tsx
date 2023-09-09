import React from "react";
import { ICar } from "@/interfaces/Car";

interface ScrollProps {
  cars: ICar[];
}

export const Scroll = ({ cars }: ScrollProps) => {
  return (
    <div className="carousel h-60 w-2/5">
      <div className="carouselbox h-60 w-auto overflow-hidden	flex items-center">
        {cars.map((car, index) => (
          <img
            key={car.id}
            src={car.imageUrl}
            alt={car.modelName}
            className="min-w-[147px] max-w-[147px] h[200px] cursor-pointer transition-opacity duration-500 ease-linear"
          />
        ))}
      </div>
    </div>
  );
};
