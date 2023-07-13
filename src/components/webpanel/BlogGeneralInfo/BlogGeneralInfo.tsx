"use client";
import { useState } from "react";
import FileInput from "../FileInput/FileInput";
import Input from "../Input/Input";
import { IblogGeneralInfo } from "@/service/models/blogSetting.model";
import Swal from "sweetalert2";
export default function BlogGeneralInfo({
  edit,
  state,
  setState,
}: {
  edit: boolean;
  state: any;
  setState: any;
}) {
  const initialState = {
    blogUrl: "",
    coverImage: "",
    type: "",
    video: "",
    logo: "",
    companyReview: "",
    industry: "",
    language: "",
  };
  const [imgState, setImgState] = useState(null);
  const [generalInfoState, setGeneralInfoState] = useState(initialState);
  const coverImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState(e.target.files[0]);
    }
  };
  const onHandleSave = () => {
    if (edit) {
      setState({ ...state, generalInfo: generalInfoState });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "general info has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setState({ ...state, generalInfo: generalInfoState });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "general info has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-slate-300 bg-white p-4 shadow-sm">
      <div className="max-w-[1440px]  mx-auto w-full">
        <div className="flex flex-cols justify-start border-b border-slate-300 py-2">
          <div className="text-2xl font-bold text-slate-600">General</div>
        </div>
        <div className="flex flex-col gap-4 mt-4  ">
          <div className="">
            {/* blog Image */}
            <div className="flex-col items-center flex ">
              {imgState ? (
                <img
                  src={URL.createObjectURL(imgState)}
                  className="h-[600px] w-[1200px] object-cover"
                />
              ) : edit && generalInfoState?.coverImage ? (
                <img
                  src={generalInfoState?.coverImage}
                  className="h-[600px] w-[1200px] object-cover"
                />
              ) : (
                <img
                  src="https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"
                  className="h-[600px] w-[1200px] object-cover"
                />
              )}
              <div className="mb-3  w-full">
                <p className="mb-2 inline-block text-xs text-red-500 dark:text-neutral-200 ">
                  Dimension: height x width pixel (auto resize & crop)
                </p>
                <FileInput
                  imageChange={coverImageChange}
                  objectState={true}
                  state={generalInfoState}
                  setState={setGeneralInfoState}
                  path="blog-image-upload"
                  stateValue={"coverImage"}
                  multiple={false}
                />
              </div>
              {/* logo upload */}
            </div>
          </div>
          {/* Inputs */}
          <div className=" w-full flex flex-col ">
            <Input
              placeholder="blog title"
              label={"**Blog Title"}
              onChange={(e: any) =>
                setState({ ...state, blogTitle: e.target.value })
              }
            />

            <div className="flex gap-4">
              <Input
                placeholder="company"
                label={"Company"}
                onChange={(e: any) =>
                  setState({ ...state, company: e.target.value })
                }
              />
              <Input
                placeholder="blog URL"
                label={"**Blog URL"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    blogUrl: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex gap-4">
              <Input
                placeholder="blog type"
                label={"Type"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    type: e.target.value,
                  })
                }
              />
              <Input
                placeholder="company review"
                label={"Review"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyReview: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex gap-4">
              <Input
                label={"Industry"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    industry: e.target.value,
                  })
                }
              />
              <Input
                label={"Language"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    language: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onHandleSave}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
