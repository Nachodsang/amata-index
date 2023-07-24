"use client";
import { useEffect, useState } from "react";
import _ from "lodash";
// checkbox component
const CheckBox = ({
  category,
  title,
  onCheckBoxSelection,
  value,
  filterID,
  filtersApplied,
  onClickReset,
  clear,
  setFiltersApplied,
  type,
  onMiniClear,
}: {
  filtersApplied: any;
  category: string;
  title: any;
  onCheckBoxSelection: any;
  value: any;
  onClickReset: any;
  clear: any;
  filterID: any;
  type: any;
  setFiltersApplied: any;
  onMiniClear: any;
  // isChecked: any;
  // setIsChecked: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    (isChecked || filtersApplied.length > 0) &&
      setFiltersApplied(filterID, type);
    // !isChecked && setFiltersApplied(filterID);
  }, [isChecked]);
  useEffect(() => {
    setIsChecked(false);
  }, [onClickReset]);
  useEffect(() => {
    onMiniClear(type);
    setIsChecked(false);
  }, [clear]);
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className={`checkbox-accent checkbox h-4 w-4 rounded border-none ring-2 hover:cursor-pointer ${category}-ring`}
        value={title}
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        // onChange={() => {
        //   onCheckBoxSelection(value, title);
        // }}
      />
      <label>{title}</label>
      {/* <label>{filterID}</label> */}
    </div>
  );
};
// arr of checkbox generator
// let arr: number[] = [];
// for (let i = 0; i <= 20; i++) {
//   arr.push(i);
// }

export default function CheckboxDropdown({
  title,
  checkboxes,
  category,
  isHidden,
  onFoldDropDown,
  onCheckBoxSelection,
  onClearSelection,
  value,
  list,
  categoryState,
  filtersApplied,
  onClickReset,
  onMiniClear,

  setFiltersApplied,
}: any) {
  // const [isChecked, setIsChecked] = useState(false);
  // second row dropdowns
  // const isSecondRow =
  //   title === "checkbox 5" || title === "checkbox 6" || title === "checkbox 7";
  // confirm handle
  const [clear, setClear] = useState(false);
  const onClear = () => {
    setClear(!clear);
  };
  const onConfirm = () => {
    onFoldDropDown();
  };

  return (
    <div
      className={`
      top-[100px] absolute w-full border   bg-white ${category}-border z-40 rounded-md ${
        isHidden ? "hidden" : "flex"
      }`}
    >
      <div className="flex w-full flex-col gap-y-6 p-6  ">
        <div className={`border-b-4 pb-6  ${category}-border`}>
          <h1 className="text-center ">{title}</h1>
        </div>
        <div className="grid w-full grid-cols-2 tablet2:grid-cols-3 desktop0:grid-cols-4">
          {list.map((i: any, index: any) => {
            if (
              i?.filterType === title &&
              i?.filterCategory === categoryState &&
              i?.active === true
            )
              return (
                <CheckBox
                  onCheckBoxSelection={onCheckBoxSelection}
                  category={category}
                  title={i?.filterTitle}
                  key={index}
                  value={value}
                  filterID={i?._id}
                  onClickReset={onClickReset}
                  filtersApplied={filtersApplied}
                  setFiltersApplied={setFiltersApplied}
                  clear={clear}
                  type={i?.filterType}
                  onMiniClear={onMiniClear}
                />
              );
          })}
        </div>
        <div className="flex justify-end  gap-1 font-semibold text-white">
          <button
            className={`rounded-md bg-green-500 px-4 py-2`}
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            onClick={onClear}
            className="rounded-md bg-red-600 px-4 py-2 font-semibold"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
