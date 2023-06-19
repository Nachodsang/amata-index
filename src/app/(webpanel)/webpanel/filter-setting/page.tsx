import CheckboxDropdown from "@/components/index/CheckboxDropdown/CheckboxDropdown";

export default function FilterSettingPage() {
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">
          Filter Setting
        </h1>
        <div className="flex justify-center w-full gap-4 flex-wrap">
          <div className="w-[25%] border border-slate-400 rounded-xl ">
            <div>Filter1</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter2</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter3</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter4</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter4</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter4</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter4</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
          <div className="w-[25%] border border-slate-400 rounded-xl">
            <div>Filter4</div>
            {/* <CheckboxDropdown isHidden="true" /> */}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
