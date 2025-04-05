/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { services } from "../lib/data";
import { TbChevronDown, TbLogout2, TbUsers } from "react-icons/tb";
import { useAuth } from "../lib/AuthContext";
import SimpleDropdown from "./shared/SimpleDropdown";
import { User } from "@nextui-org/react";

const LeftSidebar = ({setMenuOpen,setSelectedService,selectedService}) => {
  const {user,logout}=useAuth()

const handleClick=(service)=>{
setSelectedService(service)
if (setMenuOpen) {
  setMenuOpen(false)
}
}
  return (
    <aside className="h-full p-4 bg-white rounded-md border">
      <button className="w-full bg-gray-100 py-2 rounded-md mb-4 font-medium text-gray-500 flex items-center gap-2 justify-center">
       <FaPlus className="text-sm font-thin" /> Create Space
      </button>
   <div className="flex flex-col justify-between gap-2 min-h-[80vh] md:min-h-[75vh]">
   <ul className="">
      {services?.map((service,i)=>(
        <li key={i} onClick={()=>handleClick(service)} className={`${service.value==selectedService.value&&'bg-blue-200'} p-2 rounded-md flex items-center gap-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}> <div className="w-7 h-7 rounded-md overflow-hidden"><img src={service.image} alt="" className="w-full h-full object-cover" /> </div> <span className="line-clamp-1 text-sm">{service.label}</span></li>
      ))}
      </ul>
    <div>
    <hr className='my-4' />
    <SimpleDropdown
          trigger={
            <div className="flex items-center justify-between gap-2 cursor-pointer">
              {/* <img
                src={`https://ui-avatars.com/api/?name=${user?.firstName??'O'}`}
                className='w-10 h-10 rounded-full'
                alt={`OP`}
              /> */}
                <User
      avatarProps={{
        src: user?.image??'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
      }}
      name={  <p className="line-clamp-1">{user?.firstName?`${user?.firstName} ${user?.lastName}`:"Jane Doe"}</p> }
    />
              <TbChevronDown size="18" className="ml-3"/>
            </div>
          }
          items={[
            {text: 'Profile', icon: <TbUsers size="18"/>},
            {text: 'Logout', icon: <TbLogout2 size="18"/>, onClick: logout},
          ]}
        />
    </div>
   </div>
    </aside>
  );
};

export default LeftSidebar;
