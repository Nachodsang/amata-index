import { useCollapse } from "react-collapsed";
export default function CollapsedFilter1({ getCollapseProps }: any) {
  return (
    <div className="w-full hidden tablet2:hidden flex-col tablet1:flex desktop0:flex ">
      <div className="gap-x-4  flex flex-col tablet2:flex-row  desktop0:flex-row gap-4 mb-4">
        <input
          type="text"
          className="rounded-3xl tablet1:w-full   desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1  tablet1:flex desktop0:flex"
          placeholder="filter"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full  desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
          placeholder="filter"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
          placeholder="filter"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:flex-1 tablet1:flex desktop0:flex"
          placeholder="filter"
        />
      </div>
      {/* advance search desktop0 up */}
      <div
        {...getCollapseProps()}
        className=" flex tablet1:flex-col tablet2:flex-row desktop0:flex-row "
      >
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1   tablet1:inline desktop0:inline me-4"
          placeholder="filter"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1  tablet1:inline desktop0:inline me-4"
          placeholder="filter"
        />
        <input
          type="text"
          className="rounded-3xl tablet1:w-full desktop0:w-[25%] mb-4 desktop0:mb-0 w-full border border-gray-300 outline-none px-2 py-1 tablet1:inline desktop0:inline me-4"
          placeholder="filter"
        />
      </div>
    </div>
  );
}
