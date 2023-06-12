export default function CheckboxDropdown({ title, checkboxes, category }: any) {
  return (
    <div
      className={`w-full bg-white absolute top-[100px] border ${category}-border rounded-md z-40`}
    >
      <div className="flex flex-col gap-y-6 p-6">
        <div className={`border-b-4 pb-6  ${category}-border`}>
          <h1 className="text-center ">{title}</h1>
        </div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div className="flex justify-end px-4 gap-2 text-white">
          <button className={`rounded-md px-4 py-2 bg-green-500`}>
            Confirm
          </button>
          <button className="rounded-md px-4 py-2 bg-red-600">Clear</button>
        </div>
      </div>
    </div>
  );
}
