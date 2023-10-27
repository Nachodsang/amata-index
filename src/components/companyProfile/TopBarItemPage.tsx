"use client";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import { AmataLogo } from "../index/AmataLogo";

export default function TopBarItemPage() {
  const { pageSetting }: any = useContext(PageSettingContext);
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
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
          {/* <h1 className="text-xl font-bold text-white ">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1> */}
          <AmataLogo />
        </LinkNext>
        <div className="flex gap-4 text-white text-xs">
          <Link to="about" smooth={true} duration={500} offset={-75}>
            <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer">
              about
            </span>
          </Link>
          <Link to="gallery" smooth={true} duration={500} offset={-75}>
            <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer">
              gallery
            </span>
          </Link>
          <Link to="service" smooth={true} duration={750} offset={-75}>
            <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer">
              service
            </span>
          </Link>
          {/* <Link to="blog" smooth={true} duration={1000} offset={-75}>
            <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer">
              blog
            </span>
          </Link> */}

          <Link to="contact" smooth={true} duration={1000} offset={-75}>
            <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer">
              contact
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
