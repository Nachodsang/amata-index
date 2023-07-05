import { GrGallery } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
export default function Gallery() {
  return (
    <div className="w-full bg-slate-100">
      {/* container */}
      <div className="mx-auto max-w-[1440px] py-10 flex flex-col gap-6">
        <div className=" flex gap-5 items-center">
          <div className="p-4 rounded-full bg-orange-500 text-white">
            <TfiGallery size={25} className="" />
          </div>
          <h1 className="font-semibold text-2xl">Gallery</h1>
        </div>
        <div className="flex justify-between">
          <div className="h-[300px] w-[30%] rounded-xl bg-slate-400"></div>
          <div className="h-[300px] w-[30%] rounded-xl bg-slate-400"></div>
          <div className="h-[300px] w-[30%] rounded-xl bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}
