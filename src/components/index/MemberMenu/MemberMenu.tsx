"use client";

import { LogInContext } from "@/contexts/LogInContext";
import { useContext } from "react";
export const MemberMenu = ({ member }: any) => {
  const { onLogOut }: any = useContext(LogInContext);

  return (
    <div className="py-20 bg-slate-200/80 relative z-10 mx-auto mb-10 mt-40 rounded-3xl max-w-[1270px] p-6 w-full">
      <div className="flex flex-col gap-10 ">
        <h1 className="w-full text-center text-4xl text-[rgb(36,120,92)]">
          Member
        </h1>
        <div className="w-full flex justify-between items-center text-slate-700 border-b-2 py-6 border-[rgb(36,120,92)]">
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
        <div className=" grid grid-cols-4 gap-4">
          <div
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/contact-book.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className=" rounded-xl py-24 text-center relative"
          >
            <label className="text-white text-xl">
              Maintenance & Emergency
            </label>
          </div>
          <div
            className="bg-white rounded-xl py-24 text-center"
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/qna.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
          >
            <label className="text-white text-xl">Q&A</label>
          </div>
          <div
            className="bg-slate-100 rounded-xl py-24 text-center"
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/webinar.jpeg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
              //   filter: "blur(1px)",
            }}
          >
            <label className="text-white text-xl"> Webinar (Coming Soon)</label>
          </div>
          <div
            className="bg-slate-100 rounded-xl py-24 text-center"
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/chatting.jpg") `,
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
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/coupon.webp") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center"
          >
            <label className="text-white text-xl"> Coupon (Coming Soon)</label>
          </div>
          <div
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/forsale.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center"
          >
            <label className="text-white text-xl"> Land for Sale</label>
          </div>
          <div
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/forrent.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center"
          >
            <label className="text-white text-xl"> Land for Rent</label>
          </div>
          <div
            style={{
              background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/member/keys.jpg") `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              //   filter: "blur(1px)",
            }}
            className="bg-white rounded-xl py-24 text-center"
          >
            <label className="text-white text-xl"> Manage My Account</label>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <button
            onClick={onLogOut}
            className="uppercase bg-red-400 px-6 py-4 rounded-xl text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};
