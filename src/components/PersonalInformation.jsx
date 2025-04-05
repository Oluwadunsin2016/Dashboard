/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoMdCall } from "react-icons/io";
import { formatDate } from "../lib/utils";

const PersonalInformation = ({ selectedUser, selectedApplication }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(selectedUser?.personal_information);
  }, [selectedUser]);

  console.log(selectedUser);

  return (
    <div>
      {selectedApplication?.value == "monicard" && selectedUser ? (
        <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-lg md:rounded-full flex-none overflow-hidden">
              <img
                src={selectedUser?.image}
                alt="Passport"
                className=" object-cover shadow-md"
              />
            </div>
            <div className="w-full space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Full Name
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2">
                  {selectedUser?.personal_information?.fullName}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Date of Birth
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2">
                  {formatDate(selectedUser?.personal_information?.dob)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Home Address
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                  <FaLocationDot className="text-gray-400" size={16} />{" "}
                  {selectedUser?.personal_information?.homeAddress}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Office Address
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                  <FaLocationDot className="text-gray-400" size={16} />{" "}
                  {selectedUser?.work_information?.office_address}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="w-full space-y-4 mt-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Phone number
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                <IoMdCall className="text-gray-400" size={16} />{" "}
                {selectedUser?.personal_information?.contact ?? "N/A"}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">Mobile</div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                <FaMobile className="text-gray-400" size={16} />{" "}
                {selectedUser?.personal_information?.mobile ?? "N/A"}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">WhatsApp</div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                <FaWhatsapp className="text-gray-400" size={16} />{" "}
                {selectedUser?.business_information?.business_whatsapp ?? "N/A"}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Email Address
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                <IoIosMail className="text-gray-400" size={16} />{" "}
                {selectedUser?.business_information?.email ?? "N/A"}
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-4">
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
</div> */}
          </div>
          <hr className="my-4" />
          <div className="w-full space-y-4 mt-8">
            {/* {selectedUser.account_information.map((item,i)=>(
        <div key={i} className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">{item.label}</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">{item?.icon &&<item.icon className="text-gray-400" size={16} />} {item.value}</div>
        </div>
  ))} */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Account Name
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.account_information?.account_name ?? "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Account Number
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.account_information?.account_number ?? "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">Bank</div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.account_information?.bank ?? "N/A"}
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="w-full space-y-4 mt-8">
            {/* {selectedUser.work_sector.map((item,i)=>(
        <div key={i} className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">{item.label}</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">{item?.icon &&<item.icon className="text-gray-400" size={16} />} {item.value}</div>
        </div>
  ))} */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Office Address
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.work_information?.office_address ?? "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Office Bus stop
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.work_information?.office_bstop ?? "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Work Email
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.work_information?.work_email ?? "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium text-sm">
                Work Phone Number
              </div>
              <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                {selectedUser?.work_information?.work_phone_number ?? "N/A"}
              </div>
            </div>
          </div>
        </div>
      ) :selectedApplication?.value == "africana" && selectedUser ? (
        <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-lg md:rounded-full flex-none overflow-hidden">
              <img
                src={selectedUser?.image??'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}
                alt="Passport"
                className=" object-cover shadow-md"
              />
            </div>
            <div className="w-full space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Full Name
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2">
                  {selectedUser?.firstName} {selectedUser?.lastName}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Email
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2">
                  {selectedUser?.email??'N/A'}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Phone Number
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2">
                {selectedUser?.phone??'N/A'}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Date of Birth
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2">
                  {selectedUser?.dob?formatDate(selectedUser?.dob):'N/A'}
                </div>
              </div>

              {/* <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Home Address
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                  <FaLocationDot className="text-gray-400" size={16} />{" "}
                  {selectedUser?.personal_information?.homeAddress}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium text-sm">
                  Office Address
                </div>
                <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-2">
                  <FaLocationDot className="text-gray-400" size={16} />{" "}
                  {selectedUser?.work_information?.office_address}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
          Coming soon
        </div>
      )}
    </div>
  );
};

export default PersonalInformation;
