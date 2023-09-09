import SliderCars from "src/components/SliderCars";
import FilterBar from "src/components/FilterBar";
import { ICar } from "../interfaces/Car";
import React, { useState } from "react";
import { Scroll } from "src/components/Scroll";

interface HomeProps {
  cars: ICar[];
}

const Home = ({ cars }: HomeProps) => {
  const [filteredCars, setFilteredCars] = useState<ICar[]>(cars);
  const handleFilter = (type: string) => {
    if (type === "all") {
      setFilteredCars(cars);
    } else {
      const filteredData = cars.filter((car) => car.bodyType === type);
      setFilteredCars(filteredData);
    }
  };
  

  return (
    <div>
      <FilterBar cars={cars} handleFilter={handleFilter} />
      <SliderCars cars={filteredCars} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/cars");
  const carsData = await res.json();
  return {
    props: { cars: carsData },
  };
}

export default Home;
