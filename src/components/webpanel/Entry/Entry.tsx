"use client";
import { useState } from "react";
import Input from "../Input/Input";
import { MdRestore, MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { SiCodereview } from "react-icons/si";
import { TiDelete } from "react-icons/ti";

import Swal from "sweetalert2";
export default function Entry({
  index,
  title,
  date,
  company,
  image,
  description,
  onChange,
  status,
  link,
  order,
  onChangeOrder,
  type,
  companyNameTh,
  _id,
  industry,
  onDelete,
  recycle,
  item,
}: any) {
  const [isCheck, setIsCheck] = useState(status);
  const [orderState, setOrderState] = useState(order);

  const onCheck = () => {
    type === "company" || type === "blog"
      ? onChange(_id, !isCheck)
      : onChange(title, !isCheck);
    setIsCheck(!isCheck);
  };
  const onClickChangeOrder = (e: any) => {
    setOrderState(e.target.value);
  };

  const onDeleteCompanyFromDb = async () => {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`,
      {
        method: "PUT",
        body: JSON.stringify({ _id: _id, type: "deleteF" }),
      }
    );
  };
  const onDeleteBlogFromDb = async () => {
    const response = fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`, {
      method: "PUT",
      body: JSON.stringify({ _id: _id, type: "deleteF" }),
    });
  };
  const onDeleteAdFromDb = async () => {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/ad-setting`,
      {
        method: "PUT",
        body: JSON.stringify({ _id: _id, type: "deleteF" }),
      }
    );
  };
  const onDeleteBannerFromDb = async () => {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/banner-setting`,
      {
        method: "PUT",
        body: JSON.stringify({ _id: _id, type: "deleteF" }),
      }
    );
  };

  const OnClickDeleteFromDb = () => {
    type === "company"
      ? Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#64748B",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            onDeleteCompanyFromDb();
            Swal.fire("Deleted!", "Item has been deleted.", "success");
          }
        })
      : type === "blog"
      ? Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#64748B",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            onDeleteBlogFromDb();
            Swal.fire("Deleted!", "Item has been deleted.", "success");
          }
        })
      : type === "ad"
      ? Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#64748B",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            onDeleteAdFromDb();
            Swal.fire("Deleted!", "Item has been deleted.", "success");
          }
        })
      : type === "banner"
      ? Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#64748B",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            onDeleteBannerFromDb();
            Swal.fire("Deleted!", "Item has been deleted.", "success");
          }
        })
      : "";
  };
  return (
    <tr
      className={`${
        index % 2 !== 0
          ? "bg-neutral-100/10"
          : index % 2 === 0 && recycle
          ? "bg-red-100/40"
          : "bg-neutral-100/50"
      } border-b  dark:border-neutral-200 `}
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium  ">
        {/* <a href={`/page/item/${link}`}> */}
        <img
          src={image}
          className={`${
            type === "banner"
              ? "h-[50px] w-[175px] "
              : type === "blog"
              ? "h-[100px] w-[180px] "
              : "h-[75px] w-[75px]"
          } object-cover shadow-xl`}
          alt="Ad image"
        />
        {type === "company" ? (
          <div className="">
            <h1 className="text-base">{company}</h1>
            <h1 className="text-xs">{companyNameTh}</h1>
          </div>
        ) : type === "blog" ? (
          <div className="">
            <h1 className="text-base">{title}</h1>
            <h1 className="text-xs text-slate-600">
              {item?.generalInfo?.type}
            </h1>
          </div>
        ) : (
          <h1>
            {title}
            {/* {image} */}
          </h1>
        )}
        {/* </a> */}
      </td>
      {type === "blog" ? (
        <td className="whitespace-nowrap px-6 py-4 text-xs">{industry}</td>
      ) : type === "company" ? (
        <td className="whitespace-nowrap px-6 py-4 text-xs">{industry}</td>
      ) : (
        <td className="whitespace-nowrap px-6 py-4 ">{company}</td>
      )}
      <td className="whitespace-nowrap px-6 py-4">
        {type === "company" ? (
          <p>{date}</p>
        ) : type === "blog" ? (
          <p>{date}</p>
        ) : (
          <p>{description}</p>
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {type === "company" ? (
          <div className="flex gap-[2px]">
            {!recycle ? (
              <a href={`/factory/companies/${link}`}>
                <button className="shadow-lg flex gap-1 items-center bg-green-400 px-4 py-2 rounded-md font-bold text-white">
                  <SiCodereview size={20} />
                  <h1>Preview</h1>
                </button>
              </a>
            ) : (
              <button
                className="shadow-lg flex gap-1 items-center bg-green-400 px-4  py-2 rounded-md font-bold text-white"
                onClick={() => onDelete(_id, false, true)}
                // the same delete function but restore this time
              >
                <MdRestore size={20} />
                <h1>Restore</h1>
              </button>
            )}
            <a href={`/webpanel/company/edit/${link}`}>
              <button className="shadow-lg flex gap-1 items-center bg-yellow-400 px-4  py-2 rounded-md font-bold text-white">
                <AiOutlineEdit size={20} />
                <h1>Edit</h1>
              </button>
            </a>

            {!recycle ? (
              <button
                className="shadow-lg flex items-center gap-1 bg-red-400 px-4  py-2 rounded-md font-bold text-white"
                onClick={() => onDelete(_id, true, false)}
              >
                <TiDelete size={20} />
                <h1>Delete</h1>
              </button>
            ) : (
              <button
                className="shadow-lg flex items-center gap-1 bg-red-400 px-4  py-2 rounded-md font-bold text-white"
                onClick={OnClickDeleteFromDb}
              >
                <TiDelete size={20} />
                <h1>Delete From Database</h1>
              </button>
            )}
          </div>
        ) : type === "blog" ? (
          <div className="flex gap-[2px]">
            {recycle ? (
              <button
                className="shadow-lg flex gap-1 items-center bg-green-400 px-4  py-2 rounded-md font-bold text-white"
                onClick={() => onDelete(_id, false, true)}
                // the same delete function but restore this time
              >
                <MdRestore size={20} />
                <h1>Restore</h1>
              </button>
            ) : (
              <a href={`/factory/blogs/${link}`}>
                <button className="shadow-lg flex gap-1 items-center bg-green-400 px-4 py-2 rounded-md font-bold text-white">
                  <SiCodereview size={20} />
                  <h1>Preview</h1>
                </button>
              </a>
            )}
            <a href={`/webpanel/blogs/edit/${link}`}>
              <button className="shadow-lg bg-yellow-400 px-4 flex items-center gap-1 py-2 rounded-md font-bold text-white">
                <AiOutlineEdit size={20} /> Edit
              </button>
            </a>
            {recycle ? (
              <button
                className="shadow-lg flex items-center gap-1 bg-red-400 px-4  py-2 rounded-md font-bold text-white"
                onClick={OnClickDeleteFromDb}
              >
                <TiDelete size={20} />
                <h1>Delete From Database</h1>
              </button>
            ) : (
              <button
                className="shadow-sm bg-red-400 px-4  flex items-center gap-1  py-2 rounded-md font-bold text-white"
                onClick={() => onDelete(_id, true)}
              >
                <TiDelete size={20} />
                Delete
              </button>
            )}
          </div>
        ) : (
          date
        )}
      </td>
      {
        <td className="whitespace-nowrap px-6 py-4 ">
          {!recycle ? (
            <input
              onChange={onCheck}
              className="mr-2 mx-auto mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault02"
              checked={isCheck}
            />
          ) : (
            <h1 className="shadow-lg text-red-200 py-2 bg-white rounded-md text-center">
              ITEM DEACTIVATED
            </h1>
          )}
          {/* shows order for type banner and ads */}
          {isCheck && !recycle && type !== "company" && type !== "blog" && (
            <div className="flex items-center gap-3">
              <label className="font-semibold text-slate-400">Order: </label>
              <input
                type="number"
                className="w-10 rounded-xl text-center"
                onChange={onClickChangeOrder}
                value={orderState}
              />
              <button
                className="shadow-xl  rounded-md px-4 bg-green-300 text-white font-bold"
                onClick={() => {
                  onChangeOrder(title, orderState);
                }}
              >
                Save
              </button>
            </div>
          )}
        </td>
      }
      {type !== "company" && type !== "blog" && (
        <td>
          {!recycle ? (
            <button
              onClick={() => onDelete(_id, true, false)}
              className="shadow-xl flex items-center gap-1 text-xs font-bold bg-red-300 rounded-md px-2 py-1 text-white"
            >
              <MdDeleteForever size={20} />
              DELETE
            </button>
          ) : (
            <div className="flex flex-row items-center gap-[1px]">
              <button
                onClick={() => onDelete(_id, false, true)}
                className="shadow-xl   flex items-center gap-1 text-xs font-bold bg-green-300 rounded-md px-2 py-1 text-white"
              >
                <MdDeleteForever size={20} />
                RESTORE
              </button>
              <button
                onClick={OnClickDeleteFromDb}
                className="shadow-xl  flex items-center gap-1 text-xs font-bold bg-red-300 rounded-md px-2 py-1 text-white"
              >
                <MdDeleteForever size={20} />
                DELETE FROM DATABASE
              </button>
            </div>
          )}
        </td>
      )}
    </tr>
  );
}
