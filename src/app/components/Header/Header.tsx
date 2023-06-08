"use client";
import { useParams } from "next/navigation";
// import Image from "next/image";
import Filter from "../Filter/Filter";
import "./Header.css";

export default function Header({ category }: { category: string }) {
  return (
    <div className="w-full relative ">
      <div
        className={`absolute -z-10 top-0 bg-no-repeat  bg-cover header-${category} h-[800px]  w-full `}
      ></div>
      <div className="z-10 px-6">
        <div className=" w-full ">
          <div className="m-auto max-w-[1270px]  py-20 ">
            <div className="flex flex-col gap-4 items-start">
              <div className="px-6 py-4 bg-[#FC593B] rounded-xl">
                <h1 className="font-bold text-6xl text-white capitalize">
                  {category} Index
                </h1>
              </div>
              <div className="font-semibold text-3xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
        <Filter />
      </div>
    </div>
  );
}
