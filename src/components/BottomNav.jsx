/* eslint-disable react/prop-types */
import { FiInfo } from "react-icons/fi";
import { navIcons } from "../lib/data";
import { useState } from "react";
import RightSidebar from "./RightSidebar";

const BottomNav = ({setSelectedUser,selectedUser}) => {
const [infoOpen, setInfoOpen] = useState(false);
  return (
    <div className="md:hidden bg-white py-2 flex items-center justify-center gap-8 px-6 w-full rounded-t-2xl border-t">
    <div    className={`absolute bottom-16 px-4 left-0 z-[999] w-full transition-transform duration-300 ease-in-out ${
          infoOpen ? "transform scale-y-100" : "transform scale-y-0"
        } origin-bottom`}>
        <RightSidebar setInfoOpen={setInfoOpen} setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
        </div>
      {navIcons?.map((navIcon, i) => (
        <div className="group relative cursor-pointer text-gray-500" key={i}>
          <navIcon.icon size={28} />
          <span className="hidden absolute -top-6 group-hover:inline transition">
            {navIcon.name}
          </span>
        </div>
      ))}
        <div onClick={()=>setInfoOpen(!infoOpen)} className="group relative cursor-pointer text-gray-500">
          <FiInfo size={28} />
          <span className="hidden absolute -top-6 group-hover:inline transition">
            Information
          </span>
        </div>
    </div>
  );
};

export default BottomNav;
