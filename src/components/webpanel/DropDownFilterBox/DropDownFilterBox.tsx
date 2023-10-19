"use client";
import { useState, useEffect } from "react";

export default function DropDownFilterBox({
  filterTitle,
  checkBox,
  onChange,
  filterType,
  selected,
  edit,
  _id,
}: any) {
  const [check, setCheck] = useState(false);

  const onSelectCheckbox = () => {
    onChange(filterTitle, filterType, _id);
    checkBox && setCheck(!check);
  };
  useEffect(() => {
    const filterFromDb = selected?.find(
      (i: any) => i?.filterTitle === filterTitle && i?.filterType === filterType
    );
    if (edit && filterFromDb) {
      setCheck(!check);
    }
  }, [selected]);

  return (
    <li
      className="px-5 py-1 hover:cursor-pointer  hover:bg-neutral-100 dark:hover:bg-neutral-600 "
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
            style={{ colorScheme: `light` }}
            className="hover:cursor-pointer"
            checked={
              selected &&
              selected?.find(
                (i: any) =>
                  i?.filterTitle === filterTitle && i?.filterType === filterType
              )
            }
            type="checkbox"
            onChange={onSelectCheckbox}
          />
        )}
      </div>
    </li>
  );
}
