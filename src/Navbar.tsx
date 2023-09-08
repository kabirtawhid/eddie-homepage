import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";

function Navbar({ navLinks, logo }) {
  const [isClose, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isClose);
  };
  return (
    <nav className="flex justify-between items-center max-md:py-3  2xl:mt-10 max-md:shadow max-md:px-3 max-md:mx-[-12px] bg-white ">
      <div className="flex justify-between max-md: w-full">
        <h2 className="font-heebo text-2xl  2xl:text-4xl font-extrabold text-gray-1">
          {logo}
        </h2>
        <div className="md:hidden" onClick={handleMenu}>
          {isClose ? <Menu /> : <Close />}
        </div>
      </div>
      <ul
        className={`flex  max-md:flex-col gap-4 2xl:gap-10 max-md:absolute top-[-400px] ${
          isClose ? "top-[90px]" : ""
        } transition-all duration-500 max-md:z-[-1]`}
      >
        {navLinks?.map((x: string) => (
          <Navlink navLink={x} key={x} />
        ))}
      </ul>
    </nav>
  );
}

function Navlink({ navLink }) {
  return (
    <li className="text-gray-1 font-poppins text-lg 2xl:text-2xl font-medium  whitespace-pre">
      {navLink}
    </li>
  );
}

export default Navbar;
