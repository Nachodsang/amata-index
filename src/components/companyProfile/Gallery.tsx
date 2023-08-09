"use client";
import { TfiGallery } from "react-icons/tfi";
import ImageCourousel from "./ImageCorousel";
import { useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
export default function Gallery({ companyData }: any) {
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div id="gallery" className="w-full bg-slate-100">
      {/* container */}
      <div className="mx-auto max-w-[1270px] py-10 flex flex-col gap-6 px-4">
        <div className=" flex gap-5 items-center">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="p-4 rounded-full text-white"
          >
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
