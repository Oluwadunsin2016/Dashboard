/* eslint-disable react/prop-types */
import { TfiWorld } from "react-icons/tfi";
import { navIcons } from "../lib/data";
import LeftSidebar from "./LeftSidebar";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = ({setSelectedService,selectedService}) => {
 const [menuOpen, setMenuOpen] = useState(false);
 const [openSearch, setOpenSearch] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 flex items-center justify-between gap-4 px-4 md:px-8 py-2">
      <div className="flex items-center gap-4">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/512px-Quora_logo_2015.svg.png" alt="Quora Logo" className="w-40 h-8" /> */}
        <h1 className="text-xl md:text-3xl tracking-wide md:tracking-widest uppercase text-red-500 app-logo">Dashboard</h1>
        <div className="hidden md:flex items-center gap-8 px-6">
          {navIcons?.map((navIcon, i) => (
            <div className="group relative cursor-pointer text-gray-500" key={i}>
              <navIcon.icon size={28}/>
              <span className="hidden absolute -bottom-6 group-hover:inline transition">
                {navIcon.name}
              </span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full px-4 py-2 hidden md:block md:w-80 focus:outline-none"
        />
      </div>
      <div className="hidden md:flex items-center gap-6">
        {/* <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
          Try Quora+
        </button> */}
        <div className="bg-red-800 h-8 w-8 flex items-center justify-center rounded-full">
        <p className="text-gray-100 font-semibold">K</p>
        </div>
        <TfiWorld size={26} className="text-gray-500 font-bold" />
        <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
          Customer Support
        </button>
      </div>
      <div className="flex items-center gap-4 md:hidden">
       <IoSearch size={20} onClick={() => setOpenSearch(!openSearch)} className="text-gray-500" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="bg-red-500 text-white px-4 py-1 rounded-full font-semibold">
          Spaces
        </button>
      </div>
        <div    className={`absolute top-14 px-4 left-0 z-[999] w-full transition-transform duration-300 ease-in-out ${
          openSearch ? "transform scale-y-100" : "transform scale-y-0"
        } origin-top`}>
         <input
          type="text"
          placeholder="Search"
          className="border rounded-full bg-white px-4 py-2 w-full focus:outline-none"
        />
        </div>


        <div    className={`absolute top-16 px-4 left-0 z-[999] w-full transition-transform duration-300 ease-in-out ${
          menuOpen ? "transform scale-y-100" : "transform scale-y-0"
        } origin-top`}>
        <LeftSidebar setMenuOpen={setMenuOpen} setSelectedService={setSelectedService} selectedService={selectedService}/>
        </div>
    </header>
  );
};

export default Navbar;
