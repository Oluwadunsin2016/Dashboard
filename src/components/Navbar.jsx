/* eslint-disable react/prop-types */
import { TfiWorld } from "react-icons/tfi";
import { navIcons } from "../lib/data";
import LeftSidebar from "./LeftSidebar";
import { useState } from "react";
import { IoChevronDown, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import RightSidebar from "./RightSidebar";
import { FaUsers } from "react-icons/fa";


const Navbar = ({setSelectedService,selectedService}) => {
 const [menuOpen, setMenuOpen] = useState(false);
 const [isUsersOpen, setIsUsersOpen] = useState(false);
 const [openSearch, setOpenSearch] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 flex items-center justify-between gap-4 px-4 md:px-8 py-2">
      <div className="flex items-center gap-4">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/512px-Quora_logo_2015.svg.png" alt="Quora Logo" className="w-40 h-8" /> */}
        <Link to='/'>
        <h1 className="text-xl md:text-3xl uppercase text-blue-500 app-logo">Admin</h1>
        </Link>
        {/* <div className="hidden md:flex items-center gap-8 px-6">
          {navIcons?.map((navIcon, i) => (
              <Link to={navIcon.href} className="group relative cursor-pointer text-gray-500" key={i}>
              <navIcon.icon size={28}/>
              <span className="hidden absolute -bottom-6 group-hover:inline transition">
                {navIcon.name}
              </span>
              </Link>
          ))}
        </div> */}
      </div>
      <div className="hidden md:flex items-center gap-6">
      <input
          type="text"
          placeholder="Search"
          className="border rounded-full px-4 py-2 hidden md:block md:w-80 focus:outline-none"
        />
           <Link to='/set-exchange-rate' className="bg-slate-200 rounded-full px-4 py-1">
        <p>Set Exchange Rate</p>
      </Link>
        {/* <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
          Try Quora+
        </button> */}
        {/* <div className="bg-red-800 h-8 w-8 flex items-center justify-center rounded-full">
        <p className="text-gray-100 font-semibold">K</p>
        </div>
        <TfiWorld size={26} className="text-gray-500 font-bold" />
        <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
          Customer Support
        </button> */}
      </div>
      <div className="flex items-center gap-4 md:hidden">
       <IoSearch size={20} onClick={() => setOpenSearch(!openSearch)} className="text-gray-500" />
       <Link to='/set-exchange-rate' className="bg-slate-200 rounded-full px-4 py-1">
        <p>Set Exchange Rate</p>
      </Link>
      <Button isIconOnly onPress={()=>setIsUsersOpen(!isUsersOpen)} ><FaUsers size={20} /></Button>
      <Button
  size="sm"
  radius="full"
  isIconOnly
  onPress={() => setMenuOpen(!menuOpen)}
  className="bg-blue-100"
>
  <span className={`transform transition-transform duration-300 ${menuOpen ? 'rotate-180' : 'rotate-0'}`}>
  <IoChevronDown size={20} />
  </span>
</Button>
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
        <div    className={`absolute top-16 px-4 left-0 z-[999] w-full transition-transform duration-300 ease-in-out ${
          isUsersOpen ? "transform scale-y-100" : "transform scale-y-0"
        } origin-top`}>
        <RightSidebar setIsUsersOpen={setIsUsersOpen} selectedService={selectedService}/>
        </div>
    </header>
  );
};

export default Navbar;
