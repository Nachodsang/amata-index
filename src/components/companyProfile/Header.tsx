"use client";
// import { useContext, useState } from "react";
import { CompanyContext } from "@/contexts/CompanyContext";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext } from "react";
import {
  BsFillTelephoneOutboundFill,
  BsLine,
  BsPinMapFill,
  BsPeopleFill,
} from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaFlag } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { divide } from "lodash";
export default function Header({ companyData }: any) {
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div className="flex flex-col gap-10 py-10 ">
      {/* cover image */}
      {companyData?.profileType === "full" ? (
        <div className="h-auto overflow-hidden w-full bg-white">
          <img
            src={companyData?.generalInfo?.coverImage}
            className="h-auto w-full max-h-[50vh] object-cover"
          />
        </div>
      ) : (
        <div className="py-10 "></div>
      )}
      {/* company info */}
      <div
        id="about"
        className="mx-auto flex desktop0:flex-row flex-col w-full max-w-[1270px] gap-4 px-4"
      >
        <div className="flex desktop0:w-[75%]  w-full flex-col tablet1:flex-row  gap-6 rounded-xl items-center bg-slate-200 p-6 shadow-lg">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="flex flex-col  p-2 rounded-xl items-center gap-1 desktop0:w-[25%] w-full tablet1:w-[40%]"
          >
            {
              <div className=" aspect-square w-full  rounded-xl bg-white p-2">
                <img
                  src={companyData?.generalInfo?.logo}
                  className="h-full w-full rounded-lg object-cover
              "
                />
              </div>
            }
            <h2 className="text-white uppercase">
              {companyData?.generalInfo?.industry} Industry
            </h2>
            <div className="flex flex-col w-full gap-1">
              {companyData?.generalInfo?.managingDirector && (
                <div className="w-full flex flex-col text-white">
                  <h2 className="text-xs underline text-white">
                    Managing Director{" "}
                  </h2>
                  <h2 className="text-xs text-white">
                    {companyData?.generalInfo?.managingDirector}
                  </h2>
                </div>
              )}
              {companyData?.generalInfo?.plantManager && (
                <div className="w-full flex flex-col">
                  <h2 className="text-xs underline text-white">
                    Plant Manager{" "}
                  </h2>
                  <h2 className="text-xs text-white">
                    {companyData?.generalInfo?.plantManager}
                  </h2>
                </div>
              )}

              {/* {companyData?.generalInfo?.plantManager && (
                <h2>
                  Plant Mananager: {companyData?.generalInfo?.plantManager}{" "}
                </h2>
              )} */}
            </div>
          </div>
          <div className="flex desktop0:w-[75%]  w-full tablet-1:w-[60%]  flex-col gap-4 items-center tablet1:items-start">
            <div
              className="w-full p-2 rounded-xl"
              style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            >
              <h1 className="text-xl mb-2  text-white font-semibold text-center tablet1:text-start">
                {companyData?.companyTitle}
              </h1>
              <div className="w-full rounded-xl bg-white px-4 py-10 tablet1:py-20 desktop0:px-20  desktop0:py-10">
                <div className="mx-auto">
                  {companyData?.details?.fullDescription}
                </div>
              </div>
            </div>

            {/* <div className="flex gap-2">
              <div
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className=" uppercase rounded-3xl py-2 px-2 text-center min-w-[100px] font-semibold text-white"
              >
                {companyData?.generalInfo?.industry}
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex desktop0:w-[35%] w-full flex-col gap-4 rounded-xl bg-slate-200 p-8 shadow-lg ">
          <div className="border-b-2 border-white py-4 flex flex-col tablet1:flex-row desktop0:flex-col gap-4">
            <button
              style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
              className="w-full rounded-2xl  py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
            >
              <FaFlag size={20} />
              {companyData?.generalInfo?.nationality || "Thai"}
            </button>
            <button
              style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
              className="w-full rounded-2xl py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
            >
              <ImLocation2 size={20} />
              {companyData?.contacts?.province || "Chonburi"}
            </button>
            {companyData?.generalInfo?.employeeNo && (
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-2xl py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
              >
                <BsPeopleFill size={20} />
                {companyData?.generalInfo?.employeeNo}
              </button>
            )}
            {companyData?.generalInfo?.registeredCapital && (
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-2xl py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
              >
                <AiFillDollarCircle size={20} />
                {companyData?.generalInfo?.registeredCapital}
              </button>
            )}
            {companyData?.generalInfo?.area && (
              <button
                style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
                className="w-full rounded-2xl py-2 font-semibold text-white flex justify-start items-center px-10 gap-6"
              >
                <BsPinMapFill size={20} />
                {companyData?.generalInfo?.area}
              </button>
            )}
          </div>
          <div className="flex desktop0:flex-col tablet1:flex-row flex-col   gap-4 font-semibold text-white">
            <button
              style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
              className="w-full rounded-2xl py-2 flex justify-start items-center px-10 gap-6"
            >
              <BsFillTelephoneOutboundFill size={20} />
              <span>{companyData?.contacts?.tel || "Tel"}</span>
            </button>
            {/* <button
              style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
              className="w-full rounded-2xl  py-2 flex justify-start items-center px-10 gap-6"
            >
              <BsLine size={20} />

              <span>{companyData?.contact?.line || "Line ID"}</span>
            </button> */}
            {/* <button className="rounded-2xl w-full"></button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
