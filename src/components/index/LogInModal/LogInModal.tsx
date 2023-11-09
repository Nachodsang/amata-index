"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import { LogInContext } from "@/contexts/LogInContext";
import { useContext } from "react";

import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
export default function LogInModal({ link }: any) {
  const { show, setShow }: any = useContext(LogInContext);
  return (
    <div
      //   onClick={() => setShow(!show)}
      className={`${
        !show ? "bottom-[100%]" : "bottom-0"
      } w-full h-[100vh] bg-black/60 fixed  left-0 transition-all duration-700 z-[50] `}
    >
      <div className="desktop0:w-[40%] w-[80%] px-4 h-[300px] absolute top-[30%] left-[50%] translate-x-[-50%]  rounded-xl  tablet1:bg-slate-100 z-[20]">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <div
            className="text-slate-500 absolute top-4 right-4 hover:cursor-pointer hidden tablet1:block"
            onClick={() => setShow(!show)}
          >
            <RxCross2 size={30} />
          </div>
          <h1 className="text-xl tablet1:text-slate-500 text-white ">
            Please Log-In for the full Experience!
          </h1>
          <div className=" flex flex-col items-center   gap-2">
            <div className="flex justify-center  items-center  desktop0:gap-2 gap-1 tablet1:gap-4 ">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Username</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </label>
                <input
                  type="text"
                  placeholder=". . . . . . "
                  className="input input-bordered w-full max-w-xs bg-slate-200 text-slate-700"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </label>
                <input
                  type="password"
                  placeholder=". . . . . . "
                  className="input input-bordered w-full max-w-xs bg-slate-200 text-slate-700"
                />
              </div>
            </div>
            <div>
              <Link className="text-slate-500 hover:text-green-600" href={"#"}>
                Forget password
              </Link>
            </div>
            <button className="w-full py-2 bg-[rgb(36,120,92)] hover:bg-green-600 transition-all rounded-xl text-white ">
              Log-In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
