/* eslint-disable react/prop-types */

import { Button } from "@nextui-org/react"


const IdentityVerification = ({selectedUser}) => {
  return (
  <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
   <div className="w-full space-y-4 mt-8">
  {selectedUser.identity_verification.map((item,i)=>(
        <div key={i} className="grid grid-cols-3 gap-4">
        <div className="text-gray-500 font-medium text-sm">{item.label}</div>
        <div className="text-gray-800 font-semibold text-sm col-span-2 flex items-center gap-4">{item.value} <Button size="sm" color="primary" className="rounded">View document</Button></div>
        </div>
  ))}

      </div>
  </div>
  )
}

export default IdentityVerification