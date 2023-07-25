"use client";
import Link from "next/link";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BannerContext } from "@/contexts/bannerContext";
import _ from "lodash";
import { BounceLoader } from "react-spinners";
export default function BannerList() {
  const [searchState, setSearchState] = useState("");
  const {
    banners: b,
    changeStatus,
    changeOrder,
    fetchBanner,
  }: any = useContext(BannerContext);
  const [bannerState, setBannerState] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [showOnline, setShowOnline] = useState(false);

  const banners = b.sort((a: any, b: any) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
    return dateB.getTime() - dateA.getTime();
  });

  const onClickSearch = () => {
    const filteredList = _.filter(banners, (i: any) => {
      return (
        i?.bannerTitle?.toLowerCase().includes(searchState.toLowerCase()) ||
        i?.client?.toLowerCase().includes(searchState.toLowerCase())
      );
    });

    !showOnline
      ? setBannerState(filteredList)
      : setBannerState(filteredList.filter((i: any) => i.status));
  };
  useEffect(() => {
    fetchBanner();
  }, [showOnline]);

  useEffect(() => {
    // show offline and set state to initial list
    // or filter banner to show online only
    // then set loading to false
    !showOnline
      ? setBannerState(banners)
      : setBannerState(banners.filter((i: any) => i.status));
    setLoading(false);
  }, [banners]);

  useEffect(() => {
    // when empty set state to initial list
    searchState.length === 0 && setBannerState(banners);
    // and show all without online filter
    searchState.length === 0 && setShowOnline(false);
  }, [searchState]);
  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">
          Banner List{" "}
          {bannerState.length > 0 && (
            <span
              className={`${showOnline ? "text-green-400" : "text-slate-700"}`}
            >
              ({bannerState.length})
            </span>
          )}
        </h1>

        <div className="w-full ">
          <div className="mx-auto w-[30%] ">
            <Search
              searchState={searchState}
              setSearchState={setSearchState}
              onClick={onClickSearch}
            />
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
        <div className="w-full  flex justify-end">
          <button
            onClick={() => {
              setShowOnline(!showOnline);
            }}
            className={`${
              showOnline ? "bg-green-300" : "bg-slate-500"
            } rounded-md bg-green-300 text-white font-semibold px-4 py-2 transition-all`}
          >
            Online
          </button>
        </div>
        {!loading ? (
          <Table
            list={bannerState}
            col2="banner"
            col3="client"
            col4="description"
            col5="created on"
            onChange={changeStatus}
            onChangeOrder={changeOrder}
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
