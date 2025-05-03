/* eslint-disable react/prop-types */

import Navbar from '../components/Navbar';
// import BottomNav from '../components/BottomNav';
import { Outlet } from 'react-router-dom';
const RootLayout = ({setSelectedService,selectedService,}) => {
  return (
    <div>
          <Navbar setSelectedService={setSelectedService} selectedService={selectedService} />
     <Outlet/>
      {/* <BottomNav setSelectedUser={setSelectedUser} selectedUser={selectedUser}/> */}
    </div>
  )
}

export default RootLayout