
import { useEffect, useState } from 'react';
import { services } from './lib/data';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './pages/Home';
import SetExchangeRate from './pages/SetExchangeRate';
import { useGetAllUsers } from './lib/api';
import { useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const querClient=useQueryClient()
  const [selectedService, setSelectedService] = useState(services[0])
  const {data:users}= useGetAllUsers(selectedService?.value)
  console.log(users);
  
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    if (users&&users.length>0) {
      console.log(users);
      
      setSelectedUser(users?.[0])
    }
  }, [users])
  
  
  useEffect(() => {
 querClient.invalidateQueries({queryKey:['allUsers',selectedService?.value]})
  }, [selectedService])


  return (
    <div className="h-screen flex flex-col bg-gray-50">
    <Routes>
      <Route path="/" element={<RootLayout setSelectedService={setSelectedService} selectedService={selectedService} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>}>
      <Route path="" element={<Home setSelectedService={setSelectedService} selectedService={selectedService} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>} />
      <Route path='set-exchange-rate' element={<SetExchangeRate/>} />
      </Route>
    </Routes>
    <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
