"use client";
import { useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import ScrollToTop from "react-scroll-to-top";
import Link from "next/link";

export default function Footer() {
  const { pageSetting }: any = useContext(PageSettingContext);
  return (
    <div
      className="w-full bg-green-200 py-10 text-white px-4"
      style={{ backgroundColor: `${pageSetting?.coreColor}` }}
    >
      <div className="max-w-[1270px] mx-auto flex justify-between items-center flex-col tablet1:flex-row">
        <Link href="/page">
          <p className="font-bold text-xl">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </p>
        </Link>
        <p className=" text-xs">
          Copyright 2023 {process.env.NEXT_PUBLIC_APP_NAME} | All rights
          reserved.
        </p>
        <ScrollToTop smooth={true} top={500} />
      </div>
    </div>
  );
}
