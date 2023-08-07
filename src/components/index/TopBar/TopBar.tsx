"use client";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext } from "react";
export default function TopBar() {
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div
      style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
      className={`w-full  bg-${pageSetting?.coreHeaderColor} py-4`}
    >
      <div className="max-w-[1270px] mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white ">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <div className="flex gap-4 text-white text-xs">
          <span className="hover:font-bold hover:cursor-pointer">SEARCH</span>
          <span className="uppercase hover:font-bold hover:cursor-pointer">
            {process.env.NEXT_PUBLIC_APP_KEY_WORD} List
          </span>
          <span className="hover:font-bold hover:cursor-pointer">BLOG</span>
        </div>
      </div>
    </div>
  );
}
