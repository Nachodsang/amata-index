"use client";
import { SyntheticEvent, useContext, useState } from "react";
import Input from "@/components/webpanel/Input/Input";

import { PageSettingContext } from "@/contexts/PageSettingContext";
import Swal from "sweetalert2";
import FileInput from "@/components/webpanel/FileInput/FileInput";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
export default function HeaderSettingPage() {
  const { updatePageSetting, pageSettingWebpanel }: any =
    useContext(PageSettingContext);
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [themeColor, setThemeColor] = useState("");
  const [coreColor, setCoreColor] = useState("");
  const [coreHeaderColor, setCoreHeaderColor] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // Page title setting
  const updatePageTitle = (e: any) => {
    console.log(e.target.value);
    setPageTitle(e.target.value);
  };
  const onSavePageTitle = () => {
    if (pageTitle.length > 4) {
      updatePageSetting("pageTitle", pageTitle);
      setPageTitle("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Page Title has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter new page title!",
      });
      console.log("please enter new page title");
    }
  };
  // Page Description setting
  const updatePageDescription = (e: any) => {
    console.log(e.target.value);
    setPageDescription(e.target.value);
  };
  const onSavePageDescription = () => {
    if (pageDescription.length > 4) {
      updatePageSetting("description", pageDescription);
      setPageDescription("");
      console.log("Description Updated");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Description Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter new page description!",
      });
      console.log("please enter new page Description ");
    }
  };
  // Update Theme Color
  const updateThemeColor = (e: any) => {
    setThemeColor(e.target.value);
  };
  const onSaveThemeColor = () => {
    if (themeColor.length > 4) {
      updatePageSetting("themeColor", themeColor);
      setThemeColor("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Theme Color has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select new Theme Color!",
      });
      console.log("please enter new theme color");
    }
  };
  // change header core color
  const updateCoreHeaderColor = (e: any) => {
    setCoreHeaderColor(e.target.value);
  };
  const onSaveCoreHeaderColor = () => {
    if (coreHeaderColor.length > 4) {
      updatePageSetting("coreHeaderColor", coreHeaderColor);
      setCoreHeaderColor("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Theme Color has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select new Theme Color!",
      });
      console.log("please enter new theme color");
    }
  };
  // change core color
  const updateCoreColor = (e: any) => {
    setCoreColor(e.target.value);
  };
  const onSaveCoreColor = () => {
    if (coreColor.length > 4) {
      updatePageSetting("coreColor", coreColor);
      setCoreColor("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Theme Color has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select new Theme Color!",
      });
      console.log("please enter new theme color");
    }
  };
  // Update Cover Image
  const updateCoverImage = (e: any) => {
    setCoverImage(e.target.value);
  };
  const onSaveCoverImageURL = () => {
    if (coverImage.length > 15) {
      updatePageSetting("coverImage", coverImage);
      setCoverImage("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Cover Image has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select new cover image!",
      });
      console.log("please enter new cover image");
    }
  };

  // save image
  const handleClickSubmitImg = async (event: SyntheticEvent) => {
    console.log("handleClickSubmitImg");

    event.preventDefault();
    let img_fileName = "";
    if (coverImage) {
      const json = await uploadToServer(coverImage);

      img_fileName = json.fileName;
      console.log(img_fileName);
      // setModelEditorImg(img_fileName);
      console.log("setModelEditorImg");
    }
  };
  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setCoverImage(i);
      //  setCreateObjectURL(URL.createObjectURL(i));
    }
    event.target.value = null;
  };
  const uploadToServer = async (file: any) => {
    const body = new FormData();
    console.log("posting");

    body.append("file", file);
    body.append("folderName", "editor");
    const response = await fetch("/api1/file", {
      method: "POST",
      body,
    });
    return response.json();
  };
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">
          Page Setting
        </h1>
        {/* title setting */}
        <div className="flex flex-col items-start">
          <label htmlFor="">Page Title</label>
          <Input onChange={updatePageTitle} value={pageTitle} />
          <div className="flex justify-end w-full">
            <button
              onClick={onSavePageTitle}
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Description</label>
          <Input onChange={updatePageDescription} value={pageDescription} />
          <div className="flex justify-end w-full">
            <button
              onClick={onSavePageDescription}
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Theme Color</label>
          <Input
            onChange={updateThemeColor}
            label="hex: #000000"
            value={themeColor}
          />
          <div className="flex justify-end w-full">
            <button
              onClick={onSaveThemeColor}
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Core Header Color</label>
          <Input
            onChange={updateCoreHeaderColor}
            label="hex: #000000"
            value={coreHeaderColor}
          />
          <div className="flex justify-end w-full">
            <button
              onClick={onSaveCoreHeaderColor}
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Core Color</label>
          <Input
            onChange={updateCoreColor}
            label="hex: #000000"
            value={coreColor}
          />
          <div className="flex justify-end w-full">
            <button
              onClick={onSaveCoreColor}
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="py-4 border-b w-full border-black ">
            <h1 className="text-start">Cover Image</h1>
          </div>
          <div className="py-4 w-full">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                className="w-full h-[300px] object-cover"
              />
            ) : (
              <div className="w-full h-[300px] bg-slate-200 flex ">
                <h1 className="m-auto font-bold text-slate-400 text-4xl">
                  Select Image to Preview
                </h1>
              </div>
            )}

            <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
              Dimension: 1920 x 500 pixel (auto resize & crop)
            </label>
            <div className="flex flex-col gap-4">
              <FileInput
                path="upload-cover-images"
                imageChange={imageChange}
                state={coverImage}
                setState={setCoverImage}
                objectState={false}
              />

              <Input
                label="Image URL"
                value={coverImage}
                onChange={updateCoverImage}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onSaveCoverImageURL}
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
