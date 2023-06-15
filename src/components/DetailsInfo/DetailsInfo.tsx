import Editor from "../Editor/Editor";
export default function DetailsInfo() {
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>Details</div>
      </div>
      <div>
        <Editor />
      </div>
    </div>
  );
}
