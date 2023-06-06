import Ad from "@/app/Ad/Ad";
import CompanyCard from "../CompanyCard/CompanyCard";

export default function core() {
  let companies: number[] = [];
  for (let i = 0; i < 100; i++) {
    companies.push(i);
  }
  return (
    <div className=" h-[1200px]">
      <div className="mx-auto max-w-[1270px]  h-full overflow-hidden rounded-2xl shadow-md   flex ">
        <div className="w-[75%] h-full ">
          <div className="w-full h-20 bg-[#192f48] p-6">
            {/* list title and amount */}
            <h1 className="text-2xl font-bold text-white">Company List</h1>
          </div>

          <div className="w-full h-full bg-[#044ea2] px-4 pb-16 pt-10   flex-col overflow-scroll">
            {companies.map((i) => (
              <CompanyCard />
            ))}
          </div>
        </div>
        <div className="w-[25%] h-full bg-[#044ea2] p-4 ">
          {companies.map((i) => (
            <Ad />
          ))}
        </div>
      </div>
    </div>
  );
}
