export default function CollapsedFilter2({
  getCollapseProps,
  onDropDown,
}: any) {
  return (
    <div
      {...getCollapseProps()}
      className="w-full flex tablet2:flex flex-col   "
    >
      <div className="gap-x-4  flex flex-col tablet2:flex-row  desktop0:flex-row gap-y-4 mb-4  ">
        <button
          onClick={() => onDropDown("drop1")}
          className="rounded-3xl tablet1:w-full   desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1   tablet2:flex-1 tablet2:flex  tablet1:hidden desktop0:hidden"
        >
          filter1
        </button>
        <button
          onClick={() => onDropDown("drop2")}
          className="rounded-3xl tablet1:w-full  desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1  tablet2:flex-1 tablet2:flex tablet1:hidden desktop0:hidden"
          placeholder="Standard filter2"
        >
          filter2
        </button>
        <button
          onClick={() => onDropDown("drop3")}
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1   tablet2:flex-1 tablet2:flex tablet1:hidden desktop0:hidden"
          placeholder="Standard filter3"
        >
          filter3
        </button>
        <button
          onClick={() => onDropDown("drop4")}
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1   tablet2:flex-1 tablet2:flex tablet1:hidden desktop0:hidden"
          placeholder="Standard filter4"
        >
          filter4
        </button>
      </div>
      {/* advance search */}
      <div className=" flex flex-col tablet1:flex-col tablet2:flex-row desktop0:flex-row w-full   ">
        <button
          onClick={() => onDropDown("drop5")}
          className="rounded-3xl  tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet2:flex   tablet1:hidden desktop0:hidden me-4"
          placeholder="Advance filter1"
        >
          filter5
        </button>
        <button
          onClick={() => onDropDown("drop6")}
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet2:flex  tablet1:hidden desktop0:hidden me-4"
          placeholder="Advance filter2"
        >
          filter6
        </button>
        <button
          onClick={() => onDropDown("drop7")}
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet2:flex tablet1:hidden desktop0:hidden "
          placeholder="Advance filter3"
        >
          filter7
        </button>
      </div>
    </div>
  );
}
