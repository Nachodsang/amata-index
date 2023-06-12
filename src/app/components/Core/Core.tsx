import Ad from "@/app/components/Ad/Ad";
import CompanyCard from "../CompanyCard/CompanyCard";
// mockdata
import mockData from "../../../../public/mockData/mockData";
import { mock } from "node:test";

export default function core({ category }: { category: string }) {
  const { mockCompanies, mockMachines } = mockData;
  let companies: number[] = [];
  for (let i = 0; i < 100; i++) {
    companies.push(i);
  }
  return (
    <div className=" h-[1200px]  px-6">
      <div className="mx-auto max-w-[1270px]  h-full overflow-hidden  rounded-2xl shadow-md  relative z-10 flex ">
        <div className=" desktop0:w-[75%] h-full ">
          <div className="w-full h-20 bg-[#192f48] p-6">
            {/* list title and amount */}
            <h1 className="text-2xl font-bold text-white">Company List</h1>
          </div>

          <div className="w-full h-full bg-[#044ea2] px-4 pb-16 pt-10   flex-col overflow-scroll">
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
        <div className=" desktop0:w-[25%] h-full bg-[#044ea2] p-4 hidden desktop0:block  ">
          {companies.map((i, index) => (
            <Ad key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
