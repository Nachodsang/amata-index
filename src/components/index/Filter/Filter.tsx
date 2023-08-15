"use client";

import { useCollapse } from "react-collapsed";

import { useState, useEffect, useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { ImSearch } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
import { RxTriangleLeft, RxTriangleDown } from "react-icons/rx";

import CheckboxDropdown from "../CheckboxDropdown/CheckboxDropdown";
import { FilterContext } from "@/contexts/FilterContext";

const defaultFilterSelection = {
  drop1: [],
  drop2: [],
  drop3: [],
  drop4: [],
  drop5: [],
  drop6: [],
  drop7: [],
};

export default function Filter({
  category,
  filtersApplied,
  setFiltersApplied,
  onClickReset,
  clearFilterTrigger,
  onSearchClick,
  categoryState,
  setCategoryState,
  search,
  setSearch,
  onMiniClear,
}: {
  category: string;
  filtersApplied: any;
  setFiltersApplied: any;
  onClickReset: any;
  clearFilterTrigger: any;
  onSearchClick: any;
  categoryState: any;
  setCategoryState: any;
  search: any;
  setSearch: any;
  onMiniClear: any;
}) {
  // const [advanceSearch, setAdvanceSearch] = useState(false);

  const [dropDowns, setDropDowns] = useState({} as any);
  // const [isExpanded, setExpanded] = useState(false);
  const [filterSelection, setFilterSelection] = useState<any>(
    defaultFilterSelection
  );
  // const { filtersState }: any = useContext(FilterContext);
  const { pageSetting }: any = useContext(PageSettingContext);
  const { filtersFromMain: filtersState }: any = useContext(FilterContext);
  // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  // show selected dropdown and close others
  // fixing this later
  const onDropDown = (dropNo: any) => {
    setDropDowns((prevDropDowns: any) => {
      const updatedDropDowns: any = {
        ...prevDropDowns,
        [dropNo]: !prevDropDowns[dropNo],
      };

      // Set all other dropdowns to false
      for (const [key, value] of Object.entries(updatedDropDowns)) {
        if (key !== dropNo) {
          updatedDropDowns[key] = false;
        }
      }

      return updatedDropDowns;
    });
  };

  // Fold Dropdown
  const onFoldDropDown = () => {
    const updatedDropDowns: any = {
      ...Object.fromEntries(Object.keys(dropDowns).map((key) => [key, false])),
    };
    setDropDowns(updatedDropDowns);
  };

  // Checkbox selection
  const onCheckBoxSelection = (field: any, item: any) => {
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

  //Expand Advance Search
  // const collapseAdvanceSearch = () => {
  //   setExpanded((prevExpanded) => !prevExpanded);
  //   setAdvanceSearch(!advanceSearch);
  //   onFoldDropDown();
  // };
  // Types Array
  const uniqueFilterTypes = new Set(
    filtersState
      .filter((i: any) => i?.filterCategory === categoryState)
      .map((i: any) => i?.filterType)
  );
  const filterTypes = Array.from(uniqueFilterTypes);

  //  Categories Array
  const uniqueFilterCategories = new Set(
    filtersState.map((i: any) => i?.filterCategory)
  );
  const filterCategories = Array.from(uniqueFilterCategories);
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

  useEffect(() => {
    setDropDowns(
      filterTypes.reduce((acc: any, value: any) => {
        return { ...acc, [value]: false };
      }, {})
    );
  }, [categoryState]);

  // to be set to [0]later
  useEffect(() => {
    setCategoryState(filterCategories[1]);
  }, []);
  return (
    <div className="w-full   " id="search">
      <div className=" relative z-20  mx-auto  max-w-[1270px] rounded-2xl border  bg-white p-4 shadow-lg   transition-all ">
        <div
          onClick={onFoldDropDown}
          className="buttom-0 absolute left-0  right-0 top-0 z-0 h-full w-full"
        ></div>
        {/* form container */}
        <div className=" flex flex-col p-4 transition-all  ">
          {/* label */}
          <div className=" my-5 flex gap-1   text-gray-600 ">
            <ImSearch size={45} className="z-20" />
            <span className="z-20 text-4xl font-bold   ">Search</span>
          </div>
          <div className=" relative flex flex-col gap-y-4 ">
            {/* inputs */}
            <div>
              <div className="flex flex-col gap-4 tablet2:flex-row desktop0:flex-row">
                <div
                  // {...getToggleProps({
                  //   onClick: () => {
                  //     collapseAdvanceSearch();
                  //   },
                  // })}
                  className="dropdown dropdown-bottom flex w-full items-center justify-center rounded-3xl border border-[rgb(2,131,206)]   outline-none ring-[rgb(2,131,206)] transition-all  hover:cursor-pointer  hover:text-black focus:ring-2 tablet2:w-[30%] desktop0:w-[30%] "
                >
                  <label
                    tabIndex={0}
                    className="hover:bg-[rgb(2,131,206)] justify-between rounded-3xl px-2 py-1 hover:text-white w-full text-center  text-[rgb(2,131,206)] flex hover:cursor-pointer "
                  >
                    <h1>{categoryState || "Advance Search"}</h1>
                    <RxTriangleDown size={20} className="" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box  "
                  >
                    {filterCategories?.map((i: any, index: any) => (
                      <li
                        key={index}
                        className="text-slate-500"
                        onClick={() => setCategoryState(i)}
                      >
                        <p>{i}</p>
                      </li>
                    ))}
                  </ul>
                  {/* Advance Search */}
                  {/* <RxTriangleLeft
                    size={20}
                    className={`${advanceSearch ? "hidden" : "flex"}`}
                  />
                  <RxTriangleDown
                    size={20}
                    className={`${advanceSearch ? "flex" : "hidden"}`}
                  /> */}
                </div>

                <input
                  type="text"
                  className="w-full rounded-3xl border border-gray-300 px-2 py-1  outline-none ring-[rgb(2,131,206)] focus:ring-2 tablet2:w-[70%] desktop0:w-[70%]"
                  placeholder="Search"
                  onChange={(e: any) => setSearch(e.target.value)}
                  value={search}
                  onKeyDown={(e) => e.key === "Enter" && onSearchClick()}
                />
              </div>
            </div>
            {/* tablet1 & desktops */}
            {/* {isFullFilter && (
                <CollapsedFilter1
                  getCollapseProps={getCollapseProps}
                  onDropDown={onDropDown}
                  dropDowns={dropDowns}
                />
              )} */}
            {/* tablet2 & mobile */}
            {/* {!isFullFilter && (
                <CollapsedFilter2
                  getCollapseProps={getCollapseProps}
                  onDropDown={onDropDown}
                  dropDowns={dropDowns}
                />
              )} */}
            <div className="flex gap-4 flex-wrap flex-row">
              {filterTypes.map((i: any, index: any) => {
                const dynamicLabel = filtersApplied.filter(
                  (j: any) => j?.type === i
                );
                return (
                  <button
                    key={index}
                    onClick={() => onDropDown(i)}
                    className="justify-between items-center text-slate-400 focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full   desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 flex  tablet2:flex-1   "
                  >
                    {dynamicLabel.length > 0 ? (
                      <div className=" flex justify-start items-center ">
                        {dynamicLabel?.map((k: any, index: any) => (
                          <span key={index} className="text-xs">
                            {k?.title},&nbsp;
                          </span>
                        ))}
                      </div>
                    ) : (
                      i
                    )}
                    <RxTriangleDown size={20} className="" />
                  </button>
                );
              })}
            </div>
            {filterTypes.map((i: any, index: any) => (
              <CheckboxDropdown
                key={index}
                title={i}
                category={category}
                isHidden={!dropDowns?.[i]}
                onFoldDropDown={onFoldDropDown}
                onCheckBoxSelection={onCheckBoxSelection}
                onClearSelection={onClearSelection}
                value={i}
                list={filtersState}
                categoryState={categoryState}
                setFiltersApplied={setFiltersApplied}
                filtersApplied={filtersApplied}
                onClickReset={clearFilterTrigger}
                onMiniClear={onMiniClear}
              />
            ))}
          </div>
          {/* button */}
          <div className="mt-4 flex w-full justify-end gap-4">
            <button
              onClick={onClickReset}
              className="z-10 flex w-[25%] items-center justify-center gap-2 rounded-3xl bg-[#999999] py-2  text-sm text-white tablet1:text-lg desktop0:w-[15%]"
            >
              <VscDebugRestart size={20} />
              <span>Reset</span>
            </button>
            <button
              onClick={onSearchClick}
              style={{ backgroundColor: `${pageSetting?.themeColor}` }}
              className={`z-10 flex w-[75%] items-center justify-center  gap-2 rounded-3xl   text-white desktop0:w-[25%]`}
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
