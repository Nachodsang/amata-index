"use client";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import { AmataLogo } from "../AmataLogo";

export default function TopBar() {
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
      <div className=" max-w-[1270px] mx-auto flex justify-between items-center">
        <LinkNext href="/page">
          {/* <h1 className="text-xl font-bold text-white ">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1> */}
          <AmataLogo />
        </LinkNext>
        <div className="flex gap-4 text-white text-xs">
          <Link to="search" smooth={true} duration={500} offset={-150}>
            <span className="hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
              SEARCH
            </span>
          </Link>
          <Link to="list" smooth={true} duration={750} offset={-80}>
            <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
              {process.env.NEXT_PUBLIC_APP_KEY_WORD} List
            </span>
          </Link>
          <Link to="blog" smooth={true} duration={1000} offset={-40}>
            <span className="hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
              BLOG
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
