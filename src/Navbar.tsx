import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";

function Navbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="m-d-1 flex justify-between items-center max-md:py-3  2xl:mt-10 max-md:shadow max-md:px-3  bg-white  ">
      <div className="flex justify-between max-md: w-full">
        <h2 className="font-heebo text-2xl  2xl:text-4xl font-extrabold text-gray-1">
          {data?.logo}
        </h2>
        <div className="md:hidden " onClick={handleMenu}>
          {isOpen ? <Close /> : <Menu />}
        </div>
      </div>
      <ul
        className={`flex  max-md:flex-col gap-4 2xl:gap-10 max-md:absolute left-0 top-[-400px] ${
          isOpen
            ? "top-[62px] max-md:pt-6 max-md:ps-5 max-md:pb-5 max-md:w-full "
            : ""
        } bg-white`}
      >
        {data?.navLinks.map((x: string) => (
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
