"use client";
import Categories from "@/Apppages/Movies/Categories";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname().split("/").pop();
  return (
    <div className="bg-[#0b0e17]">
      <div className=" pt-10 max-w-[1200px] mx-auto">
        <h1 className="text-gray-500 p-10">
          Home {" > "}
          <span className="font-semibold text-lg text-white">{pathName}</span>
        </h1>

        <section className="lg:flex w-full gap-5">
          <Categories />
          {children}
        </section>
      </div>
    </div>
  );
};

export default Layout;
