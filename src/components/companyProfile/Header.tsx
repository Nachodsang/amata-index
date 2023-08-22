"use client";
// import { useContext, useState } from "react";
import { CompanyContext } from "@/contexts/CompanyContext";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext } from "react";
import {
  BsFillTelephoneOutboundFill,
  BsLine,
  BsPinMapFill,
} from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
export default function Header({ companyData }: any) {
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div className="flex flex-col gap-10 py-10">
      {/* cover image */}
      <div className="h-auto overflow-hidden w-full bg-white">
        <img
          src={companyData?.generalInfo?.coverImage}
          className="h-auto w-full max-h-[50vh] object-cover"
        />
      </div>
      {/* company info */}
      <div
        id="about"
        className="mx-auto flex desktop0:flex-row flex-col w-full max-w-[1270px] gap-4 px-4"
      >
        <div className="flex desktop0:w-[75%] w-full flex-col tablet1:flex-row  gap-6 rounded-xl items-center bg-slate-200 p-6 shadow-lg">
          <div className=" aspect-square desktop0:w-[25%] w-full tablet1:w-[40%]  rounded-xl bg-white p-2">
            <img
              src={companyData?.generalInfo?.logo}
              className="h-full w-full rounded-lg object-cover
              "
            />
          </div>
          <div className="flex desktop0:w-[65%]  w-full tablet-1:w-[60%]  flex-col gap-4 items-center tablet1:items-start">
            <h1 className="text-2xl  text-slate-700 font-bold text-center tablet1:text-start">
              {companyData?.companyTitle}
            </h1>
            <div className="w-full rounded-xl bg-white px-4 py-10 tablet1:py-20 desktop0:px-20  desktop0:py-10">
              <div className="mx-auto">
                {companyData?.details?.fullDescription}
              </div>
            </div>
            <div className="flex gap-2">
              <div
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className=" rounded-3xl py-2 px-2 text-center min-w-[100px] font-semibold text-white"
              >
                {companyData?.generalInfo?.industry}
              </div>
            </div>
          </div>
        </div>
        {envi === "factory" && (
          <div className="flex desktop0:w-[35%] w-full flex-col gap-4 rounded-xl bg-slate-200 p-8 shadow-lg ">
            <div className="flex desktop0:flex-col tablet1:flex-row flex-col   gap-4 font-semibold text-white">
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-3xl  py-2 flex justify-start items-center px-10 gap-6"
              >
                <BsFillTelephoneOutboundFill size={25} />
                <span>{companyData?.contacts?.tel || "Tel"}</span>
              </button>
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-3xl  py-2 flex justify-start items-center px-10 gap-6"
              >
                <BsLine size={25} />

                <span>{companyData?.contact?.line || "Line ID"}</span>
              </button>
              {/* <button className="rounded-2xl w-full"></button> */}
            </div>
            <div className="border-t-2 border-white py-4 flex flex-col tablet1:flex-row desktop0:flex-col gap-4">
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-3xl  py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
              >
                <FaFlag size={25} />
                {companyData?.generalInfo?.nationality || "Thailand"}
              </button>
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-3xl py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
              >
                <BsPinMapFill size={25} />
                {companyData?.contacts?.province || "Bangkok"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
