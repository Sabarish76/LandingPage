import { Sling as Hamburger } from "hamburger-react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <div className="grid grid-cols-3">
      <div className="flex mt-4 mx-2 lg:mx-16">
        <img src={Logo} alt="logo" className="h-14 " />
        {/* <p className="font-bold">legal</p>
        <p className="font-bold text-red-400">justice</p> */}
      </div>

      <div className="relative flex items-center justify-center ">
        <div className="sm:hidden absolute left-40 mt-5 ml-3">
          <button onClick={toggleMobileMenu}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>

        <div
          className={`${
            mobile ? "block" : "hidden"
          } sm:flex flex-col gap-10 sm:flex-row sm:items-center justify-evenly leading-8 sm:mt-2 relative top-10 sm:top-1`}
        >
          <p>Product</p>
          <p>Resources</p>
          <p>Demo</p>
          <p>Pricing</p>
          <p>FreeTrail</p>
        </div>
      </div>

      <div className="hidden sm:flex justify-end items-center mr-10">
        <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm px-10 py-2.5 mt-4 mr-5">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
