"use client";
import { useContext, useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import { FilterContext } from "@/contexts/FilterContext";
import Swal from "sweetalert2";
import { Dropdown, Ripple, initTE } from "tw-elements";

initTE({ Dropdown, Ripple });

export default function FilterInfo({ state, setState, edit }: any) {
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

  const onHandleSave = () => {
    if (edit) {
      setState({
        ...state,
        filters: selectedFilter,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Filters have been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setState({
        ...state,
        filters: selectedFilter,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Filters have been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    edit && setSelectedFilter(state?.filters);
  }, [state]);
  return (
    <div className="flex w-full flex-col rounded-md border border-slate-300  bg-white p-4 shadow-sm">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div className="font-bold text-2xl text-slate-600">Filter</div>
      </div>
      <div className="flex flex-wrap gap-x-16 gap-y-6 py-6">
        {uniqueFilterType.map((i: any, index: any) => (
          <div className="w-[30%]" key={index}>
            <DropDown
              edit={edit}
              selected={selectedFilter}
              checkBox={true}
              title={i}
              type="filterCheckbox"
              filterList={filtersState}
              onChange={onCheckFilter}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onHandleSave}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
