/* eslint-disable react/prop-types */
import { FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoMdCall } from "react-icons/io";



const PersonalInformation = ({selectedUser}) => {

  return (
      <div className="bg-white border py-4 px-10 rounded-md mb-4">
<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
   <div className="w-24 h-24 rounded-lg md:rounded-full flex-none overflow-hidden">
          <img
            src={selectedUser.image}
            alt="Passport"
            className=" object-cover shadow-md"
          />
        </div>
      <div className="w-full space-y-4">
        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Full Name</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2">{selectedUser.name}</div>
        </div>

        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Date of Birth</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2">{selectedUser.dob}</div>
        </div>

        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Home Address</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaLocationDot className="text-gray-400" size={18} /> {selectedUser.homeAddress}</div>
        </div>

        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Office Address</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaLocationDot className="text-gray-400" size={18} /> {selectedUser.officeAddress}</div>
        </div>
      </div>
</div>
<hr className="my-4" />
  <div className="w-full space-y-4 mt-4">
        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Phone number</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><IoMdCall className="text-gray-400" size={18} /> {selectedUser.contact}</div>
        </div>

        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Mobile</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><FaMobile className="text-gray-400" size={18} /> {selectedUser.mobile}</div>
        </div>

        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Email Address</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2"><IoIosMail className="text-gray-400" size={18} /> {selectedUser.email}</div>
        </div>

        <div className="grid grid-cols-3">
        <div className="text-gray-500 font-medium text-sm">Social media handles</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2">{selectedUser.officeAddress}</div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation