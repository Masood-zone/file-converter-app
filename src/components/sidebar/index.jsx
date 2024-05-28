import { Zap } from "lucide-react";
import { Menu } from "lucide-react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { moon, sun } from "../../assets/svgs";

function Sidebar() {
  const location = useLocation();
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col max-lg:flex">
        {/* Page content here */}
        <div className="w-14 h-auto">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <Menu />
          </label>
        </div>
        <div className="overflow-hidden">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <ul className="menu p-4 pl-10 w-80 min-h-full border-r text-base-content max-md:bg-base-200 flex flex-col items-start justify-start gap-10">
          {/* Main Logo */}
          <div className="w-auto p-3 bg-primary rounded-2xl ml-2">
            <Link to="/">
              <Zap size={26} className="h-auto mx-auto text-white" />
            </Link>
          </div>
          <div className="flex flex-col flex-1 w-full ">
            <li className="text-lg mb-4">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "text-text/85 font-medium"
                    : "text-accent font-medium"
                }
              >
                Home
              </Link>
            </li>
            <li className="text-lg mb-4">
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "text-text/85 font-medium"
                    : "text-accent font-medium"
                }
              >
                About Us
              </Link>
            </li>
          </div>
          {/* Theme section */}
          <div className="ml-3">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="dark"
                className="toggle toggle-lg theme-controller bg-gray-200 row-start-1 col-start-1 col-span-2 rounded-full"
              />

              <div className="col-start-1 row-start-1">
                <img src={sun} alt="Sun Icon" className="" />
              </div>
              <div className="col-start-2 row-start-1 ">
                <img src={moon} alt="Moon Icon" className="" />
              </div>
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
