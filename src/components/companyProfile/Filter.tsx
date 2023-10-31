"use client";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { set } from "mongoose";
import { useContext } from "react";
import { BsCheck2Circle, BsCheckLg } from "react-icons/bs";
import { FilterContext } from "@/contexts/FilterContext";

export default function Filter({ companyData }: any) {
  const { filters } = companyData;
  const { filtersFromMain }: any = useContext(FilterContext);
  const mergeById = (a1: any, a2: any) =>
    a1.map((itm: any) => ({
      ...a2.find((item: any) => item.filterID === itm._id),
      ...itm,
    }));

  const mergedArr = mergeById(filtersFromMain, filters).filter(
    (i: any) => i?.filterID && i?.active
  );
  const uniqueFilterTypes = Array.from(
    new Set(mergedArr.map((i: any) => i?.filterType))
  );
  const { pageSetting }: any = useContext(PageSettingContext);

  return (
    <div className="w-full  " id="service">
      {/* container */}
      <div className="max-w-[1270px] mx-auto py-10 flex-col flex gap-6 px-4">
        <div className=" flex gap-5 items-center">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="p-4 rounded-full  text-white"
          >
            <BsCheck2Circle size={25} className="" />
          </div>
          <h1 className="font-semibold text-2xl">
            {" "}
            {companyData?.generalInfo?.industry}
          </h1>
        </div>
        <div className="flex flex-col gap-3 items-start ">
          {/* <div className="flex items-center gap-2 text-green-600">
            <BsCheckLg size={25} />
            <p className="text-xl font-semibold ">
              {companyData?.generalInfo?.industry}
            </p>
          </div> */}
          {uniqueFilterTypes.map((i: any, index: any) => (
            <div
              key={index}
              className="flex justify-start w-full desktop0:items-center desktop0:flex-row flex-col items-start "
            >
              <div className="desktop0:w-[25%] flex items-center  gap-2 text-green-600 ">
                <BsCheckLg size={25} />
                <span className="text-lg font-semibold">{i}</span>
              </div>
              {mergedArr.map((j: any) => {
                if (j?.filterType === i)
                  return (
                    <span className="text-xs ">
                      {j?.filterTitle} &nbsp;&nbsp;
                    </span>
                  );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
