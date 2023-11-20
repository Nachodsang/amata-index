"use client";
import { usePathname } from "next/navigation";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Link as Lsc } from "react-scroll";
import LinkNext from "next/link";
import { AmataLogo } from "../AmataLogo";
import GoogleTranslate from "../GooogleTranslate/GoogleTranslate";
import {
  MdAccountCircle,
  MdFavoriteBorder,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { GoogleTranslate2 } from "../GoogleTranslate2/GoogleTranslate2";
import { LogInContext } from "@/contexts/LogInContext";
import { AiFillSetting } from "react-icons/ai";
import { AccountDropDown } from "../AccountDropDown/AccountDropDown";

export default function TopBar() {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { setShow, show, logInState, onLogOut }: any = useContext(LogInContext);

  const [isShrink, setIsShrink] = useState(false);
  const pathName = usePathname();
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
      <div className="max-w-[1270px] mx-auto flex flex-row-reverse tablet1:flex-row justify-between items-center">
        <div className="flex items-center tablet1:gap-2 gap-[2px] flex-row-reverse tablet1:flex-row">
          <GoogleTranslate />
          <AccountDropDown logInState={logInState} />
        </div>
        <LinkNext href="/page" className="tablet2:translate-x-[20%]">
          <AmataLogo />
        </LinkNext>
        {!pathName.includes("member") && (
          <div className="  hidden tablet2:flex  gap-4 text-white text-xs">
            <Lsc to="search" smooth={true} duration={500} offset={-150}>
              <span className="hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
                SEARCH
              </span>
            </Lsc>
            <Lsc to="list" smooth={true} duration={750} offset={-80}>
              <span className="uppercase hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
                {process.env.NEXT_PUBLIC_APP_KEY_WORD} List
              </span>
            </Lsc>
            <Lsc to="blog" smooth={true} duration={1000} offset={-40}>
              <span className="hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
                BLOG
              </span>
            </Lsc>
            {logInState?.isLoggedIn ? (
              <LinkNext href={`/page/member/${logInState?._id}`} scroll={true}>
                <span className="hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
                  MEMBER
                </span>
              </LinkNext>
            ) : (
              <button onClick={() => setShow(!show)}>
                <span className="hover:underline underline-offset-4 hover:cursor-pointer transition-all duration-500">
                  MEMBER
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
