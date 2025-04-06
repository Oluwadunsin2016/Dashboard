/* eslint-disable react/prop-types */
import LeftSidebar from '../components/LeftSidebar'
import MainContent from '../components/MainContent'
import RightSidebar from '../components/RightSidebar'

const Home = ({setSelectedService,selectedService}) => {
  return (
    <div className="flex-1 md:grid grid-cols-9 gap-8 overflow-auto my-6 px-8 md:px-20">
      <div className='hidden md:block col-span-2'>
        <LeftSidebar setSelectedService={setSelectedService} selectedService={selectedService} />
      </div>
      <div className='col-span-5'>
      <MainContent selectedService={selectedService} />
      </div>
      <div className='hidden md:block col-span-2'>
        <RightSidebar selectedService={selectedService} />
      </div>
      </div>
  )
}

export default Home