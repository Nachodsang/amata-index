"use client";
import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
// import Image from "next/image";
import Filter from "../Filter/Filter";
import "./Header.css";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import GoogleTranslate from "../GooogleTranslate/GoogleTranslate";

export default function Header({ category }: { category: string }) {
  const { pageSetting }: any = useContext(PageSettingContext);

  return (
    <div className="relative w-full ">
      <div
        style={{
          background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgb(255, 255, 255)), url(${pageSetting?.coverImage}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`cover-image absolute top-0 z-0  h-[800px]  w-full bg-cover  bg-no-repeat `}
      ></div>
      <div className=" px-6 ">
        <div className=" relative  w-full ">
          <div className="m-auto max-w-[1270px]  py-20 ">
            <div className="flex flex-col items-start gap-4   ">
              <div className="z-20  ">
                <h1
                  style={{ backgroundColor: `${pageSetting?.themeColor}` }}
                  className={`rounded-xl px-6 py-4 text-6xl  font-bold  capitalize text-white`}
                >
                  {pageSetting?.pageTitle}
                </h1>
                {/* <GoogleTranslate /> */}
              </div>
              <div className=" z-20 text-3xl font-semibold text-white">
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
