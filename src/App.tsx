import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const actualData = await response.json();
        setData(actualData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar data={data?.navbar} />
      <Hero data={data?.hero} />
      <Services data={data?.services} />
      <Projects data={data?.projects} />
      <Team data={data?.team} />
    </>
  );
}

export default App;
