import SliderCars from "src/components/SliderCars";
import {ICar} from "../interfaces/Car"

interface HomeProps {
  cars: ICar[];
}

const Home = ({ cars }: HomeProps) => {
  return (
    <div>
      <SliderCars cars={cars} />
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
