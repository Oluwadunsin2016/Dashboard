import { Tab, Tabs } from "@nextui-org/react";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { tabs } from "../utils/data";
import PersonalInformation from "./PersonalInformation";

const MainContent = ({ selectedUser, selectedService }) => {
  return (
    <main className="md:h-[85vh] mainContent overflow-auto">
      <div className="bg-white border p-4 rounded-md mb-4 flex gap-6">
        <div className="w-[10rem] h-[6rem] rounded-lg overflow-hidden">
          <img
            src={selectedService.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-between w-full">
          <h2 className="text-lg font-bold">{selectedService.label}</h2>
          <div className="flex items-center justify-between">
            <span className="bg-gray-100 border-2 text-gray-400 rounded-full px-4 py-1">
              6 users
            </span>{" "}
            <PiDotsThreeOutlineLight size={24} />
          </div>
        </div>
      </div>
        <Tabs color="primary" variant={"underlined"} className="flex">
          {tabs.map((tab, i) => (
            <Tab key={i} title={tab.label} className="outline-none">
              <tab.component selectedUser={selectedUser} />
            </Tab>
          ))}
        </Tabs>
    </main>
  );
};

export default MainContent;
