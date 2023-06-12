import CheckboxDropdown from "../CheckboxDropdown/CheckboxDropdown";
export default function CollapsedFilter1({
  getCollapseProps,
  onDropDown,
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

        <button
          onClick={() => onDropDown("drop2")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full  desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
        >
          Dropdown2
        </button>

        <button
          onClick={() => onDropDown("drop3")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
        >
          Dropdown3
        </button>

        <button
          onClick={() => onDropDown("drop4")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
        >
          Dropdown4
        </button>
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

        <button
          onClick={() => onDropDown("drop6")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1  text-start  tablet1:inline desktop0:inline me-4"
        >
          Dropdown6
        </button>

        <button
          onClick={() => onDropDown("drop7")}
          className="focus:ring-2 ring-[rgb(2,131,206)] rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 text-start tablet1:inline desktop0:inline me-4"
        >
          Dropdown7
        </button>
      </div>
    </div>
  );
}
