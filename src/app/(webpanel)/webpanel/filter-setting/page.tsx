import CheckboxDropdown from "@/components/CheckboxDropdown/CheckboxDropdown";

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
      </div>
    </div>
  );
}
