/* eslint-disable react/prop-types */
import { Tab, Tabs } from "@nextui-org/react";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { tabs } from "../lib/data";

const MainContent = ({ selectedUser, selectedService }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const mainRef = useRef(null);
  const scrollInterval = useRef(null);

  const handleScroll = () => {
    const element = mainRef.current;
    if (!element) return;

    const isTop = element.scrollTop === 0;
    const isBottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;

    setIsAtTop(isTop);
    setIsAtBottom(isBottom);

    if (isTop || isBottom) {
      stopScroll();
    }
  };

  const startScroll = (direction) => {
    stopScroll(); // Clear any existing intervals
    scrollInterval.current = setInterval(() => {
      if (!mainRef.current) return;

      const element = mainRef.current;
      if (direction === "up") {
        element.scrollBy({ top: -50, behavior: "smooth" });
      } else if (direction === "down") {
        element.scrollBy({ top: 50, behavior: "smooth" });
      }
    }, 50); // Adjust for smoother or faster scrolling
  };

  const stopScroll = () => {
    clearInterval(scrollInterval.current);
  };

  useEffect(() => {
    const element = mainRef.current;
    if (!element) return;

    element.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      element.removeEventListener("scroll", handleScroll);
      stopScroll(); // Cleanup interval on unmount
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative md:h-[85vh] mainContent overflow-auto"
    >
      {/* Content */}
      <div className="bg-white border p-4 rounded-md mb-4 flex gap-6">
        <div className="w-[10rem] h-[6rem] rounded-lg overflow-hidden">
          <img
            src={selectedService.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-full gap-8">
          <h2 className="text-lg font-bold">{selectedService.label}</h2>
          <div className="flex md:items-center justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <span className="bg-gray-100 border-2 text-gray-400 rounded-full px-4 py-1">
                6 users
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline line-clamp-1"
                href={selectedService.website}
              >
                {selectedService.website}
              </a>
            </div>
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

      {/* Scroll Controls */}
      <div className="sticky bottom-[6rem] right-4 z-50">
    <div className="relative">
        {!isAtTop && (
          <button
            className="p-2 bg-blue-100 absolute top-0 right-0 text-gray-400 rounded-full shadow-md hover:bg-blue-200"
            onMouseDown={() => startScroll("up")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
          >
            <FaArrowUp />
          </button>
        )}
        {!isAtBottom && (
          <button
            className="p-2 bg-blue-100 absolute top-12 right-0 text-gray-400 rounded-full shadow-md hover:bg-blue-200"
            onMouseDown={() => startScroll("down")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
          >
            <FaArrowDown />
          </button>
        )}
    </div>
      </div>
    </main>
  );
};

export default MainContent;
