export default function CollapsedFilter2({ getCollapseProps }: any) {
  return (
    <div
      {...getCollapseProps()}
      className="w-full flex tablet2:flex flex-col   "
    >
      <div className="gap-x-4  flex flex-col tablet2:flex-row  desktop0:flex-row gap-y-4 mb-4  ">
        <input
          type="text"
          className="rounded-3xl tablet1:w-full   desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1   tablet2:flex-1 tablet2:flex  tablet1:hidden desktop0:hidden"
          placeholder="Standard filter1"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full  desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1  tablet2:flex-1 tablet2:flex tablet1:hidden desktop0:hidden"
          placeholder="Standard filter2"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1   tablet2:flex-1 tablet2:flex tablet1:hidden desktop0:hidden"
          placeholder="Standard filter3"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1   tablet2:flex-1 tablet2:flex tablet1:hidden desktop0:hidden"
          placeholder="Standard filter4"
        />
      </div>
      {/* advance search */}
      <div className=" flex flex-col tablet1:flex-col tablet2:flex-row desktop0:flex-row w-full   ">
        <input
          type="text"
          className="rounded-3xl  tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet2:flex   tablet1:hidden desktop0:hidden me-4"
          placeholder="Advance filter1"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet2:flex  tablet1:hidden desktop0:hidden me-4"
          placeholder="Advance filter2"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet2:flex tablet1:hidden desktop0:hidden "
          placeholder="Advance filter3"
        />
      </div>
    </div>
  );
}
