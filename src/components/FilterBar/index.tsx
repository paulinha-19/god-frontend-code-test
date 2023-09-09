import React, { useState } from "react";
import { ICar } from "@/interfaces/Car";

interface FilterBarProps {
  cars: ICar[];
  handleFilter: (type: string) => void;
}

const FilterBar = ({ cars, handleFilter }: FilterBarProps) => {
  const [activeType, setActiveType] = useState("all");
  const bodyTypes = Array.from(new Set(cars.map((car) => car.bodyType)));

  const handleButtonFilter = (type: string) => {
    setActiveType(type);
    handleFilter(type);
  };
  const getTotalFilteredCars = (type: string) => {
    if (type === "all") {
      return cars.length;
    }
    return cars.filter((car) => car.bodyType === type).length;
  };

  return (
    <nav className={`flex flex-wrap justify-center gap-12 mt-10`}>
      <button
        className={`${activeType === "all" ? "border-b-2 border-sky-700" : ""}`}
        onClick={() => handleButtonFilter("all")}
      >
        Todos ({getTotalFilteredCars("all")})
      </button>
      {bodyTypes.map((type) => (
        <button
          key={type}
          className={`${
            activeType === type ? "border-b-2 border-sky-700" : ""
          }`}
          onClick={() => handleButtonFilter(type)}
        >
          {type} ({getTotalFilteredCars(type)})
        </button>
      ))}
    </nav>
  );
};

export default FilterBar;
