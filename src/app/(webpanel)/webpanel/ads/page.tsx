"use client";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import { AdContext } from "@/contexts/AdContext";
import { PageSettingContext } from "@/contexts/PageSettingContext";
export default function AdList() {
  const { ads, changeStatus, searchAd, changeOrder }: any =
    useContext(AdContext);
  const { pageSetting, updatePageSetting, pageSettingWebpanel }: any =
    useContext(PageSettingContext);
  const [numberOfAd, setNumberOfAd] = useState(pageSettingWebpanel?.adAmount);

  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">Ad. List</h1>

        <div className="flex w-full items-center justify-center gap-4  ">
          <div className="w-[30%] ">
            <Search />
          </div>
          <div className="h-8">
            <label className="text-xl font-bold">
              No. of Ad:{pageSettingWebpanel?.adAmount}{" "}
            </label>
            <input
              type="number"
              className="w-10 rounded-xl border border-slate-400 text-center "
              value={numberOfAd}
              onChange={(e) => setNumberOfAd(e.target.value)}
            />
            <button onClick={() => updatePageSetting("adAmount", numberOfAd)}>
              SAVE
            </button>
          </div>
          {/* Create new company profile */}
        </div>
        <Link href="webpanel/new-ad">
          <button
            type="button"
            className="hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-700 active:text-primary-700 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Create New Ad.
          </button>
        </Link>
        <Table
          onChangeOrder={changeOrder}
          onChange={changeStatus}
          list={ads}
          col2="image"
          col3="client"
          col4="description"
          col5="created on"
        />
      </div>
    </div>
  );
}
