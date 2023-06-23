"use client";
import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
// import Image from "next/image";
import Filter from "../Filter/Filter";
import "./Header.css";
import { PageSettingContext } from "@/contexts/PageSettingContext";

export default function Header({ category }: { category: string }) {
  const { pageSetting }: any = useContext(PageSettingContext);

  console.log(pageSetting.themeColor);
  return (
    <div className="w-full relative ">
      <div
        style={{
          background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgb(255, 255, 255)), url(${pageSetting?.coverImage}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`absolute z-0 top-0 bg-no-repeat  bg-cover  h-[800px] cover-image  w-full `}
      ></div>
      <div className=" px-6 ">
        <div className=" w-full  ">
          <div className="m-auto max-w-[1270px]  py-20  ">
            <div className="flex flex-col gap-4 items-start ">
              <div className={` z-20`}>
                <h1
                  style={{ backgroundColor: `${pageSetting?.themeColor}` }}
                  className={`font-bold text-6xl px-6 py-4  rounded-xl  text-white capitalize`}
                >
                  {pageSetting?.pageTitle}
                </h1>
              </div>
              <div className=" font-semibold text-3xl text-white z-20">
                {pageSetting?.description}
              </div>
            </div>
          </div>
        </div>
        <Filter category={category} />
      </div>
    </div>
  );
}
