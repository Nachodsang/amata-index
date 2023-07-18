"use client";
import { find, filter } from "lodash";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import axios from "axios";
import { on } from "events";
import { useEffect, useState } from "react";
import _ from "lodash";
import Link from "next/link";
import BounceLoader from "react-spinners/BounceLoader";
export default function BlogList() {
  const [blogListState, setBlogListState] = useState([] as any);
  const [searchState, setSearchState] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchBlog = async () => {
    const response = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    setBlogListState(data?.blogSetting);
    // console.log(data?.blogSetting);
  };
  // change blog status
  const onChangeStatus = async (id: string, newStatus: boolean) => {
    try {
      const response = await axios.put("http://localhost:3000/api/blogs", {
        // filterCat: "_id",
        filterValue: id,
        // updatingField: "status",
        newValue: newStatus,
        type: "status",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const onClickSearch = () => {
    const filteredList = _.filter(blogListState, (i: any) => {
      return (
        i?.blogTitle?.toLowerCase().includes(searchState.toLowerCase()) ||
        i?.company?.toLowerCase().includes(searchState.toLowerCase())
      );
    });

    searchState ? setBlogListState(filteredList) : fetchBlog();
  };
  useEffect(() => {
    fetchBlog();
  }, [searchState]);
  useEffect(() => {
    fetchBlog();
    setLoading(false);
  }, []);

  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">
          Blog List{" "}
          {blogListState.length > 0 && <span>({blogListState.length})</span>}
        </h1>

        <div className="w-full ">
          <div className="w-[30%] mx-auto ">
            <Search
              searchState={searchState}
              setSearchState={setSearchState}
              onClick={onClickSearch}
            />
          </div>
          {/* Create new company profile */}
        </div>
        <Link href="/webpanel/blogs/new">
          <button
            type="button"
            className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Create New Blog
          </button>
        </Link>
        {!loading ? (
          <Table
            list={blogListState}
            col2={"Blog Title"}
            col3={"Industry"}
            col5={"Actions"}
            col4={"Updated On"}
            type="blog"
            onChange={onChangeStatus}
          />
        ) : (
          <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] ">
            <BounceLoader
              color="rgb(87,12,248)"
              size={100}
              speedMultiplier={3}
            />
          </div>
        )}
      </div>
    </div>
  );
}
