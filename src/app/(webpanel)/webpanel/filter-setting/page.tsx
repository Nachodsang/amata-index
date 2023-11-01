"use client";
import CheckboxDropdown from "@/components/index/CheckboxDropdown/CheckboxDropdown";
import AddFilterBox from "@/components/webpanel/AddFilterBox/AddFilterBox";
import Input from "@/components/webpanel/Input/Input";
import { useContext, useState } from "react";
import { FilterContext } from "@/contexts/FilterContext";
import Swal from "sweetalert2";
import DropDown from "@/components/webpanel/DropDown/DropDown";

export default function FilterSettingPage() {
  const [newFilterType, setNewFilterType] = useState("");
  const [newFilterTitle, setNewFilterTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newType, setNewType] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const { filtersState, onCheckFilter, addFilter }: any =
    useContext(FilterContext);

  // Types Array
  const uniqueFilterTypes = new Set(
    filtersState
      .filter((i: any) => i?.filterCategory === categoryState)
      .map((i: any) => i.filterType)
  );
  const filterTypes = Array.from(uniqueFilterTypes);

  //  Categories Array
  const uniqueFilterCategories = new Set(
    filtersState.map((i: any) => i?.filterCategory)
  );
  const filterCategories = Array.from(uniqueFilterCategories);

  const onSaveNewFilterType = () => {
    if (
      newFilterType.length >= 2 &&
      newFilterTitle.length >= 2 &&
      newCategory.length >= 2
    ) {
      addFilter(newFilterType, newFilterTitle, newCategory);
      setNewFilterTitle("");
      setNewFilterType("");
      setNewCategory("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Filter Category has been added",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid Category, Filter Type and Filter Title",
      });
    }
  };
  const onSaveNewFilterTypeExistingCategory = () => {
    if (newType.length >= 2 && newTitle.length >= 2) {
      addFilter(newType, newTitle, categoryState);
      setNewTitle("");
      setNewType("");
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
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6 ">
        <div className="flex flex-col justify-center gap-2 items-center">
          <h1 className="mb-4 text-center text-xl font-semibold  ">
            Filter Setting:
            {categoryState}
            {/* {JSON.stringify(filterTypes)} */}
          </h1>
          {/* to be changed later */}

          <DropDown
            title={categoryState || "select category"}
            type="dropdown"
            edit={false}
            filterList={filterCategories}
            checkBox={false}
            onChange={setCategoryState}
            selected={null}
            category=""
          />
        </div>
        {!categoryState && (
          <div>
            <div className="text-start text-xl text-slate-500">
              New Category / เพิ่มหมวดหมู่
            </div>
            <div className="flex gap-2">
              <Input
                required={true}
                placeholder="new filter type"
                id="newFilterType"
                value={newCategory}
                label="New Category / หมวดหมู่ใหม่*"
                onChange={(e: any) => setNewCategory(e.target.value)}
              />
              <Input
                required={true}
                placeholder="new filter"
                id="newFilter"
                value={newFilterType}
                label="Initial Filter Type / ประเภทฟิลเตอร์เริ่มต้น*"
                onChange={(e: any) => setNewFilterType(e.target.value)}
              />
              <Input
                required={true}
                placeholder="new filter"
                id="newFilter"
                value={newFilterTitle}
                label="Initial Filter Item / ฟิลเตอร์เริ่มต้น* "
                onChange={(e: any) => setNewFilterTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={onSaveNewFilterType}
                type="button"
                className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              >
                save
              </button>
            </div>
          </div>
        )}
        <div className="w-full h-1 rounded-xl bg-slate-100 my-4"></div>
        {categoryState && (
          <>
            <div className="flex text-slate-700">
              <label>
                Existing Filter Types / ประเภทฟิลเตอร์ในหมวดหมู่นี้:{" "}
              </label>
              <div>
                {filterTypes?.map((i: any) => (
                  <span>{i}, </span>
                ))}
              </div>
            </div>
            <div className="text-start text-xl text-slate-500">
              New Filter Type / เพิ่มประเภทฟิลเตอร์
            </div>
            <div className="flex gap-2">
              <Input
                required={false}
                placeholder="new filter type"
                id="newFilterType"
                value={newType}
                label="New Filter Type / ประเภทฟิลเตอร์เริ่มต้น"
                onChange={(e: any) => setNewType(e.target.value)}
              />
              <Input
                required={false}
                placeholder="new filter"
                id="newFilter"
                value={newTitle}
                label="New Filter / ฟิลเตอร์เริ่มต้น"
                onChange={(e: any) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={onSaveNewFilterTypeExistingCategory}
                type="button"
                className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              >
                save
              </button>
            </div>
          </>
        )}
        <h1 className="text-4xl text-slate-500">{categoryState}</h1>
        <div className="flex w-full flex-wrap justify-center gap-4 mt-6">
          {filterTypes.map((i, index) => {
            return (
              <AddFilterBox
                category={categoryState}
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
