import { GrGallery } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import ImageCourousel from "./ImageCorousel";
export default function Gallery({ companyData }: any) {
  return (
    <div className="w-full bg-slate-100">
      {/* container */}
      <div className="mx-auto max-w-[1440px] py-10 flex flex-col gap-6 px-4">
        <div className=" flex gap-5 items-center">
          <div className="p-4 rounded-full bg-orange-500 text-white">
            <TfiGallery size={25} className="" />
          </div>
          <h1 className="font-semibold text-2xl">Gallery</h1>
        </div>
        <div className="overflow-hidden">
          <ImageCourousel images={companyData?.gallery} />
        </div>
      </div>
    </div>
  );
}
