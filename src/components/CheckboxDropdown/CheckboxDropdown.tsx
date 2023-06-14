import { useState } from "react";
// checkbox component
const CheckBox = ({
  category,
  title,
  onCheckBoxSelection,
  value,
}: {
  category: string;
  title: any;
  onCheckBoxSelection: any;
  value: any;
  // isChecked: any;
  // setIsChecked: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onCheck = () =>
    // value: any, title: any
    {
      setIsChecked(!isChecked);
      // onCheckBoxSelection(value, title);
    };

  // console.log({ title, isChecked });
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className={`w-4 h-4 checkbox checkbox-accent hover:cursor-pointer rounded ring-2 border-none ${category}-ring`}
        value={title}
        onClick={onCheck}
        checked={isChecked}
        ////={() => onCheckBoxSelection(value, title)}
        onChange={() => {
          onCheckBoxSelection(value, title);
        }}
      />
      <label>{title}</label>
    </div>
  );
};
// arr of checkbox generator
let arr: number[] = [];
for (let i = 0; i <= 20; i++) {
  arr.push(i);
}

export default function CheckboxDropdown({
  title,
  checkboxes,
  category,
  isHidden,
  onFoldDropDown,
  onCheckBoxSelection,
  onClearSelection,
  value,
}: any) {
  // const [isChecked, setIsChecked] = useState(false);
  // second row dropdowns
  const isSecondRow =
    title === "checkbox 5" || title === "checkbox 6" || title === "checkbox 7";
  // confirm handle
  const onConfirm = () => {
    onFoldDropDown();
  };

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
          {arr.map((i, index) => (
            <CheckBox
              onCheckBoxSelection={onCheckBoxSelection}
              category={category}
              title={i}
              key={index}
              value={value}
            />
          ))}
        </div>
        <div className="flex justify-end  gap-1 font-semibold text-white">
          <button
            className={`rounded-md px-4 py-2 bg-green-500`}
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            onClick={onClearSelection}
            className="rounded-md px-4 py-2 font-semibold bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
