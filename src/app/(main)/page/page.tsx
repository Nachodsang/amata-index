"use client";
import { useEffect, useState, useContext } from "react";
import Header from "../../../components/index/Header/Header";
import Banner from "../../../components/index/Banner/Banner";
import Core from "../../../components/index/Core/Core";
import Blog from "../../../components/index/Blog/Blog";
import AdSection from "@/components/index/AdSection/AdSection";
import TopBar from "@/components/index/TopBar/TopBar";
import { CompanyContext } from "@/contexts/CompanyContext";
import BlogForRent from "@/components/index/Blog/BlogForRent";
import { FilterContext } from "@/contexts/FilterContext";
import BlogRecruitment from "@/components/index/Blog/BlogRecruitment";
import BlogNews from "@/components/index/Blog/BlogNews";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function About() {
  const { companyData: companies }: any = useContext(CompanyContext);
  const [search, setSearch] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [clearFilter, setClearFilter] = useState(false);
  const [filtersConfirmed, setFiltersConfirmed] = useState({} as any);
  const [filtersApplied, setFiltersApplied] = useState([] as any);
  const { setNationalityState }: any = useContext(FilterContext);

  const companyData = companies?.filter((i: any) => i?.status && !i?.deleted);
  const addFilter = (id: string, type: string, title: string) => {
    !filtersApplied.some((i: any) => i?.id === id)
      ? setFiltersApplied([...filtersApplied, { id, type, title }])
      : setFiltersApplied(filtersApplied.filter((i: any) => i?.id !== id));
  };
  const onClearFilterByType = (type: any) => {
    setFiltersApplied((prev: any) => prev.filter((i: any) => i?.type !== type));
  };
  const onResetFilter = () => {
    setClearFilter(!clearFilter);
    setFiltersApplied([]);
    setSearch("");
    setNationalityState("");
  };

  const onSearchClick = () => {
    !search
      ? setFiltersConfirmed({
          ...filtersConfirmed,
          search: search,
          category: categoryState,
          filters: filtersApplied.map((i: any) => i?.id),
        })
      : setFiltersConfirmed({
          ...filtersConfirmed,
          search: search,
          category: categoryState,
          filters: filtersApplied.map((i: any) => i?.id),
        });
  };
  useEffect(() => {
    setFiltersConfirmed({});
  }, [clearFilter]);
  useEffect(() => {
    setFiltersApplied([]);
  }, [categoryState]);

  return (
    <div className="mt-12">
      <TopBar />
      <Header
        category="factory"
        filtersApplied={filtersApplied}
        setFiltersApplied={addFilter}
        onClickReset={onResetFilter}
        clearFilterTrigger={clearFilter}
        onSearchClick={onSearchClick}
        categoryState={categoryState}
        setCategoryState={setCategoryState}
        search={search}
        setSearch={setSearch}
        onMiniClear={onClearFilterByType}
      />
      <Banner category="factory" />
      <Core category="factory" filters={filtersConfirmed} />
      <AdSection />
      <BlogNews itemPerPage={4} category="factory" companyData={companyData} />
      <BlogRecruitment
        itemPerPage={4}
        category="factory"
        companyData={companyData}
      />
      <BlogForRent
        itemPerPage={4}
        category="factory"
        companyData={companyData}
      />
      <Blog itemPerPage={4} category="factory" companyData={companyData} />
      {/* footer image */}
      <div
        style={{
          background: ` linear-gradient(rgba(246,210,112, 0.1), rgba(246,210,112, 0.1)), url("/coverImages/amataDriveWay.png") `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`relative object-cover w-full h-[70vh] bg-cover  bg-no-repeat `}
      >
        <div className="absolute top-[25%] w-full left-[50%] flex flex-col items-center translate-x-[-50%] gap-6">
          <div className="text-white text-2xl desktop0:text-4xl flex flex-col items-center">
            <span>Start building the Future </span>
            <span className="">with Amata</span>
          </div>
          <Link
            href="https://www.amata.com/contact"
            className="bg-[rgb(9,120,82)] text-base text-white px-6 hover:bg-[#005d40] transition-all py-2 rounded-full flex items-center gap-1"
          >
            <label className="hover:cursor-pointer">
              Talk with Our Consultants
            </label>
            <MdArrowForward size={23} />
          </Link>
        </div>
      </div>
    </div>
  );
}
