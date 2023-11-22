"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";
import { RxTriangleDown } from "react-icons/rx";

export default function AntDropDown({
  onFoldDropDown,
  title,
  list,
  state,
  setState,
}: any) {
  const items: MenuProps["items"] = list.map((i: any, index: any) => ({
    label: i.toUpperCase(),
    key: index,
  }));
  const onClick: MenuProps["onClick"] = ({ key }: any) => {
    title == "Categories" &&
      items &&
      message.success(`CATEGORY: ${list[key].toUpperCase()}`);
    setState(list[key]);
  };
  return (
    <Dropdown menu={{ items, onClick }} trigger={["click"]}>
      {title == "Categories" ? (
        <button
          className=" flex w-full items-center justify-center rounded-3xl border border-[rgb(2,131,206)]   outline-none ring-[rgb(2,131,206)] transition-all  hover:cursor-pointer  hover:text-black focus:ring-2 tablet2:w-[30%] desktop0:w-[30%]"
          onClick={onFoldDropDown}
        >
          <div className="hover:bg-[rgb(2,131,206)] justify-between rounded-3xl px-2 py-1 hover:text-white w-full text-center  text-[rgb(2,131,206)] flex hover:cursor-pointer">
            <h1 className="uppercase">{state || title}</h1>
            <RxTriangleDown size={20} className="" />
          </div>
        </button>
      ) : (
        <button
          className=" flex w-full items-center justify-center rounded-3xl border  text-slate-400  ring-[rgb(2,131,206)] border-gray-300   outline-none  transition-all  hover:cursor-pointer   focus:ring-2 tablet2:w-[30%] desktop0:w-[30%]"
          onClick={onFoldDropDown}
        >
          <div className=" justify-between rounded-3xl px-2 py-1 w-full text-center   flex hover:cursor-pointer">
            <h1 className="uppercase text-base">{state || title}</h1>
            <RxTriangleDown size={20} className="" />
          </div>
        </button>
      )}
    </Dropdown>
  );
}
