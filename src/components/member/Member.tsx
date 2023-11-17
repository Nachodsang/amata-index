"use client";

import { LogInContext } from "@/contexts/LogInContext";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { MemberMenu } from "../index/MemberMenu/MemberMenu";
import ScrollToTop from "../index/ScrollToTop/ScrollToTop";
export default function Member({ _id }: any) {
  const [redirectState, setRedirectState] = useState(false);
  const { pageSetting }: any = useContext(PageSettingContext);
  const { logInState }: any = useContext(LogInContext);
  const router = useRouter();
  useEffect(() => {
    redirectState && logInState?._id !== _id && router.push("/page");
  }, [redirectState]);
  useEffect(() => {
    setTimeout(() => {
      setRedirectState(true);
    }, 5000);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div
        className="w-full h-[100vh] fixed top-0 left-0 z-0 mt-10 mb-[-4px] mx-[-4px]"
        style={{
          background: ` linear-gradient(rgba(36, 120, 92, 0.3), rgba(36, 120, 92, 0.3)), url(${pageSetting?.coverImage}) `,
          // background: ` linear-gradient(rgba(256, 256, 256, 0.2), rgba(256, 256, 256, 0.2)), url(${pageSetting?.coverImage}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "blur(4px)",
        }}
      ></div>
      {logInState?._id !== _id ? (
        <div className="flex relative z-[10] flex-col h-[100vh]">
          <div className="m-auto">
            {/* <h1 className=" font-bold text-4xl text-white">Page Not Found</h1>
            <span className="text-center text-white">
              Redirecting to our home page
            </span> */}
            <span className="loading loading-spinner text-success w-[100px]"></span>
          </div>
        </div>
      ) : (
        <MemberMenu member={logInState} />
      )}
    </>
  );
}
