"use client";
import { redirect } from "next/navigation";
import TopBar from "@/components/index/TopBar/TopBar";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext } from "react";

import Blog from "@/components/index/Blog/Blog";
import BlogForRent from "@/components/index/Blog/BlogForRent";
import { CompanyContext } from "@/contexts/CompanyContext";
import BlogRecruitment from "@/components/index/Blog/BlogRecruitment";
import BlogNews from "@/components/index/Blog/BlogNews";
export default function Page({ params }: { params: { id: string } }) {
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
  const type = params.id;
  const { pageSetting }: any = useContext(PageSettingContext);
  const { companyData: companies }: any = useContext(CompanyContext);
  const companyData = companies?.filter((i: any) => i?.status && !i?.deleted);
  type !== "property-for-rent" &&
    type !== "property-for-sale" &&
    type !== "news-and-activities" &&
    type !== "recruitment" &&
    redirect("/page");
  return (
    <div className="mt-10">
      <TopBar />
      <div className="min-h-[100vh] ">
        <div className="h-auto overflow-hidden w-full bg-white ">
          <img
            src={pageSetting?.coverImage}
            className="h-auto w-full max-h-[50vh] object-top object-cover"
          />
        </div>
        <div className="max-w-[1440px] mx-auto py-6 ">
          {type === "property-for-rent" && (
            <BlogForRent
              itemPerPage={20}
              companyData={companyData}
              category={"factory"}
            />
          )}
          {type === "property-for-sale" && (
            <Blog
              itemPerPage={20}
              companyData={companyData}
              category={"factory"}
            />
          )}
          {type === "news-and-activities" && (
            <BlogNews
              itemPerPage={20}
              companyData={companyData}
              category={"factory"}
            />
          )}
          {type === "recruitment" && (
            <BlogRecruitment
              itemPerPage={20}
              companyData={companyData}
              category={"factory"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
