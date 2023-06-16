"use client";

import { useCollapse } from "react-collapsed";

import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
import { RxTriangleLeft, RxTriangleDown } from "react-icons/rx";
import CollapsedFilter1 from "../collapsedFilter1/CollapsedFilter1";
import CollapsedFilter2 from "../CollapsedFilter2/CollapsedFilter2";
import CheckboxDropdown from "../CheckboxDropdown/CheckboxDropdown";

interface DropDowns {
  drop1: boolean;
  drop2: boolean;
  drop3: boolean;
  drop4: boolean;
  drop5: boolean;
  drop6: boolean;
  drop7: boolean;
}
interface IfilterSelection {
  drop1: number[];
  drop2: number[];
  drop3: number[];
  drop4: number[];
  drop5: number[];
  drop6: number[];
  drop7: number[];
}
const defaultDropDownsState = {
  drop1: false,
  drop2: false,
  drop3: false,
  drop4: false,
  drop5: false,
  drop6: false,
  drop7: false,
};
const defaultFilterSelection = {
  drop1: [],
  drop2: [],
  drop3: [],
  drop4: [],
  drop5: [],
  drop6: [],
  drop7: [],
};

export default function Filter({ category }: { category: string }) {
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [dropDowns, setDropDowns] = useState(defaultDropDownsState);
  const [isExpanded, setExpanded] = useState(false);
  const [filterSelection, setFilterSelection] = useState<any>(
    defaultFilterSelection
  );

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  // Filter dropdown
  const onDropDown = (dropNo: keyof DropDowns) => {
    setDropDowns({
      drop1: false,
      drop2: false,
      drop3: false,
      drop4: false,
      drop5: false,
      drop6: false,
      drop7: false,
      [dropNo]: !dropDowns[dropNo],
    });
  };
  // Fold Dropdown
  const onFoldDropDown = () => {
    setDropDowns({
      drop1: false,
      drop2: false,
      drop3: false,
      drop4: false,
      drop5: false,
      drop6: false,
      drop7: false,
    });
  };

  // Checkbox selection
  const onCheckBoxSelection = (field: any, item: any) => {
    console.log(field, item);
    const r = filterSelection[field];
    r.push(item);

    setFilterSelection({ ...filterSelection, [field]: r });
  };
  // Clear Selection
  const onClearSelection = (field: any) => {
    setFilterSelection({
      [field]: [],
    });
  };
  console.log(filterSelection);
  //Expand Advance Search
  const collapseAdvanceSearch = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    setAdvanceSearch(!advanceSearch);
    onFoldDropDown();
  };

  const [isFullFilter, setIsFullfilter] = useState(false);
  useEffect(() => {
    const initialFilter = () => {
      window.innerWidth > 990 ||
      (window.innerWidth > 575 && window.innerWidth < 770)
        ? setIsFullfilter(true)
        : setIsFullfilter(false);
    };
    initialFilter();
  }, []);
  // capturing screen change
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 990 ||
      (window.innerWidth > 575 && window.innerWidth < 770)
        ? setIsFullfilter(true)
        : setIsFullfilter(false);
    });
  }, [isFullFilter]);

  return (
    <div className="w-full  ">
      <div className=" border z-20  shadow-lg  relative bg-white rounded-2xl  mx-auto max-w-[1270px] transition-all   p-4 ">
        <div
          onClick={onFoldDropDown}
          className="absolute w-full h-full  z-0 top-0 left-0 right-0 buttom-0"
        ></div>
        {/* form container */}
        <div className=" p-4 flex flex-col transition-all  ">
          {/* label */}
          <div className=" my-5 flex gap-1   text-gray-600 ">
            <ImSearch size={45} className="z-20" />
            <span className="font-bold text-4xl z-20   ">Search</span>
          </div>
          <div className=" flex flex-col gap-y-4 relative ">
            {/* inputs */}
            <div>
              <div className="flex flex-col desktop0:flex-row tablet2:flex-row gap-4">
                <button
                  {...getToggleProps({
                    onClick: () => {
                      collapseAdvanceSearch();
                    },
                  })}
                  className="text-[rgb(2,131,206)] focus:ring-2 ring-[rgb(2,131,206)] flex items-center hover:cursor-pointer rounded-3xl border w-full tablet2:w-[30%] desktop0:w-[20%] justify-center hover:text-white  hover:bg-[rgb(2,131,206)] transition-all border-[rgb(2,131,206)] outline-none px-2 py-1 "
                >
                  Advance Search
                  <RxTriangleLeft
                    size={20}
                    className={`${advanceSearch ? "hidden" : "flex"}`}
                  />
                  <RxTriangleDown
                    size={20}
                    className={`${advanceSearch ? "flex" : "hidden"}`}
                  />
                </button>
                <input
                  type="text"
                  className="rounded-3xl w-full focus:ring-2 ring-[rgb(2,131,206)] tablet2:w-[70%] desktop0:w-[80%]  border border-gray-300 outline-none px-2 py-1"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* tablet1 & desktops */}
            {isFullFilter && (
              <CollapsedFilter1
                getCollapseProps={getCollapseProps}
                onDropDown={onDropDown}
                dropDowns={dropDowns}
              />
            )}
            {/* tablet2 & mobile */}
            {!isFullFilter && (
              <CollapsedFilter2
                getCollapseProps={getCollapseProps}
                onDropDown={onDropDown}
                dropDowns={dropDowns}
              />
            )}

            <CheckboxDropdown
              title="checkbox 1"
              category={category}
              isHidden={dropDowns.drop1}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop1"
            />

            <CheckboxDropdown
              title="checkbox 2"
              category={category}
              isHidden={dropDowns.drop2}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop2"
            />

            <CheckboxDropdown
              title="checkbox 3"
              category={category}
              isHidden={dropDowns.drop3}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop3"
            />

            <CheckboxDropdown
              title="checkbox 4"
              category={category}
              isHidden={dropDowns.drop4}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop4"
            />

            <CheckboxDropdown
              title="checkbox 5"
              category={category}
              isHidden={dropDowns.drop5}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop5"
            />

            <CheckboxDropdown
              title="checkbox 6"
              category={category}
              isHidden={dropDowns.drop6}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop6"
            />

            <CheckboxDropdown
              title="checkbox 7"
              category={category}
              isHidden={dropDowns.drop7}
              onFoldDropDown={onFoldDropDown}
              onCheckBoxSelection={onCheckBoxSelection}
              onClearSelection={onClearSelection}
              value="drop7"
            />
          </div>
          {/* button */}
          <div className="flex justify-end gap-4 w-full mt-4">
            <button className="gap-2 flex justify-center text-sm z-20 tablet1:text-lg items-center w-[25%] desktop0:w-[15%]  bg-[#999999] rounded-3xl py-2 text-white">
              <VscDebugRestart size={20} />
              <span>Reset</span>
            </button>
            <button
              className={`flex justify-center items-center z-20 gap-2  w-[75%] desktop0:w-[25%]  ${category}-background rounded-3xl text-white`}
            >
              <ImSearch size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
