import { FaLine } from "react-icons/fa";
import { MdEmergency, MdLocalHospital, MdLocalPolice } from "react-icons/md";
import { RiGovernmentFill, RiWaterFlashFill } from "react-icons/ri";
import { SlCallOut } from "react-icons/sl";

export default function CouponCard({ item, index }: any) {
  return (
    <div
      className={`${
        index % 2 === 0
          ? "bg-[rgba(119,155,129,0.15)]"
          : "bg-[rgba(212,219,193,0.3)]"
      } w-full text-xs rounded-lg  flex justify-between items-center  relative `}
    >
      <div className="tablet2:w-[65%] flex desktop0:gap-4 gap-1 p-4 desktop0:flex-row desktop0:items-center items-start flex-col">
        <div className="overflow-hidden border-4 border-slate-100 bg-white rounded-lg w-[60px] h-[60px] desktop0:w-[100px] desktop0:h-[100px]">
          <img
            src={`/coupon/${item?.logo || "amataLogo.jpg"}`}
            className="w-fulll h-full object-cover"
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
            <span className="font-semibold text-xl text-white tablet2:text-slate-500">
              {item?.couponName}
            </span>
          </div>

          <span className="font-semibold text-white tablet2:text-slate-500">
            {item?.nameEn}
          </span>
          <span className="text-white tablet2:text-slate-500">
            {item?.address}
          </span>
          <span className="text-white tablet2:text-slate-500">{item?.tel}</span>
        </div>
      </div>
      <div className="w-full  h-full absolute top-0 left-0 right-0 z-[-10] rounded-lg overflow-hidden tablet2:hidden">
        <div
          style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(/coupon/${item?.image}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(0.2px)",
          }}
          // src="/coupon/hotelNikko.jpg"
          className="w-full h-full object-cover"
        ></div>
      </div>
      <div className="hidden h-full border-l-[6px] border-[rgb(36,120,92)] tablet2:flex items-center   tablet1:w-[35%] rounded-r-lg">
        <div className="flex justify-center gap-2 items-centers h-full ">
          <img
            src={`/coupon/${item?.image}` || "/coupon/hotelNikko.jpg"}
            className="w-full object-cover rounded-r-lg"
          />
          {/* <FaLine size={22} color="#1AC152" />
          <a href={`tel:${item?.tel}`}>
            <SlCallOut size={20} color="#0B5FAE" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
