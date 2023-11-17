"use client";
import Link from "next/link";
import { AiFillSetting } from "react-icons/ai";
import {
  MdAccountCircle,
  MdFavoriteBorder,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { LogInContext } from "@/contexts/LogInContext";
import { useContext } from "react";
import { logIn } from "@/service/accountService";
export const AccountDropDown = ({ logInState }: any) => {
  const { show, setShow, onLogOut }: any = useContext(LogInContext);
  return (
    <>
      {logInState?.isLoggedIn ? (
        <div className="dropdown  desktop0:dropdown-hover">
          <MdAccountCircle
            tabIndex={0}
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
              <Link
                scroll={true}
                href={`/page/member/${logInState?._id}`}
                className="flex items-center gap-1"
              >
                <MdFavoriteBorder size={20} />
                <span>Member</span>
              </Link>
            </li>
            {logInState?.role == "admin" && (
              <li className="text-slate-500">
                <Link href="/webpanel" className="flex items-center gap-1">
                  <AiFillSetting size={20} />
                  <span className="text-slate-500">Webpanel</span>
                </Link>
              </li>
            )}
            <li className="text-slate-500 ">
              <div className="flex items-center gap-1">
                <MdManageAccounts size={20} />
                <a>Manage Account</a>
              </div>
            </li>

            <li
              onClick={() => onLogOut(false)}
              className="bg-red-400 rounded-xl text-white"
            >
              <div className="flex items-center gap-1">
                <MdLogout size={20} />
                <button>SIGN OUT</button>
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
    </>
  );
};
