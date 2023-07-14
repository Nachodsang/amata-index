"use client";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import { useEffect, useState } from "react";
export default function BlogList() {
  const [blogListState, setBlogListState] = useState([]);
  const fetchBlog = async () => {
    const response = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    setBlogListState(data?.blogSetting);
    // console.log(data?.blogSetting);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">Blog List</h1>

        <div className="w-full ">
          <div className="w-[30%] mx-auto ">
            <Search />
          </div>
          {/* Create new company profile */}
        </div>
        <button
          type="button"
          className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
        >
          Create New Profile
        </button>
        <Table
          list={blogListState}
          col2={"Blog Title"}
          col3={"Company"}
          col4={"Industry"}
          col5={"Updated On"}
          type="blog"
        />
      </div>
    </div>
  );
}
