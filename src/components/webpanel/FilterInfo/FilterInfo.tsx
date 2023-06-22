"use client";
import { useContext } from "react";
import DropDown from "../DropDown/DropDown";
import { FilterContext } from "@/contexts/FilterContext";

export default function FilterInfo() {
  const { filtersState }: any = useContext(FilterContext);
  const uniqueFilterType = Array.from(
    new Set(filtersState.map((i: any) => i.filterType))
  );
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>Filter</div>
      </div>
      <div className="py-6 flex flex-wrap  gap-6">
        {uniqueFilterType.map((i: any) => (
          <DropDown title={i} filterList={filtersState} />
        ))}
      </div>
    </div>
  );
}
