import { ImSearch } from "react-icons/im";
export default function Filter() {
  return (
    <div className="w-full ">
      <div className="border  shadow-lg bg-white rounded-2xl mx-auto max-w-[1270px]  p-4 ">
        {/* form container */}
        <div className="p-4 flex flex-col ">
          {/* label */}
          <div className="my-5 flex gap-1 text-gray-600">
            <ImSearch size={45} />
            <h1 className="font-bold text-4xl ">Search</h1>
          </div>
          <div className="flex flex-col gap-y-4">
            {/* inputs */}
            <div>
              <div className="flex flex-col desktop0:flex-row tablet2:flex-row gap-4">
                <input
                  type="text"
                  className=" rounded-3xl border w-full tablet2:w-[30%] desktop0:w-[20%] border-gray-300 outline-none px-2 py-1 "
                  placeholder="filter"
                />
                <input
                  type="text"
                  className="rounded-3xl w-full tablet2:w-[70%] desktop0:w-[80%]  border border-gray-300 outline-none px-2 py-1"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="gap-x-4  flex flex-col desktop0:flex-row gap-4">
              <input
                type="text"
                className="rounded-3xl tablet1:w-full   desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden  tablet2:hidden  tablet1:flex desktop0:flex"
                placeholder="filter"
              />
              <input
                type="text"
                className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden tablet2:hidden tablet1:flex desktop0:flex"
                placeholder="filter"
              />
              <input
                type="text"
                className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden tablet2:hidden tablet1:flex desktop0:flex"
                placeholder="filter"
              />
              <input
                type="text"
                className="rounded-3xl tablet1:w-full desktop0:w-[25%] w-full border border-gray-300 outline-none px-2 py-1 hidden tablet2:hidden tablet1:flex desktop0:flex"
                placeholder="filter"
              />
            </div>
            {/* button */}
            <div className="flex justify-end gap-4 w-full">
              <button className="w-[25%]  bg-gray-400 rounded-2xl py-2 text-white">
                Reset
              </button>
              <button className="w-[75%] desktop0:w-[25%] bg-orange-600 rounded-2xl text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
