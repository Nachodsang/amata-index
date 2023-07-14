"use client";
import { useState } from "react";
import Input from "../Input/Input";
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
}: any) {
  const [isCheck, setIsCheck] = useState(status);
  const [orderState, setOrderState] = useState(order);

  const onCheck = () => {
    console.log("checking", _id);
    type === "company" ? onChange(_id, !isCheck) : onChange(title, !isCheck);
    setIsCheck(!isCheck);
  };
  const onClickChangeOrder = (e: any) => {
    setOrderState(e.target.value);
  };
  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-neutral-100" : "bg-neutral-200"
      } border-b  dark:border-neutral-200 `}
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium  ">
        <a href={link}>
          <img
            src={image}
            className={`${
              type === "banner"
                ? "h-[50px] w-[175px] "
                : type === "blog"
                ? "h-[100px] w-[180px] "
                : "h-[150px] w-[150px]"
            } object-cover`}
            alt="Ad image"
          />
          {type === "company" ? (
            <div className="">
              <h1>{company}</h1>
              <h1>{companyNameTh}</h1>
            </div>
          ) : type === "blog" ? (
            <div className="">
              <h1>{title}</h1>
              <h1>{company}</h1>
            </div>
          ) : (
            <h1>{title}</h1>
          )}
        </a>
      </td>
      <td className="whitespace-nowrap px-6 py-4 ">{company}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {type === "company" ? <p>{date}</p> : <p>{description}</p>}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {type === "company" ? (
          <div className="flex gap-1">
            <a href={`/factory/companies/${link}`}>
              <button className="bg-green-400 px-4 py-2 rounded-xl font-bold text-white">
                Preview
              </button>
            </a>
            <a href={`/webpanel/company/edit/${link}`}>
              <button className="bg-yellow-400 px-4  py-2 rounded-xl font-bold text-white">
                Edit
              </button>
            </a>
            <button className="bg-red-400 px-4  py-2 rounded-xl font-bold text-white">
              Delete
            </button>
          </div>
        ) : (
          date
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <input
          onChange={onCheck}
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault02"
          checked={isCheck}
        />
        {isCheck && type !== "company" && (
          <div className="flex items-center gap-3">
            <label>Order: </label>
            <input
              type="number"
              className="w-10 rounded-xl text-center"
              onChange={onClickChangeOrder}
              value={orderState}
            />
            <button
              className="bg-green-200 px-2 py-0 border-2 border-green-400 rounded-xl"
              onClick={() => {
                onChangeOrder(title, orderState);
              }}
            >
              Save
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
