"use client";
import CheckboxDropdown from "@/components/index/CheckboxDropdown/CheckboxDropdown";
import AddFilterBox from "@/components/webpanel/AddFilterBox/AddFilterBox";
import Input from "@/components/webpanel/Input/Input";
import { useContext, useState } from "react";
import { FilterContext } from "@/contexts/FilterContext";
import Swal from "sweetalert2";

export default function FilterSettingPage() {
  const [newFilterType, setNewFilterType] = useState("");
  const [newFilterTitle, setNewFilterTitle] = useState("");
  const { filtersState, onCheckFilter, addFilter }: any =
    useContext(FilterContext);

  // console.log(filterTypes);
  const uniqueFilterTypes = new Set(filtersState.map((i: any) => i.filterType));
  const filterTypes = Array.from(uniqueFilterTypes);

  const onSaveNewFilterType = () => {
    if (newFilterType.length > 5 && newFilterTitle.length > 5) {
      addFilter(newFilterType, newFilterTitle);
      setNewFilterTitle("");
      setNewFilterType("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Filter Type has been added",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid Filter Type and Filter Title",
      });
    }
  };
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">
          Filter Setting
        </h1>
        <div className="flex gap-2">
          <Input
            value={newFilterType}
            label="New Filter Type"
            onChange={(e: any) => setNewFilterType(e.target.value)}
          />
          <Input
            value={newFilterTitle}
            label="New Filter"
            onChange={(e: any) => setNewFilterTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onSaveNewFilterType}
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
        <div className="flex justify-center w-full gap-4 flex-wrap">
          {filterTypes.map((i, index) => {
            return (
              <AddFilterBox
                key={index}
                label={i}
                filterList={filtersState}
                onCheckFilter={onCheckFilter}
                onSave={addFilter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
