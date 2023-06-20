import DropDown from "../DropDown/DropDown";

export default function FilterInfo() {
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>Filter</div>
      </div>
      <div className="py-6 flex flex-wrap  gap-6">
        <DropDown title="dropdown1" />

        <DropDown title="dropdown1" />
        <DropDown title="dropdown2" />
        <DropDown title="dropdown3" />
        <DropDown title="dropdown4" />
        <DropDown title="dropdown5" />
      </div>
    </div>
  );
}
