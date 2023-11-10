"use client";
// import { Sidenav } from "tw-elements";
import { useState, useEffect, useContext } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
// initTE({ Sidenav });
import { BsImages, BsFilter } from "react-icons/bs";
import { RiPagesLine, RiAdvertisementLine } from "react-icons/ri";
import { ImBlogger } from "react-icons/im";
import { LogInContext } from "@/contexts/LogInContext";

import { TfiAnnouncement } from "react-icons/tfi";
import Link from "next/link";

import dynamic from "next/dynamic";
import LogInWebpanel from "../LogInWebpanel/LogInWebpanel";
const test: any = dynamic(
  () => import("@/components/twElementCom/twElementCom"),
  {
    ssr: false,
  }
);

export default function SideNav({ _children }: any) {
  const [menuState, setMenuState] = useState("");
  const path = usePathname();

  const { logInState, onLogOut }: any = useContext(LogInContext);
  // if (logInState?.role !== "admin") {
  //   redirect("/page");
  // }
  useEffect(() => {
    setMenuState(path);
  }, [path]);

  return (
    <div className="">
      {logInState?.role === "admin" && logInState?.isLoggedIn ? (
        <div>
          <div className="flex justify-center bg-slate-100 py-4">
            <div className="ml-56 w-full  translate-x-[-100px] text-center text-2xl font-bold text-white">
              Admin: {logInState?.firstName} {logInState?.lastName}
            </div>
            <div className="d-flex hidden  justify-end px-5 ">
              <button
                id="push"
                className="mr-4 inline-block rounded border-2 border-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                Push
              </button>
              <button
                id="over"
                className="inline-block rounded border-2 border-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                Over
              </button>
            </div>
          </div>

          <nav
            id="sidenav-2"
            className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white py-10 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-mode="side"
            data-te-sidenav-content="#content"
          >
            <Link
              href="/webpanel"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <span className="w-full text-xl  font-bold  text-slate-400 underline-offset-3 underline">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </span>
            </Link>
            <ul
              className="relative m-0 list-none px-[0.2rem]"
              data-te-sidenav-menu-ref
            >
              <li className="relative">
                <Link
                  href="/webpanel/header-setting"
                  className={`${
                    menuState === "/webpanel/header-setting" &&
                    "font-bold bg-[#570CF8] text-white"
                  } flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-slate-400 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <BsImages />
                  </span>
                  <span>Page Setting</span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/webpanel/filter-setting"
                  className={`${
                    menuState.includes("filter") &&
                    "font-bold bg-[#570CF8] text-white"
                  } flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-slate-400 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <BsFilter />
                  </span>
                  <span>Filter Setting</span>
                </Link>
              </li>
              <li className="relative ">
                <Link
                  href="/webpanel/company-profile"
                  className={` ${
                    menuState.includes("company") &&
                    "font-bold bg-[#570CF8] text-white"
                  } flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-slate-400 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <RiPagesLine />
                  </span>
                  <span className="capitalize">
                    {process.env.NEXT_PUBLIC_APP_KEY_WORD} List
                  </span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/webpanel/blogs"
                  className={`${
                    menuState.includes("blog") &&
                    "font-bold bg-[#570CF8] text-white"
                  } flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-slate-400 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <ImBlogger />
                  </span>
                  <span>Blog</span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/webpanel/banner"
                  className={`${
                    menuState.includes("banner") &&
                    "font-bold bg-[#570CF8] text-white"
                  } flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-slate-400 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <TfiAnnouncement />
                  </span>
                  <span>Banner</span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/webpanel/ads"
                  className={`${
                    (menuState.includes("ads") ||
                      menuState.includes("new-ad")) &&
                    "font-bold  bg-[#570CF8] text-white"
                  } flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-slate-400 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <RiAdvertisementLine />
                  </span>
                  <span>Advertisement</span>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={onLogOut}
                  className={`bg-red-400 w-full justify-center text-white flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem]  outline-none transition duration-300 ease-linear hover:bg-red-600 hover:text-white hover:outline-none   focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300  `}
                  data-te-sidenav-link-ref
                >
                  {/* <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 ">
                    <RiAdvertisementLine />
                  </span> */}
                  <span>SIGN OUT</span>
                </button>
              </li>
            </ul>
          </nav>
          {/* Menu button */}
          <div className="px-5  text-center" id="content ">
            <div className="flex justify-end">
              <button
                className="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 fixed right-10 top-10 inline-block rounded bg-primary px-6  py-4 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                data-te-sidenav-toggle-ref
                data-te-target="#sidenav-2"
                aria-controls="#sidenav-2"
                aria-haspopup="true"
              >
                <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                  Menu
                </span>
              </button>
            </div>

            {_children}
          </div>
        </div>
      ) : (
        <LogInWebpanel />
      )}
    </div>
  );
}
