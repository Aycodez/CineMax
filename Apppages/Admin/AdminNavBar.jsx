import { GiHamburgerMenu } from "react-icons/gi";
import { IoDocumentTextOutline, IoLanguage } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import Image from "next/image";
import avatar from "@/public/man.png";

const AdminNavBar = ({ toggle, setToggle }) => {
  return (
    <div className="fjc w-full p-5">
      <button onClick={() => setToggle(!toggle)} className="p-2 bg-gray-800/5 rounded-md">
        <GiHamburgerMenu size={20} />
      </button>
      <input
        type="search"
        className="bg-transparent outline-none rounded-md border p-1 w-[10rem] lg:w-64 text-black"
        placeholder="Search for Movies here..."
      />
      <div className="fc">
        <div className="p-1 lg:p-2 bg-gray-800/5 rounded-md">
          <IoLanguage size={20} />
        </div>
        <div className="p-1 lg:p-2 bg-gray-800/5 rounded-md">
          <IoDocumentTextOutline size={20} />
        </div>
        <div className="p-1 lg:p-2 bg-gray-800/5 rounded-md">
          <IoMdNotifications size={20} />
        </div>
        <div>
          <Image
            src={avatar}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default AdminNavBar;
