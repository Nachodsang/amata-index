import { set } from "mongoose";
import { BsCheck2Circle, BsCheckLg } from "react-icons/bs";

export default function Filter({ companyData }: any) {
  const { filters } = companyData;
  const uniqueFilterTypes = Array.from(
    new Set(filters.map((i: any) => i?.filterType))
  );

  return (
    <div className="w-full  " id="service">
      {/* container */}
      <div className="max-w-[1270px] mx-auto py-10 flex-col flex gap-6 px-4">
        <div className=" flex gap-5 items-center">
          <div className="p-4 rounded-full bg-orange-500 text-white">
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
              {filters.map((j: any) => {
                if (j?.filterType === i)
                  return (
                    <span className="text-xs">
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
