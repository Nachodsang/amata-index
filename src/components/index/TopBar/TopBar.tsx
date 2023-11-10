"use client";
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

export default function TopBar() {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { setShow, show, logInState, onLogOut }: any = useContext(LogInContext);

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
        <div className="flex items-center gap-2">
          <GoogleTranslate />
          {logInState?.isLoggedIn ? (
            <div className="dropdown dropdown-hover">
              <MdAccountCircle
                // onClick={() => setShow(!show)}
                className="cursor-pointer hover:scale-105 transition-all text-green-100"
                size={40}
                // style={{ color: `green` }}
              />
              <ul
                tabIndex={0}
                className="bg-slate-100  dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
              >
                <li className="text-[#24785C] bg-slate-200 rounded-xl w-full flex justify-center">
                  <h1 className="w-full font-semibold uppercase">
                    {logInState?.userName} {}
                  </h1>
                </li>
                <li className="text-slate-500">
                  <div className="flex items-center gap-1">
                    <MdFavoriteBorder size={20} />
                    <a>One Stop Service</a>
                  </div>
                </li>
                {logInState?.role == "admin" && (
                  <li className="text-slate-500">
                    <div className="flex items-center gap-1">
                      <AiFillSetting size={20} />
                      <Link className="text-slate-500" href="/webpanel">
                        Webpanel
                      </Link>
                    </div>
                  </li>
                )}
                <li className="text-slate-500 ">
                  <div className="flex items-center gap-1">
                    <MdManageAccounts size={20} />
                    <a>Manage Account</a>
                  </div>
                </li>

                <li className="bg-red-400 rounded-xl text-white">
                  <div className="flex items-center gap-1">
                    <MdLogout size={20} />
                    <button onClick={onLogOut}>SIGN OUT</button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <MdAccountCircle
              onClick={() => setShow(!show)}
              className="cursor-pointer hover:scale-105 transition-all"
              size={40}
              style={{ color: `white` }}
            />
          )}
          {/* <MdAccountCircle
            onClick={() => setShow(!show)}
            className="cursor-pointer hover:scale-105 transition-all"
            size={40}
            style={{ color: `${logInState?.isLoggedIn ? "green" : "white"}` }}
          /> */}
        </div>
        <LinkNext href="/page">
          {/* <h1 className="text-xl font-bold text-white ">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1> */}
          <AmataLogo />
        </LinkNext>
        <div className="flex gap-4 text-white text-xs">
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
        </div>
      </div>
    </div>
  );
}
