"use client";
import AdminNavBar from "@/Apppages/Admin/AdminNavBar";
import AdminPanel from "@/Apppages/Admin/AdminPanel";
import { useState } from "react";
const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="w-screen flex">
      <AdminPanel toggle={toggle} setToggle={setToggle} />
      <div className="lg:w-[80%] bg-[#ffffffcb] h-screen overflow-y-scroll">
        <AdminNavBar toggle={toggle} setToggle={setToggle} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
