/* eslint-disable react/prop-types */
import { User } from "@nextui-org/react";
import { formatDateString } from "../lib/utils";
import { useGetAllUsers } from "../lib/api";
import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ImSpinner8 } from "react-icons/im";
import { useUsersStore, useUserStore } from "../store/Global";

const RightSidebar = ({ selectedService, setIsUsersOpen }) => {
  const { data, isPending } = useGetAllUsers(selectedService?.value);
  const queryClient = useQueryClient();
  const { users, setUsers } = useUsersStore();
  const { setUser, user: selectedUser,searchInput } = useUserStore();
  

  const userRefs = useRef({});

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['allUsers', selectedService?.value] });
  }, [selectedService]);

  const handleClick = (user) => {
    setUser(user);
    setIsUsersOpen(false);
  };

  useEffect(() => {
    // setUsers(data?.filter(user => user?.role !== 'admin'));
    setUsers(data);
  }, [data]);

  useEffect(() => {
    if (searchInput !== '' && data) {
      handleSearch();
    } else {
      setUsers(data); // reset to full list if input is empty
    }
  }, [searchInput, data]);
  
  const handleSearch = () => {
    const searchedUsers = data?.filter(user =>
      user.firstName?.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.lastName?.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.phone?.includes(searchInput)
    );
    setUsers(searchedUsers);
  };
  

  useEffect(() => {
    const selectedKey = selectedService?.value === 'monicard'
      ? selectedUser?.personal_information?.fullName
      : selectedUser?._id;

    if (selectedKey && userRefs.current[selectedKey]) {
      userRefs.current[selectedKey].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedUser, selectedService]);

  return (
    <aside className="bg-white rounded-md border h-full">
      <h2 className="font-bold border-b py-2 px-4">Users</h2>
      <div className="p-4 min-h-[80vh] md:h-[75vh] overflow-y-auto">
        {selectedService?.value === 'monicard' ? (
          isPending ? (
            <div className="w-full h-full flex items-center justify-center">
              <ImSpinner8 className="animate-spin text-gray-400" size={25} />
            </div>
          ) : data?.length < 1 ? (
            <div className="w-full h-full flex items-center justify-center">No user available</div>
          ) : (
            <ul>
              {data?.map((user, i) => {
                const key = user.personal_information?.fullName;
                return (
                  <li
                    key={i}
                    ref={(el) => (userRefs.current[key] = el)}
                    onClick={() => handleClick(user)}
                    className={`${key === selectedUser.personal_information?.fullName ? 'bg-blue-200' : ''} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}
                  >
                    <User
                      avatarProps={{ src: user.personal_information?.image }}
                      name={<p className="line-clamp-1">{user.personal_information?.fullName}</p>}
                    />
                  </li>
                );
              })}
            </ul>
          )
        ) : selectedService?.value === 'africana' ? (
          isPending ? (
            <div className="w-full h-full flex items-center justify-center">
              <ImSpinner8 className="animate-spin text-gray-400" size={25} />
            </div>
          ) : users?.length < 1 ? (
            <div className="w-full h-full flex items-center justify-center">No user available</div>
          ) : (
            <ul>
              {users?.map((user, i) => (
                <li
                  key={i}
                  ref={(el) => (userRefs.current[user._id] = el)}
                  onClick={() => handleClick(user)}
                  className={`${user._id === selectedUser?._id ? 'bg-blue-200' : ''} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}
                >
                  <User
                    avatarProps={{ src: user?.image }}
                    name={<p className="line-clamp-1">{user?.firstName} {user?.lastName}</p>}
                    description={ <span>{new Date(user.lastLogin).toLocaleDateString()} at {new Date(user.lastLogin).toLocaleTimeString()}</span> }
                  />
                </li>
              ))}
            </ul>
          )
        ) : (
          <ul>
            {data?.map((user, i) => (
              <li
                key={i}
                ref={(el) => (userRefs.current[user.name] = el)}
                onClick={() => handleClick(user)}
                className={`${user.name === selectedUser?.name ? 'bg-blue-200' : ''} p-2 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100`}
              >
                <User
                  avatarProps={{ src: user.image }}
                  description={formatDateString(user.created_at)}
                  name={user.name}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default RightSidebar;
