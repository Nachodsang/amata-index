"use client";
import { useState } from "react";
import FileInput from "../FileInput/FileInput";
import Input from "../Input/Input";
export default function BlogGeneralInfo({ edit }: { edit: boolean }) {
  const [imgState, setImgState] = useState(null);
  const [generalInfoState, setGeneralInfoState] = useState({ coverImage: "" });
  const coverImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState(e.target.files[0]);
    }
  };
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-slate-300 bg-white p-4 shadow-sm">
      <div className="max-w-[1440px]  mx-auto w-full">
        <div className="flex flex-cols justify-start border-b border-slate-300 py-2">
          <div className="text-2xl font-bold text-slate-600">General</div>
        </div>
        <div className="flex gap-4   ">
          <div className="">
            {/* blog Image */}
            <div className="flex-col flex ">
              {imgState ? (
                <img
                  src={URL.createObjectURL(imgState)}
                  className="h-[300px] w-[800px] object-cover"
                />
              ) : edit && generalInfoState?.coverImage ? (
                <img
                  src={generalInfoState?.coverImage}
                  className="h-[300px] w-[800px] object-cover"
                />
              ) : (
                <img
                  src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                  className="h-[300px] w-[800px] object-cover"
                />
              )}
              <div className="mb-3">
                <p className="mb-2 inline-block text-xs text-red-500 dark:text-neutral-200 ">
                  Dimension: 500 x 500 pixel (auto resize & crop)
                </p>
                <FileInput
                  imageChange={coverImageChange}
                  objectState={false}
                  state={generalInfoState}
                  setState={setGeneralInfoState}
                  path="blog-image-upload"
                  stateValue={"blogImage"}
                  multiple={false}
                />
              </div>
              {/* logo upload */}
            </div>
          </div>
          {/* Inputs */}
          <div className=" w-full flex flex-col p-4">
            <Input label={"Blog Title"} />

            <div className="flex gap-4">
              <Input label={"Company"} />
              <Input label={"Blog URL"} />
            </div>
            <div className="flex gap-4">
              <Input label={"Type"} />
              <Input label={"Review"} />
            </div>
            <div className="flex gap-4">
              <Input label={"Industry"} />
              <Input label={"Language"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          //   onClick={onHandleSave}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
