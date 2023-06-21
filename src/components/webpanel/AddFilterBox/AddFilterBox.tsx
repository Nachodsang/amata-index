import { useState } from "react";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import Input from "../Input/Input";

export default function AddFilterBox({
  label,
  filterList,
  onCheckFilter,
  onSave,
}: any) {
  const [input, setInput] = useState("");
  const onSaveInput = () => {
    onSave(label, input);
    setInput("");
  };
  return (
    <div className="w-[25%] border border-slate-400 rounded-xl p-6 ">
      <div className="flex-col flex items-start">
        <label className="border-b border-slate-300 w-full">{label}</label>
        {/* filter list */}
        <div className="py-4 w-full border-b border-slate-300 mb-4">
          {filterList?.map((i: any) => {
            console.log(i);
            return (
              i?.filterType === label && (
                <FilterCheckBox
                  title={i?.filterTitle}
                  onCheckFilter={onCheckFilter}
                  isCheck={i?.active}
                />
              )
              //   <div className="flex justify-between">
              //     <p>{i?.filterTitle}</p>
              //     <input
              //       type="checkbox"

              //       onChange={() =>
              //         onCheckFilter({
              //           filterTitle: i?.filterTitle,
              //           newValue: !i?.active,
              //         })
              //       }
              //     />
              //   </div>
              // )
            );
          })}
        </div>
        {/* add filter */}
        <Input
          value={input}
          label="Add Filter"
          onChange={(e: any) => setInput(e.target.value)}
        />
        <div className="flex justify-end w-full">
          <button
            onClick={onSaveInput}
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
      {/* <CheckboxDropdown isHidden="true" /> */}
    </div>
  );
}
