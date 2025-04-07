import { Outlet } from "react-router-dom";
import { FaBolt, FaLock } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const AuthLayout = () => {

  return (
    <div className="flex flex-col w-full min-h-screen md:grid md:h-screen md:min-h-0 md:grid-cols-12 md:overflow-hidden">
      <div className="md:col-span-6">
        <div className="pattern-4 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl bg-[#161f42] px-8 py-12 text-white md:px-16 md:py-20">
          <div className="space-y-7">
            <p className="text-xl !leading-[1.2] text-center text-slate-50 md:text-[2.7rem] font-extrabold">
                ADMIN DASHBOARD
            </p>
            <p className="text-base tracking-wide text-center line-clamp-4">
            This admin dashboard is a centralized platform that gives administrators complete control and oversight of the system. It provides user management tools, transaction monitoring, and overall performance insights.
            </p>
          </div>
          <div className="border-1 border-slate-600 rounded-small flex justify-evenly p-6">
            {[
              { name: "Efficiency", icon: FaBolt },
              { name: "Confidentiality", icon: FaLock },
              { name: "Availability", icon: MdCheckCircle },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col gap-y-2 justify-center"
              >
                <item.icon />
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto text-xl md:col-span-6">
        <div className="container my-auto">
          <div className="container py-20">
            <div className="w-full max-w-md mx-auto rounded-xl px-5">
            <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout