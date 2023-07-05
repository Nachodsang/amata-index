// "use client";
// import { useContext, useState } from "react";
import { CompanyContext } from "@/contexts/CompanyContext";
export default function Header({ companyData }: any) {
  // const { companyData }: any = useContext(CompanyContext);

  return (
    <div className="flex flex-col gap-10 py-10">
      {/* cover image */}
      <div className="h-[50vh] w-full bg-white">
        <img
          src={companyData?.generalInfo?.coverImage}
          className="h-full w-full object-cover"
        />
      </div>
      {/* company info */}
      <div className="mx-auto flex h-[300px] w-full max-w-[1440px] gap-4 ">
        <div className="flex w-[75%] items-start gap-6 rounded-xl bg-slate-200 p-6 shadow-lg">
          <div className="  h-full w-[25%] rounded-xl bg-white p-2">
            <img
              src={companyData?.generalInfo?.logo}
              className="h-full w-full rounded-lg object-cover
              "
            />
          </div>
          <div className="flex w-[75%] flex-col gap-4">
            <h1 className="text-xl font-bold">{companyData?.companyTitle}</h1>
            <div className="w-full rounded-xl bg-white px-20 py-10">
              {companyData?.details?.fullDescription}
            </div>
            <div className="flex gap-2">
              {/* <div className="rounded-3xl bg-green-400 px-4 py-2 font-semibold text-white">
                {companyData?.generalInfo?.industry}
              </div> */}
              <div className="rounded-3xl bg-orange-400 py-2 text-center min-w-[100px] font-semibold text-white">
                {companyData?.generalInfo?.nationality}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[25%] flex-col gap-4 rounded-xl bg-slate-200 p-8 shadow-lg ">
          <div className="flex flex-col gap-4 font-semibold text-white">
            <button className="w-full rounded-3xl bg-orange-400 py-2 ">
              asdf
            </button>
            <button className="w-full rounded-3xl bg-orange-400 py-2 ">
              asdf
            </button>
            <button className="w-full rounded-3xl bg-orange-400 py-2">
              asdf
            </button>
            {/* <button className="rounded-2xl w-full"></button> */}
          </div>
          <div className="border-t-2 border-white py-4">
            <button className="w-full rounded-3xl bg-orange-400 py-2 font-semibold text-white">
              asdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
