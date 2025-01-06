/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { services } from "../utils/data";
import { TbLogout2 } from "react-icons/tb";

const LeftSidebar = ({setMenuOpen,setSelectedService,selectedService}) => {

const handleClick=(service)=>{
setSelectedService(service)
setMenuOpen(false)
}
  return (
    <aside className="h-full p-4 bg-white rounded-md border">
      <button className="w-full bg-gray-100 py-2 rounded-md mb-4 font-medium text-gray-500 flex items-center gap-2 justify-center">
       <FaPlus className="text-sm font-thin" /> Create Space
      </button>
      <ul className="">
      {services?.map((service,i)=>(
        <li key={i} onClick={()=>handleClick(service)} className={`${service.value==selectedService.value&&'bg-blue-200'} p-2 rounded-md flex items-center gap-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}> <div className="w-7 h-7 rounded-md overflow-hidden"><img src={service.image} alt="" className="w-full h-full object-cover" /> </div> <span className="line-clamp-1 text-sm">{service.label}</span></li>
      ))}
      </ul>
      <hr className='my-4' />
      <button className='flex items-center gap-2 text-gray-500'>
      <TbLogout2 size={22} />
      Logout
      </button>
    </aside>
  );
};

export default LeftSidebar;
