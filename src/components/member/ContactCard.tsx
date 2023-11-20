import { FaLine } from "react-icons/fa";
import { MdEmergency, MdLocalHospital, MdLocalPolice } from "react-icons/md";
import { RiGovernmentFill, RiWaterFlashFill } from "react-icons/ri";
import { SlCallOut } from "react-icons/sl";

export default function ContactCard({ item, index }: any) {
  return (
    <div
      className={`${
        index % 2 === 0
          ? "bg-[rgba(119,155,129,0.15)]"
          : "bg-[rgba(212,219,193,0.3)]"
      } w-full text-xs py-4 px-4 rounded-lg  flex justify-between items-center`}
    >
      <div className="flex desktop0:gap-4 gap-1 desktop0:flex-row desktop0:items-center items-start flex-col">
        <div className="overflow-hidden border-4 border-slate-100 bg-white rounded-lg w-[60px] h-[60px] desktop0:w-[100px] desktop0:h-[100px]">
          <img
            src={`/contacts/${item?.logo || "amataLogo.jpg"}`}
            className="w-fulll h-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            {item?.type == "emergency" && <MdEmergency size={20} color="red" />}
            {item?.type == "hospital" && (
              <MdLocalHospital size={20} color="green" />
            )}
            {item?.type == "police" && (
              <MdLocalPolice size={20} color="#18295A" />
            )}
            {item?.type == "government" && (
              <RiGovernmentFill size={20} color="grey" />
            )}
            {item?.type == "facility" && (
              <RiWaterFlashFill size={20} color="#0CD9FF" />
            )}
            <span className="font-semibold">{item?.nameTh}</span>
          </div>

          <span className="font-semibold">{item?.nameEn}</span>
          <span>{item?.address}</span>
          <span>{item?.tel}</span>
        </div>
      </div>
      <span className="flex justify-center gap-2 items-centers">
        <FaLine size={22} color="#1AC152" />
        <a href={`tel:${item?.tel}`}>
          <SlCallOut size={20} color="#0B5FAE" />
        </a>
      </span>
    </div>
  );
}
