import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainContent from './components/MainContent';
import BottomNav from './components/BottomNav';
import { useState } from 'react';
import { services, users } from './lib/data';

const App = () => {
const [selectedUser, setSelectedUser] = useState(users[0])
const [selectedService, setSelectedService] = useState(services[0])


  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar setSelectedService={setSelectedService} selectedService={selectedService} />
      <div className="flex-1 md:grid grid-cols-9 gap-8 overflow-auto my-6 px-8 md:px-20">
      <div className='hidden md:block col-span-2'>
        <LeftSidebar setSelectedService={setSelectedService} selectedService={selectedService} />
      </div>
      <div className='col-span-5'>
      <MainContent selectedUser={selectedUser} selectedService={selectedService} />
      </div>
      <div className='hidden md:block col-span-2'>
        <RightSidebar setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
      </div>
      </div>
      <BottomNav setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
    </div>
  );
};

export default App;
