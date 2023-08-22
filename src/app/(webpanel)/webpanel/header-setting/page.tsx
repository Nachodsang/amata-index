"use client";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
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
  const [topBannerImage, setTopBannerImage] = useState();
  const [lowBannerImage, setLowBannerImage] = useState();
  const [topBanner, setTopBanner] = useState();
  const [lowBanner, setLowBanner] = useState();
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const topBannerChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setTopBannerImage(e.target.files[0]);
    }
  };
  const lowBannerChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setLowBannerImage(e.target.files[0]);
    }
  };

  // Page title setting
  const updatePageTitle = (e: any) => {
    setPageTitle(e.target.value);
  };
  const onSavePageTitle = () => {
    if (pageTitle.length > 4) {
      updatePageSetting("pageTitle", pageTitle);
      // setPageTitle("");
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
    }
  };
  // Page Description setting
  const updatePageDescription = (e: any) => {
    setPageDescription(e.target.value);
  };
  const onSavePageDescription = () => {
    if (pageDescription.length > 4) {
      updatePageSetting("description", pageDescription);
      // setPageDescription("");

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
    }
  };
  // change header core color
  const updateCoreHeaderColor = (e: any) => {
    setCoreHeaderColor(e.target.value);
  };
  const onSaveCoreHeaderColor = () => {
    if (coreHeaderColor.length > 4) {
      updatePageSetting("coreHeaderColor", coreHeaderColor);
      // setCoreHeaderColor("");
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
    }
  };
  // change core color
  const updateCoreColor = (e: any) => {
    setCoreColor(e.target.value);
  };
  const onSaveCoreColor = () => {
    if (coreColor.length > 4) {
      updatePageSetting("coreColor", coreColor);
      // setCoreColor("");
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
    }
  };
  // Update Cover Image
  const updateCoverImage = (e: any) => {
    setCoverImage(e.target.value);
  };
  const onSaveCoverImageURL = () => {
    if (coverImage.length > 15) {
      updatePageSetting("coverImage", coverImage);
      // setCoverImage("");
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
    }
  };

  const onTopBannerSave = () => {
    updatePageSetting("topBanner", topBanner);
  };
  const onLowBannerSave = () => {
    updatePageSetting("footerBanner", lowBanner);
  };

  useEffect(() => {
    setPageTitle(pageSettingWebpanel?.pageTitle);
    setPageDescription(pageSettingWebpanel?.description);
    setThemeColor(pageSettingWebpanel?.themeColor);
    setCoreColor(pageSettingWebpanel?.coreColor);
    setCoreHeaderColor(pageSettingWebpanel?.coreHeaderColor);
  }, [pageSettingWebpanel]);
  // save image
  // const handleClickSubmitImg = async (event: SyntheticEvent) => {
  //   event.preventDefault();
  //   let img_fileName = "";
  //   if (coverImage) {
  //     const json = await uploadToServer(coverImage);

  //     img_fileName = json.fileName;

  //     // setModelEditorImg(img_fileName);
  //   }
  // };
  // const uploadToClient = (event: any) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const i = event.target.files[0];

  //     setCoverImage(i);
  //     //  setCreateObjectURL(URL.createObjectURL(i));
  //   }
  //   event.target.value = null;
  // };
  // const uploadToServer = async (file: any) => {
  //   const body = new FormData();

  //   body.append("file", file);
  //   body.append("folderName", "editor");
  //   const response = await fetch("/api1/file", {
  //     method: "POST",
  //     body,
  //   });
  //   return response.json();
  // };
  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">
          Page Setting
        </h1>
        {/* title setting */}
        <div className="flex flex-col items-start">
          <label htmlFor="">Page Title</label>
          <Input
            onChange={updatePageTitle}
            value={pageTitle}
            placeholder="image url"
            id="image-url"
            label=""
          />
          <div className="flex w-full justify-end">
            <button
              onClick={onSavePageTitle}
              type="button"
              className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Description</label>
          <Input
            label=""
            onChange={updatePageDescription}
            value={pageDescription}
            placeholder="image url"
            id="image-url"
          />
          <div className="flex w-full justify-end">
            <button
              onClick={onSavePageDescription}
              type="button"
              className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Theme Color (Hex or RGB)</label>
          <Input
            onChange={updateThemeColor}
            label=""
            value={themeColor}
            placeholder="image url"
            id="image-url"
          />
          <div className="flex w-full justify-end">
            <button
              onClick={onSaveThemeColor}
              type="button"
              className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Core Header Color (Hex or RGB)</label>
          <Input
            onChange={updateCoreHeaderColor}
            label=""
            value={coreHeaderColor}
            placeholder="image url"
            id="image-url"
          />
          <div className="flex w-full justify-end">
            <button
              onClick={onSaveCoreHeaderColor}
              type="button"
              className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Core Color (Hex or RGB)</label>
          <Input
            onChange={updateCoreColor}
            label=""
            value={coreColor}
            placeholder="image url"
            id="image-url"
          />
          <div className="flex w-full justify-end">
            <button
              onClick={onSaveCoreColor}
              type="button"
              className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-full border-b border-slate-300 py-4 ">
            <h1 className="text-start">Cover Image</h1>
          </div>
          <div className="w-full py-4">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                className="h-[300px] w-full object-cover"
              />
            ) : pageSettingWebpanel?.coverImage ? (
              <img
                src={pageSettingWebpanel?.coverImage}
                className="h-[300px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[300px] w-full bg-slate-200 ">
                <h1 className="m-auto text-4xl font-bold text-slate-400">
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

              {/* <Input
                label="Image URL"
                value={coverImage}
                onChange={updateCoverImage}
                placeholder="image url"
                id="image-url"
              /> */}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onSaveCoverImageURL}
            type="button"
            className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
        {/* banner for blog page */}
        <div className="flex flex-col items-start">
          <div className="w-full border-b border-slate-300 py-4 ">
            <h1 className="text-start">Top Banner (Blog Page)</h1>
          </div>
          <div className="w-full py-4">
            {topBannerImage ? (
              <img
                src={URL.createObjectURL(topBannerImage)}
                className="h-[300px] w-full object-cover"
              />
            ) : pageSettingWebpanel?.topBanner ? (
              <img
                src={pageSettingWebpanel?.topBanner}
                className="h-[300px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[300px] w-full bg-slate-200 ">
                <h1 className="m-auto text-4xl font-bold text-slate-400">
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
                imageChange={topBannerChange}
                state={topBanner}
                setState={setTopBanner}
                objectState={false}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={onTopBannerSave}
                type="button"
                className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-full border-b border-slate-300 py-4 ">
            <h1 className="text-start">Footer Banner (Blog Page)</h1>
          </div>
          <div className="w-full py-4">
            {lowBannerImage ? (
              <img
                src={URL.createObjectURL(lowBannerImage)}
                className="h-[300px] w-full object-cover"
              />
            ) : pageSettingWebpanel?.footerBanner ? (
              <img
                src={pageSettingWebpanel?.footerBanner}
                className="h-[300px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[300px] w-full bg-slate-200 ">
                <h1 className="m-auto text-4xl font-bold text-slate-400">
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
                imageChange={lowBannerChange}
                state={lowBanner}
                setState={setLowBanner}
                objectState={false}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={onLowBannerSave}
                type="button"
                className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              >
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
