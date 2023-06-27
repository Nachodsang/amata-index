"use client";
import { useState } from "react";
import Input from "../Input/Input";
import InputGroup from "../InputGroup/InputGroup";
import FileInput from "../FileInput/FileInput";
import DropDown from "../DropDown/DropDown";
const mockData = [1, 2, 3, 4, 5, 6, 7];

export default function GeneralInfo() {
  const defaultImgState = { logoImg: undefined, coverImg: undefined };
  const [imgState, setImgState] = useState(defaultImgState);
  const logoImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState({ ...imgState, logoImg: e.target.files[0] });
    }
  };
  const coverImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState({ ...imgState, coverImg: e.target.files[0] });
    }
  };

  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md flex flex-col p-4 gap-2">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>General</div>
      </div>
      <div className="flex justify-between w-full">
        {/* logo */}
        <div className="w-[25%]">
          {imgState?.logoImg ? (
            <img
              src={URL.createObjectURL(imgState?.logoImg)}
              className="w-[300px] h-[300px] object-cover"
            />
          ) : (
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              className="w-[300px] h-[300px] object-cover"
            />
          )}
          <div className="mb-3">
            <p className="mb-2 inline-block text-xs text-red-500 dark:text-neutral-200 ">
              Dimension: 500 x 500 pixel (auto resize & crop)
            </p>
            <FileInput imageChange={logoImageChange} />
          </div>
          {/* logo upload */}
        </div>
        {/* cover */}
        <div className="w-[75%]">
          {imgState?.coverImg ? (
            <img
              src={URL.createObjectURL(imgState?.coverImg)}
              className="w-[1500px] h-[300px] object-cover"
            />
          ) : (
            <img
              src="https://industrial.frasersproperty.co.th/storage/updates/blog/2022/10/5-factors-to-consider-when-choosing-a-location-to-rent-a-Factory/img-08.jpg"
              className="w-[1500px] h-[300px] object-cover"
            />
          )}

          <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
            Dimension: 1920 x 500 pixel (auto resize & crop)
          </label>
          <FileInput imageChange={coverImageChange} />
          {/* video */}

          <Input label="Video URL" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* <InputGroup /> */}

        <div className="border-l-4 border-red-400 bg-slate-100 rounded-md p-4">
          <Input label="*Profile URL:eg.factory-name-thailand" />
        </div>
        <div className="flex flex-flow justify-between w-full">
          <div className="w-[30%]">
            <Input label="Company Name(TH)" />
          </div>
          <div className="w-[30%]">
            <Input label="Company Name(EN)" />
          </div>
          <div className="w-[30%]">
            <Input label="Company Name(JP)" />
          </div>
        </div>
        <div className="flex flex-flow justify-between w-full">
          <div className="w-[30%]">
            <Input label="Company Name(CN)" />
          </div>
          <div className="w-[30%]">
            <DropDown
              title={"Industry"}
              checkBox={false}
              filterList={mockData}
              type="dropdown"
            />
          </div>
          <div className="w-[30%]">
            <DropDown
              title={"Nationality"}
              checkBox={false}
              filterList={mockData}
              type="dropdown"
            />
          </div>
        </div>
      </div>
      {/* save button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
