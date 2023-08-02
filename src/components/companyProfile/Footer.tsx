"use client";
import { FaGlobeAmericas, FaLine, FaFacebook } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import ShareModal from "./ShareModal";
import { useState } from "react";
import { usePathname } from "next/navigation";
import absoluteUrl from "next-absolute-url";

export default function Footer({ companyData, blogList }: any) {
  const { origin } = absoluteUrl();
  const pathname = usePathname();
  const fullUrl = `${origin}${pathname}`;
  const [shareState, setShareState] = useState(false);
  // blog list with only this company review
  const sameCompanyBlogs = blogList?.filter(
    (i: any) => i?.company === companyData?.companyTitle
  );
  return (
    <div className=" flex flex-col  items-center pb-40">
      <div className="mx-auto flex   tablet2:w-[770px] w-full flex-col flex-wrap items-center px-4 gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-4xl font-bold">
            {companyData?.companyTitle}
          </h1>
          <div className="flex items-center text-center">
            <ImLocation2 size={30} className="text-orange-500" />
            <p>{companyData?.contacts?.addressTh}</p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-4 ">
          <a
            href={`tel:${companyData?.contacts?.tel}`}
            className="w-[40%] rounded-3xl bg-blue-700 px-6 py-2 text-center text-white"
          >
            Call
          </a>

          <a
            href={`mailto:${companyData?.contacts?.email}`}
            className="w-[40%] rounded-3xl bg-blue-700 px-6 py-2 text-center text-white"
          >
            Email
          </a>
        </div>
        {/* social media and business hours */}
        <div className="flex tablet2:h-[280px] w-full justify-center tablet2:flex-row flex-col  gap-4">
          <div className="w-full tablet2:w-[50%] overflow-hidden rounded-xl border border-slate-200  shadow-lg">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Social Media</h1>
            </div>
            <div className="flex  h-[40%] items-center justify-center py-4 ">
              <div className="justfy-center flex gap-4 ">
                <a
                  href={companyData?.contacts?.website || null}
                  className={`${
                    companyData?.contacts?.website
                      ? "text-orange-400"
                      : "text-slate-400"
                  }`}
                >
                  <FaGlobeAmericas size={55} />
                </a>
                <a
                  href={companyData?.contacts?.line || null}
                  className={`${
                    companyData?.contacts?.line
                      ? "text-orange-400"
                      : "text-slate-400"
                  }`}
                >
                  <FaLine size={55} />
                </a>
                <a
                  href={companyData?.contacts?.facebook || null}
                  className={`${
                    companyData?.contacts?.facebook
                      ? "text-orange-400"
                      : "text-slate-400"
                  }`}
                >
                  <FaFacebook size={55} />
                </a>
              </div>
            </div>
            <div className="flex  h-[20%] border-y border-slate-300 py-2 ">
              <div className="flex w-[50%] border-r border-slate-300">
                <p
                  className={`m-auto hover:cursor-pointer ${
                    sameCompanyBlogs?.length > 0
                      ? "font-semibold"
                      : "font-normal text-slate-500"
                  }`}
                >
                  Blogs({sameCompanyBlogs?.length})
                </p>
              </div>
              <div
                className="flex w-[50%] "
                onClick={() => setShareState(!shareState)}
              >
                <p className="m-auto hover:cursor-pointer ">Share</p>
              </div>
            </div>
            <div className="h-[20%] "></div>
          </div>
          <div className="flex w-full tablet2:w-[50%] flex-col overflow-hidden rounded-xl  border border-slate-200 shadow-lg">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Business Hours</h1>
            </div>
            <div className="m-auto flex w-full flex-col justify-start gap-1 py-4  px-10">
              {companyData?.contacts?.businessHour.map(
                (i: any, index: any) =>
                  i?.status && (
                    <div
                      key={index}
                      className="flex justify-between key={index} "
                    >
                      <span className="font-semibold text-slate-500">
                        {i?.day}
                      </span>
                      <span className=" text-slate-600">{i?.time}</span>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <ShareModal show={shareState} setShow={setShareState} link={fullUrl} />
    </div>
  );
}
