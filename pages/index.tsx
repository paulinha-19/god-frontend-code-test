const Home = () => {
  return <div>Volvo Cars</div>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/cars");
  const carsData = await res.json();
  return {
    props: { cars: carsData },
  };
}

export default Home;
