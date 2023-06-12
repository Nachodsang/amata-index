export default function CheckboxDropdown({ title, checkboxes }: any) {
  return (
    <div className="w-full bg-white absolute top-[50px] border border-red-800 rounded-md z-40">
      <div className="flex flex-col gap-y-6 p-6">
        <div className="border-b-4 border-red-400">
          <h1 className="text-center">{title}</h1>
        </div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div className="flex justify-end px-4 gap-4">
          <button className="rounded-md px-4 py-2 bg-red-600">aa</button>
          <button className="rounded-md px-4 py-2 bg-red-600">bb</button>
        </div>
      </div>
    </div>
  );
}
