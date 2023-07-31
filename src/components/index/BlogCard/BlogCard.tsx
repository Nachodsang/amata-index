"use client";
import { useContext } from "react";
import Image from "next/image";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";

export default function BlogCard({
  item,
  category,
}: {
  item: any;
  category: any;
}) {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { generalInfo, blogTitle, company, updatedAt, seo } = item;
  const localDate = `${new Date(updatedAt)
    .getDate()
    .toString()
    .padStart(2, "0")}/${(new Date(updatedAt).getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${new Date(updatedAt).getFullYear()}`;

  return (
    <div className=" hover:scale-105 transition-all hover:cursor-pointer duration-300 place-content-stretch card max-w-[510px] h-[585px] desktop0:w-[220px] desktop0:h-[384px] desktop2:w-[300px]  tablet2:w-[330px] tablet2:h-[465px] desktop1:w-[255px] desktop1:h-[414px] desktop2:h-[441px] border border-gray-100  bg-white shadow-md flex flex-col justify-around gap-1 p-4">
      <div className="flex gap-4 items-center">
        <img
          style={{ border: `2px solid ${pageSetting?.themeColor}` }}
          className={`w-[50px] h-[50px] object-cover shadow-md border  rounded-full`}
          src={generalInfo?.coverImage}
        />

        <div className="flex flex-col gap-0">
          <div className=" font-medium text-gray-400">{company}</div>
          <div className=" overflow-hidden h-[1rem] text-xs  desktop0:text-xs text-gray-400">
            {generalInfo?.industry}
          </div>
        </div>
      </div>

      {/* <Image
        src={`${generalInfo?.coverImage}`}
        width={500}
        height={300}
        alt="Picture of the author"
        style={{ border: `2px solid ${pageSetting?.themeColor}` }}
        className={`w-[486px] h-[326px] tablet2:w-[300px] tablet2:h-[206px] desktop0:w-[186px] desktop0:h-[125px] desktop2:w-[270px] desktop2:h-[180px] desktop1:w-[231px] desktop1:h-[155px] object-cover  border-2 rounded-xl `}
      /> */}
      <Link
        href={
          generalInfo?.blogUrl
            ? `/factory/blogs/${generalInfo?.blogUrl}`
            : "no link"
        }
      >
        <img
          src={`${generalInfo?.coverImage} `}
          style={{ border: `2px solid ${pageSetting?.themeColor}` }}
          className={`w-[486px] h-[326px] tablet2:w-[300px] tablet2:h-[206px] desktop0:w-[186px] desktop0:h-[125px] desktop2:w-[270px] desktop2:h-[180px] desktop1:w-[231px] desktop1:h-[155px] object-cover  border-2 rounded-xl `}
        />
      </Link>
      <div className="flex flex-col px-1 gap-1 ">
        <div className="flex justify-between">
          <p className="desktop0:text-xs text-gray-400">Factory Index</p>
          <p className="desktop0:text-xs text-gray-400">{localDate}</p>
        </div>
        <h2 className=" overflow-hidden text-lg font-bold text-gray-700">
          {blogTitle}
        </h2>
        <p className="tablet1:h-[110px] h-[100px]   overflow-hidden tablet2:text-xs text-sm  text-gray-400">
          {seo?.description}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <div
          style={{ backgroundColor: `${pageSetting?.themeColor}` }}
          className={`w-[80%] rounded-3xl  h-1 `}
        ></div>
      </div>
    </div>
  );
}
