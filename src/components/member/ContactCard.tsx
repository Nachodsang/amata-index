import { FaLine } from "react-icons/fa";
import { MdEmergency, MdLocalHospital, MdLocalPolice } from "react-icons/md";
import { RiGovernmentFill, RiWaterFlashFill } from "react-icons/ri";
import { SlCallOut } from "react-icons/sl";

export default function ContactCard({ item }: any) {
  return (
    <div className="w-full text-xs py-4 px-4 rounded-lg bg-slate-200 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {item?.type == "emergency" && <MdEmergency size={20} color="red" />}
        {item?.type == "hospital" && (
          <MdLocalHospital size={20} color="green" />
        )}
        {item?.type == "police" && <MdLocalPolice size={20} color="#18295A" />}
        {item?.type == "government" && (
          <RiGovernmentFill size={20} color="grey" />
        )}
        {item?.type == "facility" && (
          <RiWaterFlashFill size={20} color="#0CD9FF" />
        )}
        <div className="flex flex-col">
          <span className="font-semibold">{item?.nameTh}</span>

          <span>{item?.nameEn}</span>
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
