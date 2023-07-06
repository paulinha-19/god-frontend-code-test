import React, { useState, useEffect } from "react";
import { ICar } from "../../../interfaces/Car";
import CarsCard from "../CarsCard/index";
import { IndicatorButton, NextButton, PrevButton } from "./style";

interface SliderCarProps {
  cars: ICar[];
}

const SliderCars = ({ cars }: SliderCarProps) => {
  const [currentCar, setCurrentCar] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };
    setIsMobile(window.innerWidth < 920);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showNextCar = (): void => {
    setCurrentCar(currentCar === cars.length - 1 ? 0 : currentCar + 1);
  };

  const showPrevCar = (): void => {
    setCurrentCar(currentCar === 0 ? cars.length - 1 : currentCar - 1);
  };

  const showCarByIndicator = (index: number) => {
    if (index >= 0 && index < cars.length) {
      setCurrentCar(index);
    }
  };

  const isNextDisabled = currentCar + 4 === cars.length;
  const isPrevDisabled = currentCar === 0;

  const getVisibleCars = () => {
    return cars.slice(currentCar, currentCar + (isMobile ? 2 : 4));
  };

  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-wrap  ${
          isMobile
            ? "max-w-[600px] justify-center"
            : "max-w-screen-lg justify-end"
        }`}
      >
        {getVisibleCars().map((car, index) => (
          <div
            key={car.id}
            className={`w-full ${isMobile ? "sm:w-1/2" : "sm:w-1/4"}`}
          >
            <CarsCard car={car} />
          </div>
        ))}
        {isMobile ? (
          <div className="flex justify-center mt-10 mb-10">
            {cars.slice(0, cars.length - 1).map((_, index) => (
              <IndicatorButton
                key={index}
                $isActive={index === currentCar}
                onClick={() => showCarByIndicator(index)}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-end mt-10">
            <PrevButton disabled={isPrevDisabled} onClick={showPrevCar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                width="50"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18.5"
                  fill="white"
                  stroke="#333"
                  strokeWidth="1"
                ></circle>
                <rect
                  x="15.0859"
                  y="20.6543"
                  width="10.4911"
                  height="0.5"
                  rx="0.25"
                  transform="rotate(45 15.0859 20.6543)"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                ></rect>
                <rect
                  x="22.5058"
                  y="13.9297"
                  width="10.4758"
                  height="0.5"
                  rx="0.25"
                  transform="rotate(135 22.5058 13.9297)"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                ></rect>
              </svg>
            </PrevButton>
            <NextButton disabled={isNextDisabled} onClick={showNextCar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                width="60"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18.5"
                  fill="white"
                  stroke="#333"
                  strokeWidth="1"
                ></circle>
                <rect
                  x="24.9141"
                  y="20.3457"
                  width="10.4911"
                  height="0.5"
                  rx="0.25"
                  transform="rotate(-135 24.9141 20.3457)"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                ></rect>
                <rect
                  x="17.4942"
                  y="27.0703"
                  width="10.4758"
                  height="0.5"
                  rx="0.25"
                  transform="rotate(-45 17.4942 27.0703)"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                ></rect>
              </svg>
            </NextButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderCars;
