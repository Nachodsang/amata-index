"use context";
import { useState } from "react";
export default function FilterCheckBox({ title, isCheck, onCheckFilter }: any) {
  const [checkState, setCheckState] = useState(isCheck);
  const onCheck = () => {
    setCheckState(!checkState);
    onCheckFilter({
      filterTitle: title,
      newValue: !checkState,
    });
  };
  return (
    <div className="flex justify-between">
      <p
        className={`${
          checkState ? "text-slate-800 font-bold" : "text-slate-400 "
        }`}
      >
        {title}
      </p>
      <input
        type="checkbox"
        // checked={i?.active}
        checked={checkState}
        onChange={onCheck}
        className="hover:cursor-pointer"
      />
    </div>
  );
}
