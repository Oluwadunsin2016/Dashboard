/* eslint-disable react/prop-types */

// import { Button } from "@nextui-org/react"


const IdentityVerification = ({selectedUser}) => {
  console.log(selectedUser);
  
  return (
  <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
   <div className="w-full space-y-4 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">National Identity Card</div>
        <div className="text-gray-800 font-semibold md:col-span-2 text-sm flex items-center gap-4">{selectedUser?.identity_verification?.identtity??'N/A'}</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">BVN</div>
        <div className="text-gray-800 font-semibold md:col-span-2 text-sm flex items-center gap-4">{selectedUser?.identity_verification?.bvn??'N/A'}</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">Utility</div>
        <div className="text-gray-800 font-semibold md:col-span-2 text-sm flex items-center gap-4">{selectedUser?.identity_verification?.utility??'N/A'}</div>
        </div>

      </div>
  </div>
  )
}

export default IdentityVerification