"use client";
import { useParams } from "next/navigation";
// import Image from "next/image";
import Filter from "../Filter/Filter";
import "./Header.css";

export default function Header({ category }: { category: string }) {
  return (
    <div className="w-full relative ">
      <div
        className={`absolute z-0 top-0 bg-no-repeat  bg-cover header-${category} h-[800px]  w-full `}
      ></div>
      <div className=" px-6 ">
        <div className=" w-full  ">
          <div className="m-auto max-w-[1270px]  py-20  ">
            <div className="flex flex-col gap-4 items-start ">
              <div className={` z-20`}>
                <h1
                  className={`font-bold text-6xl px-6 py-4  rounded-xl ${category}-background text-white capitalize`}
                >
                  {category} Index
                </h1>
              </div>
              <div className=" font-semibold text-3xl text-white z-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
        <Filter category={category} />
      </div>
    </div>
  );
}
