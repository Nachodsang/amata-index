import { BsFacebook, BsLine } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer({ pageSetting }: any) {
  return (
    <div className="w-full ">
      <div className="max-w-[1270px] px-4 mx-auto border-t gap-2 flex flex-col items-center border-slate-200 py-6">
        <div className="font-semibold text-base text-slate-400">
          SHARE THIS NEWS & ACTIVITIES
        </div>
        <div className="flex justify-center gap-4  tablet2:w-[60%] w-full">
          <div className="w-[33%] flex gap-2 items-center justify-center rounded-2xl bg-blue-500 text-white px-2 py-2">
            <BsFacebook size={30} />
            <label>Facebook</label>
          </div>
          <div className="w-[33%] flex gap-2 items-center justify-center rounded-2xl bg-green-500 text-white px-2 py-2">
            <BsLine size={30} />
            <label>Line</label>
          </div>
          <div className="w-[33%] flex gap-2 items-center justify-center rounded-2xl bg-slate-400 text-white px-2 py-2">
            <MdEmail size={30} />
            <label>Email</label>
          </div>
        </div>
        <img src={pageSetting?.footerBanner} className="w-full rounded-xl" />
      </div>
    </div>
  );
}
