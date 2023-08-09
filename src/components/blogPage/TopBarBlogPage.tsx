"use client";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";

export default function TopBarBlogPage({ blogData }: any) {
  const { pageSetting }: any = useContext(PageSettingContext);

  const [isShrink, setIsShrink] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsShrink(true) : setIsShrink(false);
    });
  });
  return (
    <div
      style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
      className={`w-full  ${
        isShrink ? "py-2" : "py-4"
      } fixed top-0 z-50 transition-all duration-500 px-4 shadow-md`}
    >
      <div className="max-w-[1270px] mx-auto flex justify-between items-center">
        <LinkNext href="/page">
          <h1 className="text-xl font-bold text-white ">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
        </LinkNext>
        <div className="flex gap-4 text-white text-lg font-semibold">
          <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer">
            {blogData?.blogTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
