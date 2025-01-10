/* eslint-disable react/prop-types */
import { User } from "@nextui-org/react";
import { users } from "../lib/data";
import { formatDateString } from "../lib/utils";

const RightSidebar = ({setSelectedUser,selectedUser,setInfoOpen}) => {

const handleClick=(user)=>{
setSelectedUser(user)
setInfoOpen(false)
}
  return (
    <aside className="bg-white rounded-md border h-full">
      <h2 className="font-bold border-b py-2 px-4">Users</h2>
      <ul className="p-4">
      {users?.map((user,i)=>(
        <li key={i} onClick={()=>handleClick(user)} className={`${user.name==selectedUser.name&&'bg-blue-200'} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}>  
        <User
      avatarProps={{
        src: user.image,
      }}
      description={formatDateString(user.created_at)}
      name={user.name}
    /></li>
      ))}
      </ul>
    </aside>
  );
};

export default RightSidebar;
