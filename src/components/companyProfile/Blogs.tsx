"use client";
import { GrGallery } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import BlogCard from "../index/BlogCard/BlogCard";
import axios from "axios";
import { useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { CompanyContext } from "@/contexts/CompanyContext";
import PaginatedItems from "../index/BlogPagination/BlogPagination";
export default function Blogs({ blogList, company, allCompanyData }: any) {
  const { pageSetting }: any = useContext(PageSettingContext);

  // same category items

  return (
    <div
      className={`w-full bg-slate-100 ${
        blogList.length > 0 ? "block" : "hidden"
      }`}
      id="blog"
    >
      {/* container */}

      <div className="mx-auto max-w-[1270px] py-10 px-4 flex flex-col gap-6">
        <div className=" flex gap-5 items-center">
          <div
            style={{ backgroundColor: `${pageSetting?.coreHeaderColor}` }}
            className="p-4 rounded-full  text-white"
          >
            <TfiGallery size={25} className="" />
          </div>
          <h1 className="font-semibold text-2xl">Blogs</h1>
        </div>
        {/* <div className="desktop0:grid-cols-4 tablet2:grid-cols-2 tablet2:grid flex flex-col items-center gap-y-4 gap-x-0"> */}
        {/* {filteredBlogs.map((i: any, index: any) => (
            <BlogCard item={i} key={index} category={""} />
          ))} */}
        <PaginatedItems
          items={blogList}
          itemsPerPage={8}
          companyData={allCompanyData}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
