/* eslint-disable react/prop-types */
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoMdCall } from "react-icons/io";



const PersonalInformation = ({selectedUser}) => {

  return (
      <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
   <div className="w-24 h-24 rounded-lg md:rounded-full flex-none overflow-hidden">
          <img
            src={selectedUser.image}
            alt="Passport"
            className=" object-cover shadow-md"
          />
        </div>
      <div className="w-full space-y-4">
        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Full Name</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2">{selectedUser.name}</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Date of Birth</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2">{selectedUser.dob}</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Home Address</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaLocationDot className="text-gray-400" size={16} /> {selectedUser.homeAddress}</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Office Address</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaLocationDot className="text-gray-400" size={16} /> {selectedUser.officeAddress}</div>
        </div>
      </div>
</div>
<hr className="my-4" />
  <div className="w-full space-y-4 mt-8">
        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Phone number</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><IoMdCall className="text-gray-400" size={16} /> {selectedUser.contact}</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Mobile</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaMobile className="text-gray-400" size={16} /> {selectedUser.mobile}</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">WhatsApp</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaWhatsapp className="text-gray-400" size={16} /> {selectedUser.whatsapp}</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Email Address</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><IoIosMail className="text-gray-400" size={16} /> {selectedUser.email}</div>
        </div>

       <div className="grid grid-cols-3 gap-4">
  <div className="text-gray-500 font-medium text-sm">Social media handles</div>
  <div className="text-gray-800 font-semibold text-sm col-span-2 space-y-1">
    {selectedUser.social_handles.map((handle, index) => (
      <div key={index} className="flex items-center gap-2">
        <span className="text-gray-600">{handle.platform}:</span>
        <a
          href={handle.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline line-clamp-1"
        >
          {handle.url}
        </a>
      </div>
    ))}
  </div>
</div>

      </div>
<hr className="my-4" />
  <div className="w-full space-y-4 mt-8">
  {selectedUser.account_information.map((item,i)=>(
        <div key={i} className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">{item.label}</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">{item?.icon &&<item.icon className="text-gray-400" size={16} />} {item.value}</div>
        </div>
  ))}

      </div>
<hr className="my-4" />
  <div className="w-full space-y-4 mt-8">
  {selectedUser.work_sector.map((item,i)=>(
        <div key={i} className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">{item.label}</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">{item?.icon &&<item.icon className="text-gray-400" size={16} />} {item.value}</div>
        </div>
  ))}

      </div>
    </div>
  )
}

export default PersonalInformation