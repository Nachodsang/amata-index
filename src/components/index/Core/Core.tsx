"use client";
import { useContext } from "react";
import Ad from "../Ad/Ad";
import CompanyCard from "../CompanyCard/CompanyCard";
// mockdata
import mockData from "../../../../public/mockData/mockData";
import { mock } from "node:test";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { AdContext } from "@/contexts/AdContext";

export default function core({ category }: { category: string }) {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { adsPage }: any = useContext(AdContext);
  const { mockCompanies, mockMachines } = mockData;
  let companies: number[] = [];
  for (let i = 1; i <= 4; i++) {
    companies.push(i);
  }
  return (
    <div className=" h-[1200px]  px-6">
      <div className="mx-auto max-w-[1270px]   h-full overflow-hidden  rounded-2xl shadow-md  relative z-10 flex ">
        <div className=" desktop0:w-[75%] h-full ">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="w-full h-20 bg-[#192f48] p-6"
          >
            {/* list title and amount */}
            <h1 className="text-2xl font-bold text-white">Company List</h1>
          </div>

          <div
            style={{ backgroundColor: `${pageSetting?.coreColor}` }}
            className="w-full h-full bg-[#044ea2] px-4 pb-16 pt-10   flex-col overflow-scroll"
          >
            {category === "factory" &&
              mockCompanies.map((i, index) => {
                return <CompanyCard props={i} key={i.id} category={category} />;
              })}
            {category === "machine" &&
              mockMachines.map((i, index) => {
                return <CompanyCard props={i} key={i.id} category={category} />;
              })}
          </div>
        </div>
        {/* ad */}
        <div
          style={{ backgroundColor: `${pageSetting?.coreColor}` }}
          className=" desktop0:w-[25%]  bg-[#044ea2] p-4 hidden desktop0:flex flex-col gap-4 min-w-[330px]  "
        >
          {adsPage.map((i: any, index: number) => (
            <Ad key={index} image={i?.image} link={i?.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
