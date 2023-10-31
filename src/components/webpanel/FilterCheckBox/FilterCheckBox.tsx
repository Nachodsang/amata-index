"use context";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Input from "../Input/Input";
export default function FilterCheckBox({
  _id,
  title,
  isCheck,
  onCheckFilter,
  onDelete,
  onEditfilter,
}: any) {
  const [checkState, setCheckState] = useState(isCheck);
  const [editModal, setEditModal] = useState(false);
  const [editState, setEditState] = useState(title);
  const onCheck = () => {
    setCheckState(!checkState);
    onCheckFilter({
      _id: _id,
      newValue: !checkState,
    });
  };
  const onEdit = () => {
    onEditfilter(_id, "filterTitle", editState);
    setEditModal(false);
  };

  return (
    <div className="flex justify-between ">
      <p
        className={`${
          checkState ? "text-green-700 font-bold" : "text-slate-400 "
        } text-sm`}
      >
        {title}
      </p>
      <div className="flex gap-2 items-center">
        <input
          style={{ colorScheme: `light` }}
          type="checkbox"
          // checked={i?.active}
          checked={checkState}
          onChange={onCheck}
          className="hover:cursor-pointer accent-green-700  bg-grey-700 text-red-500 "
        />
        <AiFillEdit
          onClick={() => setEditModal(true)}
          className="text-yellow-400 hover:cursor-pointer "
          size={20}
        />
        <RiDeleteBin6Fill
          className="text-red-400 hover:cursor-pointer"
          size={20}
          onClick={() => onDelete(_id)}
        />
      </div>
      <div
        className={` ${
          editModal ? "flex" : "hidden"
        }  h-[100vh] w-[100vw] fixed top-0 left-0 bg-black/30`}
      >
        <div
          onClick={() => setEditModal(false)}
          className=" h-[100vh] w-[100vw] fixed top-0 left-0"
        ></div>
        <div className="bg-white fixed top-[50%] left-[50%] px-4 translate-x-[-50%] rounded-md py-6">
          <label className="text-slate-600">New Filter Title</label>
          <div className="flex flex-col items-end">
            <Input
              required={true}
              label=""
              value={editState}
              onChange={(e: any) => setEditState(e.target.value)}
              id=""
              placeholder=""
            />
            <button
              onClick={onEdit}
              type="button"
              className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
