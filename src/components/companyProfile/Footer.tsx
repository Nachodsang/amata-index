import { FaGlobeAmericas, FaLine, FaFacebook } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
export default function Footer({ companyData }: any) {
  return (
    <div className="py-10 flex flex-col  items-center  mt-10">
      <div className="mx-auto min-w-[800px] flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-4xl font-bold">
            {companyData?.companyTitle}
          </h1>
          <div className="text-center flex items-center">
            <ImLocation2 size={30} className="text-orange-500" />
            <p>{companyData?.contacts?.addressTh}</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 w-full ">
          <div className="px-6 py-2 w-[40%] rounded-3xl bg-blue-700 text-white text-center">
            Call
          </div>
          <div className="px-6 py-2 w-[40%] rounded-3xl bg-blue-700 text-white text-center">
            Email
          </div>
        </div>
        {/* social media and business hours */}
        <div className="flex justify-center gap-4 h-[280px] w-full">
          <div className="w-[50%] rounded-xl border border-slate-200 shadow-lg  overflow-hidden">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Social Media</h1>
            </div>
            <div className="h-[40%]  flex justify-center items-center ">
              <div className="flex justfy-center gap-4 text-orange-500">
                <FaGlobeAmericas size={55} />
                <FaLine size={55} />
                <FaFacebook size={55} />
              </div>
            </div>
            <div className="h-[20%]  py-2 flex border-y border-slate-300 ">
              <div className="w-[50%] flex border-r border-slate-300">
                <p className="m-auto">Blogs(4)</p>
              </div>
              <div className="w-[50%] flex">
                <p className="m-auto">Share</p>
              </div>
            </div>
            <div className="h-[20%] "></div>
          </div>
          <div className="w-[50%] rounded-xl border flex flex-col  border-slate-200 shadow-lg overflow-hidden">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Business Hours</h1>
            </div>
            <div className="px-10 justify-start m-auto flex flex-col gap-1   w-full">
              {companyData?.contacts?.businessHour.map(
                (i: any) =>
                  i?.status && (
                    <div className="flex justify-between ">
                      <span>{i?.day}</span>
                      <span>{i?.time}</span>
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
