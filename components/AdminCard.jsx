import { CiMenuKebab } from "react-icons/ci";
import { RiBarChartGroupedLine } from "react-icons/ri";

const AdminCard = ({ icon, name, total, color }) => {
  const clName =
    color == ""
      ? "shadow-xl rounded-lg p-3 text-orange-500"
      : `shadow-xl rounded-lg p-3 text-${color}`;
  return (
    <div className={clName}>
      <div className="fjc">
        <div className={`p-2 bg-gray-800/5 rounded-md`}>{icon}</div>
        <h3 className="font-semibold text-black">{name}</h3>
        <CiMenuKebab className=" text-black" />
      </div>

      <div className="fc">
        <RiBarChartGroupedLine size={130} className="flex-1" />
        <div className="p-3 font-semibold text-lg text-black bg-gray-900/10 rounded-md">
          {total}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
