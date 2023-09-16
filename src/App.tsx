import { useEffect, useState } from "react";
import * as icon from "./Icon";
import Icon from "@mdi/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import Testmonial from "./Testmonial";
import Footer from "./Footer";

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
      <Navbar
        data={data?.navbar}
        Icon={Icon}
        icon={{ close: icon.mdiClose, menu: icon.mdiMenu }}
      />
      <Hero data={data?.hero} />
      <Services data={data?.services} />
      <Projects data={data?.projects} />
      <Team data={data?.team} />
      <Testmonial data={data?.testmonial} />
      <Footer
        data={data?.footer}
        Icon={Icon}
        icon={{
          twitter: icon.mdiTwitter,
          linkedin: icon.mdiLinkedin,
          instagram: icon.mdiInstagram,
        }}
      />
    </>
  );
}

export default App;
