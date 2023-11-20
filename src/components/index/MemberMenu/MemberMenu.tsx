"use client";

import Contact from "@/components/member/Contact";
import { LogInContext } from "@/contexts/LogInContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaUsers } from "react-icons/fa";
export const MemberMenu = ({ member }: any) => {
  const { onLogOut }: any = useContext(LogInContext);

  const [showContact, setShowContact] = useState(false);

  return (
    <div className="py-14 bg-slate-200/80 relative z-10 mx-auto mb-10 mt-24 rounded-3xl max-w-[1270px] p-6 w-full">
      <div className="flex flex-col gap-6 text-[rgb(36,120,92)]">
        <div className="flex items-center w-full gap-2">
          <FaUsers size={50} />
          <h1 className="w-full text-4xl ">Member</h1>
        </div>
        <div className="w-full flex flex-col tablet1:flex-row justify-between items-center text-slate-700 border-b-2 py-6 border-[rgb(36,120,92)]">
          <h1>
            Welcome Back!{" "}
            <span className="text-[rgb(36,120,92)] text-xl">
              {member?.firstName} {member?.lastName}
            </span>{" "}
            from{" "}
            <span className="text-[rgb(36,120,92)] text-xl">
              {member?.companyName}
            </span>{" "}
          </h1>
          <h1>
            Location:{" "}
            <span className="text-[rgb(36,120,92)] text-xl">
              {member?.location || "Chonburi"}
            </span>
          </h1>
        </div>
        <div className=" grid desktop0:grid-cols-4 grid-cols-1 tablet1:grid-cols-2 gap-2">
          <div
            onClick={() => setShowContact(!showContact)}
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/contact-book.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className=" rounded-xl py-24 text-center relative hover:cursor-pointer hover:scale-[101%] transition-all"
          >
            <label className="text-white text-xl">
              Maintenance & Emergency
            </label>
          </div>
          <div
            className="bg-white rounded-xl py-24 text-center hover:cursor-pointer hover:scale-[101%] transition-all"
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/qna.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
          >
            <label className="text-white text-xl">Q&A</label>
          </div>
          <div
            className="bg-slate-100 rounded-xl py-24 text-center   transition-all"
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/webinar.jpeg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
              //   filter: "blur(1px)",
            }}
          >
            <label className="text-white text-xl"> Webinar (Coming Soon)</label>
          </div>
          <div
            className="bg-slate-100 rounded-xl py-24 text-center  transition-all"
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8),rgba(256, 256, 256, 0.3)), url("/member/chatting.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
          >
            {" "}
            <label className="text-white text-xl">
              {" "}
              Chatting (Coming Soon)
            </label>
          </div>
          <div
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/coupon.webp") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center  transition-all"
          >
            <label className="text-white text-xl"> Coupon (Coming Soon)</label>
          </div>
          <Link
            href={"/page/blogs-category/property-for-sale"}
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/forsale.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center hover:cursor-pointer hover:scale-[101%] transition-all"
          >
            <label className="text-white text-xl"> Land for Sale</label>
          </Link>
          <Link
            href={"/page/blogs-category/property-for-rent"}
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/forrent.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center hover:cursor-pointer hover:scale-[101%] transition-all"
          >
            <label className="text-white text-xl"> Land for Rent</label>
          </Link>
          <div
            style={{
              background: ` linear-gradient(rgba(36, 120, 92, 0.8), rgba(256, 256, 256, 0.3)), url("/member/keys.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center hover:cursor-pointer hover:scale-[101%] transition-all"
          >
            <label className="text-white text-xl"> Manage My Account</label>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <button
            onClick={() => onLogOut(false)}
            className="uppercase bg-red-400 px-6 py-4 rounded-xl text-white"
          >
            Sign out
          </button>
        </div>
      </div>
      <Contact show={showContact} setShow={setShowContact} />
    </div>
  );
};
