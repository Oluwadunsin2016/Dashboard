
import { useEffect, useState } from 'react';
import { services } from './lib/data';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import SetExchangeRate from './pages/SetExchangeRate';
import { useGetAllUsers } from './lib/api';
import { useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AuthLayout from './layouts/AuthLayout';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { useUserStore } from './store/Global';

const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const querClient=useQueryClient()
  const [selectedService, setSelectedService] = useState(services[0])
  const {data:users}= useGetAllUsers(selectedService?.value)
  console.log(users);
  const {setUser}=useUserStore()

  useEffect(() => {
    if (users&&users.length>0) {
      console.log(users);
      
      setUser(users?.[0])
    }
  }, [users])
  
  
  useEffect(() => {
 querClient.invalidateQueries({queryKey:['allUsers',selectedService?.value]})
  }, [selectedService])


  const handleSearch=()=>{
if (users) {
  const searchedUser=users?.find(user=>user.phone==searchInput)
  setUser(searchedUser)
}
  }


  return (
    <div className="h-screen flex flex-col bg-gray-50">
    <Routes>
      <Route path="/" element={<RootLayout handleSearch={handleSearch} setSearchInput={setSearchInput} setSelectedService={setSelectedService} selectedService={selectedService}/>}>
      <Route path="" element={<Home setSelectedService={setSelectedService} selectedService={selectedService}/>} />
      <Route path='set-exchange-rate' element={<SetExchangeRate/>} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
    </Routes>
    <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
