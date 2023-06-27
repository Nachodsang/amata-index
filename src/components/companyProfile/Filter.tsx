import { BsCheck2Circle, BsCheckLg } from "react-icons/bs";

export default function Filter() {
  return (
    <div className="w-full ">
      {/* container */}
      <div className="max-w-[1440px] mx-auto py-10 flex-col flex gap-6">
        <div className=" flex gap-5 items-center">
          <div className="p-4 rounded-full bg-orange-500 text-white">
            <BsCheck2Circle size={25} className="" />
          </div>
          <h1 className="font-semibold text-2xl">Services</h1>
        </div>
        <div className="flex flex-col gap-3 items-start ">
          <div className="flex items-center gap-2 text-green-600">
            <BsCheckLg size={25} />
            <p className="text-xl font-semibold ">Service in Thailand</p>
          </div>
          <div className="flex justify-start w-full items-center ">
            <div className="w-[25%] flex items-center  gap-2 text-green-600">
              <BsCheckLg size={25} />
              <span className="text-xl font-semibold">lorem</span>
            </div>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex justify-start items-center  w-full ">
            <div className="w-[25%] flex items-center gap-2 text-green-600">
              <BsCheckLg size={25} />
              <span className="text-xl font-semibold">lorem asdfs</span>
            </div>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
