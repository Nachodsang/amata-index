// "use client";
// import { useContext, useState } from "react";
import { CompanyContext } from "@/contexts/CompanyContext";
export default function Header({ companyData }: any) {
  // const { companyData }: any = useContext(CompanyContext);
  console.log("companydata from header");
  console.log(companyData);
  return (
    <div className="flex flex-col gap-10 py-10">
      {/* cover image */}
      <div className="h-[50vh] bg-white w-full">
        <img
          src={companyData?.generalInfo?.coverImage}
          className="w-full h-full object-cover"
        />
      </div>
      {/* company info */}
      <div className="max-w-[1440px] w-full h-[300px] mx-auto flex gap-4 ">
        <div className="w-[75%] bg-slate-200 rounded-xl p-6 flex gap-6 items-start shadow-lg">
          <div className="  w-[25%] h-full p-4 bg-white rounded-xl">
            <img
              src={companyData?.generalInfo?.logo}
              className="rounded-lg w-full "
            />
          </div>
          <div className="w-[75%] flex flex-col gap-4">
            <h1 className="font-bold text-xl">{companyData?.companyTitle}</h1>
            <div className="w-full bg-white py-4 px-20 rounded-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptate necessitatibus sit aut ullam quas nihil molestias
              tenetur a nostrum non sapiente voluptatibus, cupiditate autem iste
              unde voluptatem molestiae accusamus?
            </div>
            <div className="flex gap-2">
              <div className="bg-green-400 px-4 py-2 rounded-3xl text-white font-semibold">
                {companyData?.generalInfo?.industry}
              </div>
              <div className="bg-red-400 px-4 py-2 rounded-3xl text-white font-semibold">
                {companyData?.generalInfo?.nationality}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] bg-slate-200 p-8 rounded-xl flex flex-col gap-4 shadow-lg ">
          <div className="flex flex-col gap-4 text-white font-semibold">
            <button className="rounded-3xl w-full bg-orange-400 py-2 ">
              asdf
            </button>
            <button className="rounded-3xl w-full bg-orange-400 py-2 ">
              asdf
            </button>
            <button className="rounded-3xl w-full bg-orange-400 py-2">
              asdf
            </button>
            {/* <button className="rounded-2xl w-full"></button> */}
          </div>
          <div className="border-t-2 border-white py-4">
            <button className="rounded-3xl w-full bg-orange-400 py-2 text-white font-semibold">
              asdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
