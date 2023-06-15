import DropDown from "../DropDown/DropDown";

export default function FilterInfo() {
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>Filter</div>
      </div>
      <div>
        <DropDown />
      </div>
    </div>
  );
}
    