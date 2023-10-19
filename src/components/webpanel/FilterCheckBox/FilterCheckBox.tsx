"use context";
import { useState } from "react";
export default function FilterCheckBox({
  _id,
  title,
  isCheck,
  onCheckFilter,
}: any) {
  const [checkState, setCheckState] = useState(isCheck);
  const onCheck = () => {
    setCheckState(!checkState);
    onCheckFilter({
      _id: _id,
      newValue: !checkState,
    });
  };
  return (
    <div className="flex justify-between">
      <p
        className={`${
          checkState ? "text-green-700 font-bold" : "text-slate-400 "
        } text-sm`}
      >
        {title}
      </p>
      <input
        style={{ colorScheme: `light` }}
        type="checkbox"
        // checked={i?.active}
        checked={checkState}
        onChange={onCheck}
        className="hover:cursor-pointer accent-green-700  bg-grey-700 text-red-500 "
      />
    </div>
  );
}
