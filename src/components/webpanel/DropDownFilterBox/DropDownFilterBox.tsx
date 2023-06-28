"use client";
import { useState } from "react";

export default function DropDownFilterBox({
  filterTitle,
  checkBox,
  onChange,
  filterType,
}: any) {
  const [check, setCheck] = useState(false);

  const onSelectCheckbox = () => {
    onChange(filterTitle, filterType);
    checkBox && setCheck(!check);
  };
  return (
    <li
      className="py-1 px-5 hover:bg-neutral-100 dark:hover:bg-neutral-600 "
      onClick={onSelectCheckbox}
    >
      <div className="flex justify-between">
        <span
          className={`${
            check ? "font-bold" : "font-bold"
          } block  w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200`}
          data-te-dropdown-item-ref
        >
          {filterTitle}
        </span>
        {checkBox && (
          <input
            className="hover:cursor-pointer"
            checked={check}
            type="checkbox"
            onChange={onSelectCheckbox}
          />
        )}
      </div>
    </li>
  );
}
