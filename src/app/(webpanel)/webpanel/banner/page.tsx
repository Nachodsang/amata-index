"use client";
import Link from "next/link";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BannerContext } from "@/contexts/bannerContext";
export default function BannerList() {
  const [bannerList, setBannerList] = useState([]);
  const { banners, changeStatus, changeOrder }: any = useContext(BannerContext);
  // fetch
  // const bannerFetch = async () => {
  //   const response = await axios.get(
  //     "http://localhost:3000/api/banner-setting"
  //   );
  //   // console.log(response.data);
  //   setBannerList(response.data);
  // };

  // useEffect(() => {
  //   bannerFetch();
  // }, []);

  // console.log(bannerList);

  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">
          Banner List
        </h1>

        <div className="w-full ">
          <div className="w-[30%] mx-auto ">
            <Search />
          </div>
          {/* Create new company profile */}
        </div>
        <Link href="/webpanel/new-banner">
          <button
            type="button"
            className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Create New Banner
          </button>
        </Link>
        <Table
          list={banners}
          col2="banner"
          col3="client"
          col4="description"
          col5="created on"
          onChange={changeStatus}
          onChangeOrder={changeOrder}
        />
      </div>
    </div>
  );
}
