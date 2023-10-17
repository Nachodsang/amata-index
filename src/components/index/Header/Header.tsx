"use client";
import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
// import Image from "next/image";
import Filter from "../Filter/Filter";
import "./Header.css";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import GoogleTranslate from "../GooogleTranslate/GoogleTranslate";

export default function Header({
  category,
  filtersApplied,
  setFiltersApplied,
  onClickReset,
  clearFilterTrigger,
  onSearchClick,
  categoryState,
  setCategoryState,
  search,
  setSearch,
  onMiniClear,
}: {
  category: string;
  filtersApplied: any;
  onClickReset: any;
  setFiltersApplied: any;
  clearFilterTrigger: any;
  onSearchClick: any;
  categoryState: any;
  setCategoryState: any;
  search: any;
  setSearch: any;
  onMiniClear: any;
}) {
  const { pageSetting }: any = useContext(PageSettingContext);

  return (
    <div className="relative w-full ">
      <div
        style={{
          background: ` linear-gradient(rgba(0, 0, 0, 0), rgb(255, 255, 255)), url(${pageSetting?.coverImage}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`object-cover  absolute top-0 z-0  h-[80vh]  w-full bg-cover  bg-no-repeat `}
      ></div>
      {/* padding to fit cover photo */}
      <div className=" px-6 pt-[300px]">
        <div className=" relative  w-full ">
          <div className="m-auto max-w-[1270px]  py-10 ">
            <div className="flex flex-col items-start gap-4 relative">
              <div className="z-20  ">
                <h1
                  style={{ backgroundColor: `${pageSetting?.themeColor}` }}
                  className={`rounded-xl px-6 py-4 text-6xl   capitalize text-white`}
                >
                  {pageSetting?.pageTitle}
                </h1>
              </div>
              <GoogleTranslate />
              <div
                className={`z-20 text-2xl desktop0:text-4xl w-full tablet1:w-[800px] desktop0:w-[1000px] `}
                style={{ color: `${pageSetting?.descriptionTextColor}` }}
              >
                {pageSetting?.description}
              </div>
            </div>
          </div>
        </div>
        <Filter
          categoryState={categoryState}
          setCategoryState={setCategoryState}
          onClickReset={onClickReset}
          category={category}
          setFiltersApplied={setFiltersApplied}
          filtersApplied={filtersApplied}
          clearFilterTrigger={clearFilterTrigger}
          onSearchClick={onSearchClick}
          search={search}
          setSearch={setSearch}
          onMiniClear={onMiniClear}
        />
      </div>
    </div>
  );
}
