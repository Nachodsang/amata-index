import CheckboxDropdown from "../CheckboxDropdown/CheckboxDropdown";
export default function CollapsedFilter1({
  getCollapseProps,
  onDropDown,
  dropDowns,
}: any) {
  return (
    <div className="w-full hidden tablet2:hidden flex-col tablet1:flex desktop0:flex ">
      <div className="gap-x-4  flex flex-col tablet2:flex-row relative  desktop0:flex-row gap-4 mb-4">
        <button
          onClick={() => onDropDown("drop1")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full   desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1  tablet1:flex desktop0:flex"
        >
          Dropdown1
        </button>
        {dropDowns.drop1 && <CheckboxDropdown title={"dropdown 1"} />}
        <button
          onClick={() => onDropDown("drop2")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full  desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
        >
          Dropdown2
        </button>
        {dropDowns.drop2 && <CheckboxDropdown title={"dropdown 2"} />}
        <button
          onClick={() => onDropDown("drop3")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
        >
          Dropdown3
        </button>
        {dropDowns.drop3 && <CheckboxDropdown title={"dropdown 3"} />}
        <button
          onClick={() => onDropDown("drop4")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
        >
          Dropdown4
        </button>
        {dropDowns.drop4 && <CheckboxDropdown title={"dropdown 4"} />}
      </div>
      {/* advance search desktop0 up */}
      <div
        {...getCollapseProps()}
        className=" flex tablet1:flex-col tablet2:flex-row desktop0:flex-row "
      >
        <button
          onClick={() => onDropDown("drop5")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border text-start border-gray-300 outline-none px-2 py-1   tablet1:inline desktop0:inline me-4"
        >
          Dropdown5
        </button>
        {dropDowns.drop5 && <CheckboxDropdown title={"dropdown 5"} />}
        <button
          onClick={() => onDropDown("drop6")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1  text-start  tablet1:inline desktop0:inline me-4"
        >
          Dropdown6
        </button>
        {dropDowns.drop6 && <CheckboxDropdown title={"dropdown 6"} />}
        <button
          onClick={() => onDropDown("drop7")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 text-start tablet1:inline desktop0:inline me-4"
        >
          Dropdown7
        </button>
        {dropDowns.drop7 && <CheckboxDropdown title={"dropdown 7"} />}
      </div>
    </div>
  );
}
