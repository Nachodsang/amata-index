"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";
import { CompanyContext } from "@/contexts/CompanyContext";
import axios from "axios";

export default function BlogCard({
  item,
  category,
  companyList,
}: {
  item: any;
  category: any;
  companyList: any;
}) {
  // const { companyData: cData }: any = useContext(CompanyContext);
  const [companyLogo, setCompanyLogo] = useState("");
  const { pageSetting }: any = useContext(PageSettingContext);
  const { generalInfo, blogTitle, company, updatedAt, seo } = item;
  // getting company image that matches each blog
  // const companyObject = cData?.find((i: any) => i?.companyTitle === company);
  // console.log(cData);

  // const fetchCompany = async () => {
  //   const response = await axios.get(
  //     `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`
  //   );
  //   const blogCompany: any = response?.data?.companySetting?.find(
  //     (i: any) => i?.companyTitle === company
  //   );
  //   setCompanyLogo(blogCompany?.generalInfo?.logo);
  //   return response?.data?.companySetting;
  // };

  const localDate = `${new Date(updatedAt)
    .getDate()
    .toString()
    .padStart(2, "0")}/${(new Date(updatedAt).getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${new Date(updatedAt).getFullYear()}`;

  useEffect(() => {
    // item && fetchCompany();
    const blogCompany: any = companyList.find(
      (i: any) => i?.companyTitle === company
    );
    setCompanyLogo(blogCompany?.generalInfo?.logo);
  }, [companyList]);
  // console.log(companyList);
  return (
    <Link
      href={
        generalInfo?.blogUrl ? `/page/blogs/${generalInfo?.blogUrl}` : "no link"
      }
    >
      <div className=" hover:scale-[101%] transition-all hover:cursor-pointer duration-300 place-content-stretch card w-[400px] max-w-[510px] h-[585px] desktop0:w-[220px] desktop0:h-[384px] desktop2:w-[300px]  tablet2:w-[330px] tablet2:h-[465px] desktop1:w-[255px] desktop1:h-[414px] desktop2:h-[441px] border border-gray-100  bg-white shadow-md flex flex-col justify-around gap-1 p-4">
        <div className="flex gap-4 items-center">
          <img
            style={{ border: `2px solid ${pageSetting?.themeColor}` }}
            className={`w-[50px] h-[50px] object-cover shadow-md border  rounded-full`}
            // src={companyLogo || generalInfo?.coverImage}
            src={"images/apple-icon-180x180.png" || generalInfo?.coverImage}
          />

          <div className="flex flex-col gap-0">
            <div className=" font-medium text-gray-400">
              {generalInfo?.type}
              {/* {JSON.stringify(companyObject)} */}
            </div>
            <div className=" overflow-hidden h-[1rem] text-xs  desktop0:text-xs text-gray-400">
              {generalInfo?.industry}
            </div>
          </div>
        </div>

        <div
          style={{ border: `2px solid ${pageSetting?.themeColor}` }}
          className={`w-full h-[230px]  tablet2:h-[206px]  desktop0:h-[125px]  desktop2:h-[180px] desktop1:h-[155px]  border-2 rounded-xl overflow-hidden`}
        >
          <img
            src={`${generalInfo?.coverImage} `}
            className="w-full object-cover h-full"
          />
        </div>

        <div className="flex flex-col px-1 gap-1 ">
          <div className="flex justify-between">
            <p className="desktop0:text-xs text-gray-400">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </p>
            <p className="desktop0:text-xs text-gray-400">{localDate}</p>
          </div>
          <h2
            style={{
              textOverflow: "ellipsis",
              WebkitLineClamp: "1",
              overflow: "hidden",
              display: "-webkit-box",
              lineHeight: "25px",
              WebkitBoxOrient: "vertical",
            }}
            className=" overflow-hidden text-lg font-semibold text-gray-700"
          >
            {blogTitle}
          </h2>
          <p
            style={{
              textOverflow: "ellipsis",
              WebkitLineClamp: "3",
              overflow: "hidden",
              display: "-webkit-box",
              lineHeight: "25px",
              WebkitBoxOrient: "vertical",
            }}
            className="  overflow-hidden tablet2:text-xs text-sm  text-gray-400  min-h-[75px]"
          >
            {seo?.description || `Description`}
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <div
            style={{ backgroundColor: `${pageSetting?.themeColor}` }}
            className={`w-[80%] rounded-3xl  h-1 `}
          ></div>
        </div>
      </div>
    </Link>
  );
}
