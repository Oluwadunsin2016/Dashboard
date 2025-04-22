/* eslint-disable react/prop-types */

import Navbar from '../components/Navbar';
// import BottomNav from '../components/BottomNav';
import { Outlet } from 'react-router-dom';
const RootLayout = ({setSelectedService,selectedService,setSearchInput,handleSearch}) => {
  return (
    <div>
          <Navbar setSelectedService={setSelectedService} handleSearch={handleSearch} setSearchInput={setSearchInput} selectedService={selectedService} />
     <Outlet/>
      {/* <BottomNav setSelectedUser={setSelectedUser} selectedUser={selectedUser}/> */}
    </div>
  )
}

export default RootLayout