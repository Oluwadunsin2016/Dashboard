/* eslint-disable react/prop-types */
import { User } from "@nextui-org/react";
import { formatDateString } from "../lib/utils";
import { useGetAllUsers } from "../lib/api";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ImSpinner8 } from "react-icons/im";
import { useUsersStore, useUserStore } from "../store/Global";

const RightSidebar = ({selectedUser,selectedService,setIsUsersOpen}) => {
  const {data,isPending}= useGetAllUsers(selectedService?.value)
  const querClient=useQueryClient()
  const {users,setUsers}=useUsersStore()
  const {setUser}=useUserStore()

  console.log(data);
  
  useEffect(() => {
 querClient.invalidateQueries({queryKey:['allUsers',selectedService?.value]})
  }, [selectedService])
  

const handleClick=(user)=>{
  setUser(user)
setIsUsersOpen(false)
}

useEffect(() => {
  setUsers(data?.filter(user=>user?.role!=='admin'))
}, [data])

useEffect(() => {
  setUser(selectedUser)
}, [selectedUser])


console.log('users:',data);
console.log('selectedUser:',selectedUser);


  return (
    <aside className="bg-white rounded-md border h-full">
      <h2 className="font-bold border-b py-2 px-4">Users</h2>
      <div className="p-4 min-h-[80vh] md:h-[75vh] overflow-y-auto">
     
      {selectedService?.value=='monicard'? <div>
        {isPending? <div className="w-full h-full flex items-center justify-center"><ImSpinner8 className="animate-spin text-gray-400" size={25} /></div>:data?.length>1?<div className="w-full h-full flex items-center justify-center">No user available</div>: <ul>

        {data?.map((user,i)=>(
        <li key={i} onClick={()=>handleClick(user)} className={`${user.personal_information?.fullName==selectedUser.personal_information?.fullName&&'bg-blue-200'} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}>  
        <User
      avatarProps={{
        src: user.personal_information?.image,
      }}
      // description={formatDateString(user.created_at)}
      name={<p className="line-clamp-1">{user.personal_information?.fullName}</p>}
    /></li>
      ))}
        </ul> }
      </div>:selectedService?.value=='africana'? <div>
        {isPending? <div className="w-full h-full flex items-center justify-center"><ImSpinner8 className="animate-spin text-gray-400" size={25} /></div>:data?.length<1?<div className="w-full h-full flex items-center justify-center">No user available</div>: <ul>

        {users?.map((user,i)=>(
        <li key={i} onClick={()=>handleClick(user)} className={`${user?._id==selectedUser?._id&&'bg-blue-200'} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}>  
        <User
      avatarProps={{
        src: user?.image,
      }}
      // description={formatDateString(user.created_at)}
      name={<p className="line-clamp-1">{user?.firstName} {user?.lastName}</p>}
    /></li>
      ))}
        </ul> }
      </div>: <ul>
      {data?.map((user,i)=>(
        <li key={i} onClick={()=>handleClick(user)} className={`${user.name==selectedUser.name&&'bg-blue-200'} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}>  
        <User
      avatarProps={{
        src: user.image,
      }}
      description={formatDateString(user.created_at)}
      name={user.name}
    /></li>
      ))}
      </ul> }
    
      </div>
    </aside>
  );
};

export default RightSidebar;
