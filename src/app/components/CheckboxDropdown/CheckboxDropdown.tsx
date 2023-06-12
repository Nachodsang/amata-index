const CheckBox = ({ category, title }: { category: string; title: any }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className={`w-4 h-4 checkbox checkbox-accent hover:cursor-pointer rounded ring-2 border-none ${category}-ring`}
      />
      <label>{title}</label>
    </div>
  );
};
let arr: number[] = [];
for (let i = 0; i <= 20; i++) {
  arr.push(i);
}

export default function CheckboxDropdown({
  title,
  checkboxes,
  category,
  isHidden,
}: any) {
  const isSecondRow =
    title === "checkbox 5" || title === "checkbox 6" || title === "checkbox 7";

  return (
    <div
      className={`${
        isSecondRow ? "top-[150px]" : "top-[100px]"
      } w-full bg-white absolute   border ${category}-border rounded-md z-40 ${
        isHidden ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-6 p-6 w-full  ">
        <div className={`border-b-4 pb-6  ${category}-border`}>
          <h1 className="text-center ">{title}</h1>
        </div>
        <div className="grid grid-cols-2 tablet2:grid-cols-3 desktop0:grid-cols-4 w-full">
          {arr.map((i) => (
            <CheckBox category={category} title={i} />
          ))}
        </div>
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
