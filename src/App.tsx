import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";

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
      <Navbar navLinks={data?.navLinks} logo={data?.logo} />
      <Hero photo={data?.photos?.hero} />
      <Services data={data?.services} />
    </>
  );
}

export default App;
