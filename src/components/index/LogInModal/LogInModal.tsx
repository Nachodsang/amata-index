"use client";
import { SlLogin } from "react-icons/sl";
import { LogInContext } from "@/contexts/LogInContext";
import { useContext, useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { AiFillUnlock, AiOutlineUser } from "react-icons/ai";
export default function LogInModal({ link }: any) {
  const [registerModal, setRegisterModal] = useState(false);
  const {
    logInState,
    onLogIn,
    show,
    setShow,
    logInField,
    setLogInField,
    setRegisterField,
    registerField,
  }: any = useContext(LogInContext);

  // useEffect(() => {
  //   setLogInField({ userName: "", password: "" });
  // }, [registerModal]);
  const onSwitchBox = () => {
    setLogInField({ userName: "", password: "" });
    setRegisterField({ code: "" });
    setRegisterModal(!registerModal);
  };

  useEffect(() => {
    setRegisterModal(false);
  }, [show]);
  return (
    <div
      //   onClick={() => setShow(!show)}
      className={`${
        !show ? "bottom-[200%]" : "bottom-0"
      } w-full h-[100vh] bg-black/60 fixed  left-0 transition-all duration-700 z-[50] `}
    >
      <div className="desktop1:w-[40%] w-[90%] px-4 h-[300px] absolute top-[30%] left-[50%] translate-x-[-50%]  rounded-xl  bg-slate-100 z-[20]">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <div
            className="text-slate-500 absolute top-4 right-4 hover:cursor-pointer "
            onClick={() => setShow(!show)}
          >
            <RxCross2 size={30} />
          </div>
          <div className="text-[rgb(36,120,92)] flex items-center gap-2">
            <SlLogin size={30} />
            <h1 className="text-xl uppercase ">
              {!registerModal
                ? "Please Sign-In for the full Experience!"
                : "Welcome to Amata Index Member Panel"}
            </h1>
          </div>
          {!registerModal ? (
            <div className=" flex flex-col items-center   gap-2">
              <div className="flex justify-center  items-center  desktop0:gap-2 gap-1 tablet1:gap-4 ">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <div className="label-text flex items-center">
                      <AiOutlineUser size={25} />
                      <span>Username</span>
                    </div>
                    {/* <span className="label-text-alt">Top Right label</span> */}
                  </label>
                  <input
                    onChange={(e: any) =>
                      setLogInField({ ...logInField, userName: e.target.value })
                    }
                    value={logInField?.userName}
                    type="text"
                    placeholder=". . . . . . "
                    className={`${
                      logInState?.logInIssue == "userNotFound" &&
                      "border-red-400"
                    } input input-bordered w-full max-w-xs bg-slate-200 text-slate-700`}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <div className="label-text flex items-center">
                      <AiFillUnlock size={25} />
                      <span>Password</span>
                    </div>
                    {/* <span className="label-text-alt">Top Right label</span> */}
                  </label>
                  <input
                    onKeyDown={(e) => e.key === "Enter" && onLogIn()}
                    onChange={(e: any) =>
                      setLogInField({ ...logInField, password: e.target.value })
                    }
                    value={logInField?.password}
                    type="password"
                    placeholder=". . . . . . "
                    className={`${
                      logInState?.logInIssue == "incorrectPassword" &&
                      "border-red-400"
                    } input input-bordered w-full max-w-xs bg-slate-200 text-slate-700`}
                  />
                </div>
              </div>
              <div className="flex justify-between w-full">
                <button
                  onClick={onSwitchBox}
                  className="text-slate-500 text-xs hover:text-green-400"
                >
                  Click Here to Register
                </button>
                <Link
                  className="text-slate-500 text-xs hover:text-red-400"
                  href={"#"}
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                onClick={onLogIn}
                className={`bg-[rgb(36,120,92)] hover:bg-green-600 w-full py-2   transition-all rounded-xl text-white`}
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className=" flex flex-col items-center   gap-2">
              <div className="flex justify-center  items-center w-full  desktop0:gap-2 gap-1 tablet1:gap-4 ">
                {/* <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <div className="label-text flex items-center">
                      <AiOutlineUser size={25} />
                      <span>Username</span>
                    </div>
                  
                  </label>
                  <input
                    onChange={(e: any) =>
                      setLogInField({ ...logInField, userName: e.target.value })
                    }
                    value={logInField?.userName}
                    type="text"
                    placeholder=". . . . . . "
                    className={`${
                      logInState?.logInIssue == "userNotFound" &&
                      "border-red-400"
                    } input input-bordered w-full max-w-xs bg-slate-200 text-slate-700`}
                  />
                </div> */}
                <div className=" w-full ">
                  <label className="label">
                    <div className="label-text flex items-center">
                      <AiFillUnlock size={25} />
                      <span>Registration Code</span>
                    </div>
                    {/* <span className="label-text-alt">Top Right label</span> */}
                  </label>
                  <input
                    onChange={(e: any) =>
                      setRegisterField({
                        ...registerField,
                        code: e.target.value,
                      })
                    }
                    value={registerField?.code}
                    type="text"
                    placeholder=". . . . . . "
                    className={`
                  
                    input input-bordered w-full  bg-slate-200 text-slate-700`}
                  />
                </div>
              </div>
              <div className="flex justify-between w-full gap-20">
                <button
                  onClick={onSwitchBox}
                  className="text-slate-500 text-xs hover:text-[rgb(36,120,92)]"
                >
                  Got an account? Click here to sign in!
                </button>
                <button className="text-slate-500 text-xs hover:text-[rgb(36,120,92)]">
                  Request for registration code
                </button>
              </div>

              <button
                // onClick={onLogIn}
                className={`bg-[rgb(36,120,92)] hover:bg-green-600 w-full py-2   transition-all rounded-xl text-white`}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
