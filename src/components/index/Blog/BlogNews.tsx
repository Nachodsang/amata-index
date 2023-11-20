"use client";
import BlogCard from "../BlogCard/BlogCard";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { useContext, useState } from "react";
import { CompanyContext } from "@/contexts/CompanyContext";
import PaginatedItems from "../BlogPagination/BlogPagination";
import Link from "next/link";

export default function BlogNews({
  category,
  companyData,
  itemPerPage,
}: {
  category: string;
  companyData: any;
  itemPerPage: number;
}) {
  const { pageSetting }: any = useContext(PageSettingContext);
  const { blogData: blogs }: any = useContext(CompanyContext);

  const blogData = blogs.filter((i: any) => i?.blogGeneralInfo?.type == "NEWS");

  // console.log(blogData);
  return (
    <div
      id="blog"
      className="w-full py-10   px-6 relative bg-white "
      //   style={{
      //     background: `linear-gradient(180deg, ${pageSetting?.coreColor}00 0%,  ${pageSetting?.coreColor}50 100%)`,
      //   }}
    >
      <div className="mx-auto max-w-[1270px] px-4 pt-4  ">
        <div className="mb-5 flex flex-col w-fit">
          <Link
            href="/page/blogs-category/news-and-activities"
            className="text-4xl font-semibold mb-2 text-slate-600 uppercase"
          >
            News & Activities
          </Link>
          <div
            className=" h-1 "
            style={{
              background: `${pageSetting?.coreHeaderColor}`,
            }}
          ></div>
        </div>
        {/* Grid Container */}
        {/* <div className="desktop0:grid-cols-4 tablet2:grid-cols-2 tablet2:grid flex flex-col items-center gap-y-4 gap-x-0">
          {blogData.map((i: any, index: any) => (
            <BlogCard key={index} category={category} item={i} />
          ))}
        </div> */}
        {/* {JSON.stringify(blogData)} */}
        <PaginatedItems
          items={blogData}
          itemsPerPage={itemPerPage}
          // companyData={companyData}
        />
      </div>
    </div>
  );
}
