"use client";
import { useContext } from "react";
import { FaGlobe, FaFacebookSquare, FaLine } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";

export default function CompanyCard({
  props,
  category,
  companyTitle,
  logo,
  nationality,
  location,
  details,
  website,
  line,
  facebook,
  gallery,
  profileUrl,
  industry,
}: any) {
  const { pageSetting }: any = useContext(PageSettingContext);
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;

  return (
    <div className="w-full   bg-white rounded-xl mb-4 relative py-4">
      <div className="flex flex-col w-full ">
        <div className="flex p-4 w-full  h-full ">
          {/* thubnail & button */}
          <div className="desktop2:w-[20%] desktop1:w-[17%] destop0:w-[15%] flex flex-col align-start gap-4">
            <div className="w-[150px] h-[150px] p-1 border-1 border shadow-md rounded-md">
              <img
                src={logo}
                className="w-full h-full object-cover rounded-md "
              />
            </div>
            <div className="flex items-center gap-1 max-w-[150px]">
              <span className="text-xs text-gray-400 uppercase">
                {industry}
              </span>
            </div>

            <div className="desktop0:flex hidden justify-between w-[150px] gap-4">
              <div>
                {website ? (
                  <a href={website}>
                    {" "}
                    <FaGlobe size={28} fill="#17A2B8" />
                  </a>
                ) : (
                  <a>
                    {" "}
                    <FaGlobe size={28} fill="#E5E7EB" />
                  </a>
                )}
              </div>
              <div>
                {facebook ? (
                  <a href={facebook}>
                    <FaFacebookSquare size={30} fill="#1B73E8" />
                  </a>
                ) : (
                  <a>
                    <FaFacebookSquare size={30} fill="#E5E7EB" />
                  </a>
                )}
              </div>
              <div>
                {line ? (
                  <a href={line}>
                    <FaLine size={30} fill="#33C152" />
                  </a>
                ) : (
                  <a>
                    <FaLine size={30} fill="#E5E7EB" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* details */}
          <div className="desktop0:w-[55%] flex flex-col gap-4 py-1 pl-10 pr-6">
            <h1 className="font-semibold text-xl text-gray-700">
              {companyTitle}
            </h1>
            <div className="text-blue-500 flex gap-1">
              <MdLocationPin size={20} />
              <span>{location}</span>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                WebkitLineClamp: "3",
                overflow: "hidden",
                display: "-webkit-box",
                lineHeight: "25px",
                WebkitBoxOrient: "vertical",
              }}
              className=" overflow-hidden font-normal text-gray-500"
            >
              {details}
            </p>
          </div>
          {/* more images */}
          <div className="w-[25%]  hidden desktop0:flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-full flex flex-wrap desktop2:gap-3 desktop0:gap-2  ">
              {gallery?.slice(0, 4).map((i: any, index: any) => (
                <div
                  key={index}
                  className="desktop1:h-[80px] desktop1:w-[47%] desktop2:h-[100px] desktop2:w-[100px]  w-full h-[100px] rounded-md shadow-md overflow-hidden"
                >
                  <img src={i} className="w-full h-full object-cover " />
                </div>
              ))}
            </div>
            <Link
              href={profileUrl ? `page/items/${profileUrl}` : "no link"}
              className="w-full"
            >
              <button
                style={{ backgroundColor: `${pageSetting?.themeColor}` }}
                className={` px-4 py-2 w-full rounded-2xl text-white `}
              >
                Details
              </button>
            </Link>
          </div>
        </div>
        <div className="px-4">
          <Link href={profileUrl ? `page/items/${profileUrl}` : "no link"}>
            <button
              style={{ backgroundColor: `${pageSetting?.themeColor}` }}
              className={` desktop0:hidden px-4 py-2 w-full rounded-2xl text-white`}
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
