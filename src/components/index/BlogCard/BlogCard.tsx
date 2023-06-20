"use client";
import { useContext } from "react";
import Image from "next/image";
import { PageSettingContext } from "@/contexts/PageSettingContext";

export default function BlogCard({ category }: { category: string }) {
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div className=" hover:scale-105 transition-all hover:cursor-pointer duration-300 place-content-stretch card max-w-[510px] h-[585px] desktop0:w-[220px] desktop0:h-[384px] desktop2:w-[300px]  tablet2:w-[330px] tablet2:h-[465px] desktop1:w-[255px] desktop1:h-[414px] desktop2:h-[441px] border border-gray-100  bg-white shadow-md flex flex-col justify-around gap-1 p-4">
      <div className="flex gap-4 items-center">
        <div>
          <img
            style={{ border: `2px solid ${pageSetting?.themeColor}` }}
            className={`w-[50px] h-[50px] object-cover shadow-md border  rounded-full`}
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className=" font-medium text-gray-400">Company name</div>
          <div className=" overflow-hidden  desktop0:text-sm text-gray-400">
            Lorem ipsum dolor
          </div>
        </div>
      </div>

      <Image
        src="https://images.wsj.net/im-759149/?width=1278&size=1"
        width={500}
        height={300}
        alt="Picture of the author"
        style={{ border: `2px solid ${pageSetting?.themeColor}` }}
        className={`w-[486px] h-[326px] tablet2:w-[300px] tablet2:h-[206px] desktop0:w-[186px] desktop0:h-[125px] desktop2:w-[270px] desktop2:h-[180px] desktop1:w-[231px] desktop1:h-[155px] object-cover  border-2 rounded-xl `}
      />

      <div className="flex flex-col px-1 gap-1">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">date</p>
          <p className="text-sm text-gray-400">view</p>
        </div>
        <h2 className=" overflow-hidden text-lg font-bold text-gray-700">
          Lorem ipsum dolor sit.
        </h2>
        <p className=" overflow-hidden desktop0:text-sm text-base font-medium text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sit!
        </p>
      </div>
      <div className="flex justify-center">
        <div
          style={{ backgroundColor: `${pageSetting?.themeColor}` }}
          className={`w-[80%] rounded-3xl  h-1 ${category}-background`}
        ></div>
      </div>
    </div>
  );
}
