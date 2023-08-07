"use client";
import { useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";

export default function Footer() {
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div
      className="w-full bg-green-200 py-10 text-white"
      style={{ backgroundColor: `${pageSetting?.coreColor}` }}
    >
      <div className="max-w-[1270px] mx-auto flex justify-between items-center">
        <p className="font-bold text-xl">{process.env.NEXT_PUBLIC_APP_NAME}</p>
        <p className=" text-xs">
          Copyright 2023 {process.env.NEXT_PUBLIC_APP_NAME} | All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
