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
      <p className={`${checkState ? "text-black" : "text-slate-400 "}`}>
        {title}
      </p>
      <input
        type="checkbox"
        // checked={i?.active}
        checked={checkState}
        onChange={onCheck}
      />
    </div>
  );
}
