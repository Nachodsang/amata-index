"use client";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Search from "@/components/webpanel/Search/Search";
import Table from "@/components/webpanel/Table/Table";
import { AdContext } from "@/contexts/AdContext";
export default function AdList() {
  const { ads }: any = useContext(AdContext);
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">Ad. List</h1>

        <div className="w-full ">
          <div className="w-[30%] mx-auto ">
            <Search />
          </div>
          {/* Create new company profile */}
        </div>
        <Link href="webpanel/new-ad">
          <button
            type="button"
            className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Create New Ad.
          </button>
        </Link>
        <Table
          list={ads}
          col2="banner"
          col3="client"
          col4="title"
          col5="created on"
        />
      </div>
    </div>
  );
}