import { FaGlobeAmericas, FaLine, FaFacebook } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
export default function Footer({ companyData }: any) {
  return (
    <div className="mt-10 flex flex-col  items-center  py-10">
      <div className="mx-auto flex w-[800px] flex-col flex-wrap items-center gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-4xl font-bold">
            {companyData?.companyTitle}
          </h1>
          <div className="flex items-center text-center">
            <ImLocation2 size={30} className="text-orange-500" />
            <p>{companyData?.contacts?.addressTh}</p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-4 ">
          <div className="w-[40%] rounded-3xl bg-blue-700 px-6 py-2 text-center text-white">
            Call
          </div>
          <div className="w-[40%] rounded-3xl bg-blue-700 px-6 py-2 text-center text-white">
            Email
          </div>
        </div>
        {/* social media and business hours */}
        <div className="flex h-[280px] w-full justify-center gap-4">
          <div className="w-[50%] overflow-hidden rounded-xl border border-slate-200  shadow-lg">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Social Media</h1>
            </div>
            <div className="flex  h-[40%] items-center justify-center ">
              <div className="justfy-center flex gap-4 text-orange-500">
                <a href={companyData?.contacts?.website}>
                  <FaGlobeAmericas size={55} />
                </a>
                <a href={companyData?.contacts?.line}>
                  <FaLine size={55} />
                </a>
                <a href={companyData?.contacts?.facebook}>
                  <FaFacebook size={55} />
                </a>
              </div>
            </div>
            <div className="flex  h-[20%] border-y border-slate-300 py-2 ">
              <div className="flex w-[50%] border-r border-slate-300">
                <p className="m-auto">Blogs(4)</p>
              </div>
              <div className="flex w-[50%]">
                <p className="m-auto">Share</p>
              </div>
            </div>
            <div className="h-[20%] "></div>
          </div>
          <div className="flex w-[50%] flex-col overflow-hidden rounded-xl  border border-slate-200 shadow-lg">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Business Hours</h1>
            </div>
            <div className="m-auto flex w-full flex-col justify-start gap-1   px-10">
              {companyData?.contacts?.businessHour.map(
                (i: any) =>
                  i?.status && (
                    <div className="flex justify-between ">
                      <span className="font-semibold text-slate-500">
                        {i?.day}
                      </span>
                      <span className=" text-slate-600">{i?.time}</span>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
