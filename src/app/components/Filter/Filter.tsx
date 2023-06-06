export default function about() {
  return (
    <div className="w-full ">
      <div className="border  shadow-lg bg-white rounded-2xl mx-auto max-w-[1270px] h-[270px] p-4 ">
        {/* form container */}
        <div className="p-4 flex flex-col ">
          {/* label */}
          <div className="my-5">
            <h1 className="font-bold text-4xl ">Search</h1>
          </div>
          <div className="flex flex-col gap-y-4">
            {/* inputs */}
            <div>
              <div className="flex gap-4">
                <input
                  type="text"
                  className=" rounded-3xl border border-gray-300 outline-none px-2 py-1 "
                  placeholder="filter"
                />
                <input
                  type="text"
                  className="rounded-3xl flex-1 border border-gray-300 outline-none px-2 py-1"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="gap-x-4  flex">
              <input
                type="text"
                className="rounded-3xl w-[25%] border border-gray-300 outline-none px-2 py-1"
                placeholder="filter"
              />
              <input
                type="text"
                className="rounded-3xl w-[25%] border border-gray-300 outline-none px-2 py-1"
                placeholder="filter"
              />
              <input
                type="text"
                className="rounded-3xl w-[25%] border border-gray-300 outline-none px-2 py-1"
                placeholder="filter"
              />
              <input
                type="text"
                className="rounded-3xl w-[25%] border border-gray-300 outline-none px-2 py-1"
                placeholder="filter"
              />
            </div>
            {/* button */}
            <div className="flex justify-end gap-4">
              <button className="w-[25%] bg-gray-400 rounded-2xl py-2 text-white">
                Reset
              </button>
              <button className="w-[25%] bg-orange-600 rounded-2xl text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
