"use client";
import { useEffect, useState } from "react";
import Header from "../../../components/index/Header/Header";
import Banner from "../../../components/index/Banner/Banner";
import Core from "../../../components/index/Core/Core";
import Blog from "../../../components/index/Blog/Blog";
import AdSection from "@/components/index/AdSection/AdSection";
import axios from "axios";

export default function about() {
  const [search, setSearch] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [clearFilter, setClearFilter] = useState(false);
  const [filtersConfirmed, setFiltersConfirmed] = useState({} as any);
  const [filtersApplied, setFiltersApplied] = useState([] as any);
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
  // console.log(filtersApplied);
  // console.log(filtersConfirmed);
  return (
    <div>
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
      <Blog category="factory" />
    </div>
  );
}
