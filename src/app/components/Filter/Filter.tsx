"use client";

import { useCollapse } from "react-collapsed";

import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
import { RxTriangleLeft, RxTriangleDown } from "react-icons/rx";
import CollapsedFilter1 from "../collapsedFilter1/CollapsedFilter1";
import CollapsedFilter2 from "../CollapsedFilter2/CollapsedFilter2";

export default function Filter() {
  const [advanceSearch, setAdvanceSearch] = useState(false);

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  // Advance Search
  const collapseAdvanceSearch = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    setAdvanceSearch(!advanceSearch);
  };

  // const initialFilter = () => {
  //   return window.innerWidth > 990 ||
  //     (window.innerWidth > 575 && window.innerWidth < 770)
  //     ? true
  //     : false;
  // };
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
      console.log(window.innerWidth);
      window.innerWidth > 990 ||
      (window.innerWidth > 575 && window.innerWidth < 770)
        ? setIsFullfilter(true)
        : setIsFullfilter(false);
    });
  }, [isFullFilter]);
  return (
    <div className="w-full ">
      <div></div>
      <div className="border  shadow-lg transition-height bg-white rounded-2xl  mx-auto max-w-[1270px] transition-all overflow-hidden   p-4 ">
        {/* form container */}
        <div className="p-4 flex flex-col transition-all  ">
          {/* label */}
          <div className="my-5 flex gap-1 text-gray-600">
            <ImSearch size={45} />
            <h1 className="font-bold text-4xl ">Search</h1>
          </div>
          <div className=" flex flex-col gap-y-4 transition-all ">
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
                  className="rounded-3xl w-full tablet2:w-[70%] desktop0:w-[80%]  border border-gray-300 outline-none px-2 py-1"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* tablet1 & desktops */}
            {isFullFilter && (
              <CollapsedFilter1 getCollapseProps={getCollapseProps} />
            )}
            {/* tablet2 & mobile */}
            {!isFullFilter && (
              <CollapsedFilter2 getCollapseProps={getCollapseProps} />
            )}
          </div>
          {/* button */}
          <div className="flex justify-end gap-4 w-full mt-4">
            <button className="gap-2 flex justify-center items-center w-[25%] desktop0:w-[15%]  bg-[#999999] rounded-3xl py-2 text-white">
              <VscDebugRestart size={20} />
              <span>Reset</span>
            </button>
            <button className="flex justify-center items-center gap-2  w-[75%] desktop0:w-[25%]  bg-[#FC593B] rounded-3xl text-white">
              <ImSearch size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
