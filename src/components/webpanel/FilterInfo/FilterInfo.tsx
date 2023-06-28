"use client";
import { useContext, useState } from "react";
import DropDown from "../DropDown/DropDown";
import { FilterContext } from "@/contexts/FilterContext";

export default function FilterInfo({ state, setState }: any) {
  const { filtersState }: any = useContext(FilterContext);
  const [selectedFilter, setSelectedFilter] = useState<
    Array<{
      filterTitle: string;
      filterType: string;
    }>
  >([]);
  const uniqueFilterType = Array.from(
    new Set(filtersState.map((i: any) => i.filterType))
  );

  const onCheckFilter = (title: any, type: any) => {
    // const newFilter = { filterTitle: title, filterType: type };
    if (!selectedFilter.map((i: any) => i?.filterTitle).includes(title)) {
      // check if sent values already in the array
      setSelectedFilter([
        ...selectedFilter,
        { filterTitle: title, filterType: type },
      ]);
    } else {
      setSelectedFilter(
        selectedFilter.filter((i: any) => i?.filterTitle != title)
      );
    }
  };
  console.log(selectedFilter);
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>Filter</div>
      </div>
      <div className="py-6 flex flex-wrap  gap-6">
        {uniqueFilterType.map((i: any) => (
          <DropDown
            selected={selectedFilter}
            checkBox={true}
            title={i}
            type="filterCheckbox"
            filterList={filtersState}
            onChange={onCheckFilter}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            setState({
              ...state,
              filters: selectedFilter,
            });
          }}
          type="button"
          className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
