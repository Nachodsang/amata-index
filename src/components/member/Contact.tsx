"use client";
import { SlLogin } from "react-icons/sl";
import { LogInContext } from "@/contexts/LogInContext";
import { useContext, useEffect, useState } from "react";
import { RiContactsBookFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { AiFillUnlock, AiOutlineUser } from "react-icons/ai";
import { MdContentPasteSearch } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { contactBook } from "../../../public/assets/nationalities";
import ContactCard from "./ContactCard";

export default function Contact({ show, setShow }: any) {
  const [searchState, setSearchState] = useState("");
  const [list, setList] = useState(contactBook);
  const {
    logInState,
    onLogIn,
    // show,
    // setShow,
    logInField,
    setLogInField,
    setRegisterField,
    registerField,
  }: any = useContext(LogInContext);

  // useEffect(() => {
  //   setLogInField({ userName: "", password: "" });
  // }, [registerModal]);

  useEffect(() => {
    setSearchState("");
  }, [show]);

  useEffect(() => {
    searchState
      ? setList(
          contactBook?.filter(
            (i: any) =>
              i?.nameTh.includes(searchState) ||
              i?.nameEn?.toLowerCase()?.includes(searchState.toLowerCase()) ||
              i?.type?.toLowerCase()?.includes(searchState?.toLowerCase())
          )
        )
      : setList(contactBook);
  }, [searchState]);
  return (
    <div
      //   onClick={() => setShow(!show)}
      className={`${
        !show ? "bottom-[-200%]" : "bottom-0"
      } w-full h-[100vh] bg-black/60 fixed  left-0 transition-all duration-700 z-[50] `}
    >
      <div className="desktop0:w-[40%] w-[80%] px-10 py-10 absolute top-[20%] left-[50%] translate-x-[-50%]  rounded-xl  bg-slate-100 z-[20]">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <div
            className="text-slate-500 absolute top-0 right-0 hover:cursor-pointer hidden tablet1:block"
            onClick={() => setShow(!show)}
          >
            <RxCross2 size={30} />
          </div>
          <div className="text-[rgb(36,120,92)] flex items-center gap-2">
            <RiContactsBookFill size={30} />

            <h1 className="text-xl uppercase ">Maintenance & Emergency</h1>
          </div>

          <div className=" flex flex-col items-center w-full   gap-2">
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
              <div className=" w-full  ">
                <label className="label">
                  <div className="label-text flex items-center">
                    <MdContentPasteSearch size={25} />
                    <span>Search</span>
                  </div>
                </label>
                <input
                  onChange={(e: any) => setSearchState(e.target.value)}
                  value={searchState}
                  type="text"
                  placeholder=". . . . . . "
                  className={`
                  
                    input input-bordered w-full  bg-slate-200 text-slate-700`}
                />
              </div>
            </div>

            {/* <button
              // onClick={onLogIn}
              className={`bg-[rgb(36,120,92)] hover:bg-green-600 w-full py-2   transition-all rounded-xl text-white`}
            >
              Search
            </button> */}
          </div>
          <div className="w-full flex-col item-start ">
            <label className="label">
              <div className="label-text flex gap-1 items-center">
                <FaList size={20} />
                <span>Contact List</span>
              </div>
            </label>
            <div className="w-full h-[300px] overflow-scroll flex flex-col gap-[2px]">
              {list?.map((i: any, index: any) => (
                <ContactCard item={i} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
