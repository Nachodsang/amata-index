import Image from "next/image";
import Filter from "../Filter/Filter";
import "./Header.css";

export default function Header() {
  return (
    <div className="relative  bg-no-repeat bg-cover header">
      <div className=" w-full ">
        <div className="m-auto max-w-[1270px]  py-20 ">
          <div className="flex flex-col gap-4 items-start">
            <div className="px-6 py-4 bg-orange-600 rounded-xl">
              <h1 className="font-bold text-6xl text-white">Factory Index</h1>
            </div>
            <div className="font-bold text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
      <Filter />
    </div>
  );
}
