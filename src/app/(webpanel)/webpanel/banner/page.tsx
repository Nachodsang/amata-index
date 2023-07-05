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
  //   //
  //   setBannerList(response.data);
  // };

  // useEffect(() => {
  //   bannerFetch();
  // }, []);

  //

  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">
          Banner List
        </h1>

        <div className="w-full ">
          <div className="mx-auto w-[30%] ">
            <Search />
          </div>
          {/* Create new company profile */}
        </div>
        <Link href="/webpanel/new-banner">
          <button
            type="button"
            className="hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-700 active:text-primary-700 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
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
