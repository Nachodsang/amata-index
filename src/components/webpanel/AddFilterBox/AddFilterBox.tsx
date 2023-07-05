import { useState } from "react";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import Input from "../Input/Input";
import Swal from "sweetalert2";

export default function AddFilterBox({
  label,
  filterList,
  onCheckFilter,
  onSave,
}: any) {
  const [input, setInput] = useState("");
  const onSaveInput = () => {
    if (input.length >= 3) {
      onSave(label, input);
      setInput("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `New Filter has been added to Type ${label}`,
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid Filter Title",
      });
    }
  };
  return (
    <div className="w-[25%] rounded-xl border border-slate-400 p-6 ">
      <div className="flex flex-col items-start">
        <label className="w-full border-b border-slate-300">{label}</label>
        {/* filter list */}
        <div className="mb-4 w-full border-b border-slate-300 py-4">
          {filterList?.map((i: any) => {
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
        <div className="flex w-full justify-end">
          <button
            onClick={onSaveInput}
            type="button"
            className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
      {/* <CheckboxDropdown isHidden="true" /> */}
    </div>
  );
}
