"use client";
import Input from "@/components/webpanel/Input/Input";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { BannerContext } from "@/contexts/bannerContext";
import FileInput from "@/components/webpanel/FileInput/FileInput";
export default function CreateNewBannerPage() {
  const defaultBannerState = {
    client: "",
    description: "",
    bannerTitle: "",
    image: "",
    link: "",
  };
  const [bannerState, setBannerState] = useState(defaultBannerState);
  const [selectedImage, setSelectedImage] = useState();
  const { addBanner }: any = useContext(BannerContext);
  const router = useRouter();

  const onSetClient = (e: any) => {
    setBannerState({ ...bannerState, client: e.target.value });
  };
  const onSetDescription = (e: any) => {
    setBannerState({ ...bannerState, description: e.target.value });
  };
  const onSetTitle = (e: any) => {
    setBannerState({ ...bannerState, bannerTitle: e.target.value });
  };
  const onSetLink = (e: any) => {
    setBannerState({ ...bannerState, link: e.target.value });
  };
  const onSetImage = (e: any) => {
    setBannerState({ ...bannerState, image: e.target.value });
  };
  const onSaveBanner = () => {
    const { client, bannerTitle, description, image, link }: any = bannerState;
    if (
      image &&
      client?.length >= 3 &&
      bannerTitle?.length >= 3
      //  &&
      // description?.length >= 3 &&
      // link?.length >= 3
    ) {
      addBanner(client, bannerTitle, description, image, link);
      setBannerState({
        bannerTitle: "",
        client: "",
        description: "",
        image: "",
        link: "",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Banner has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/webpanel/banner");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all with * / กรุณากรอกทุกช่องที่มี * ",
      });
    }
  };
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // useEffect(() => {}, [bannerState]);
  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">New Banner</h1>
        <div>
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              className="h-[300px] w-full object-cover"
            />
          ) : (
            <div className="h-[300px] w-full bg-slate-200 flex">
              <h1 className="text-center my-auto mx-auto text-slate-400 text-3xl">
                Banner Image
              </h1>
            </div>
          )}

          <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
            Dimension: 1920 x 500 pixel (auto resize & crop)
          </label>
        </div>
        {/* Client name */}
        <div className="mt-4 flex flex-col gap-3">
          {/* <div className="flex flex-col items-start">
            <label className="text-slate-300 text-sm">
              Image URL (from external) / ลิงค์รูปภาพจากภายนอก
            </label>
            <Input
              label=""
              value={bannerState?.image}
              onChange={onSetImage}
              placeholder={"url"}
              id="image-url"
              required={false}
            />
          </div> */}

          <div className="flex flex-col gap-y-2 bg-slate-50 border-l-4 border-red-300 p-4 rounded-xl">
            <div className="flex flex-col items-start w-full  ">
              <label className="text-red-400 text-sm">
                Select Image / เลือกรูปภาพ*
              </label>
              <FileInput
                multiple={false}
                imageChange={imageChange}
                path={"upload-banner"}
                setState={setBannerState}
                state={bannerState}
                objectState={true}
                stateValue={"image"}
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-red-400 text-sm">Client / ลูกค้า*</label>
              <Input
                label=""
                value={bannerState?.client}
                onChange={onSetClient}
                placeholder={"client*"}
                id="clinet"
                required={true}
              />
            </div>
            {/* Banner title */}
            <div className="flex flex-col items-start">
              <label className="text-red-400 text-sm">
                Banner Title / ชื่อโฆษณา*
              </label>
              <Input
                label=""
                value={bannerState?.bannerTitle}
                onChange={onSetTitle}
                placeholder={"title"}
                id="title"
                required={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-start px-4">
            <label className="text-slate-400 text-sm ">
              Description / คำอธิบาย
            </label>
            <Input
              label=""
              value={bannerState?.description}
              onChange={onSetDescription}
              placeholder={"description"}
              id="description"
              required={true}
            />
          </div>
          <div className="flex flex-col items-start  px-4">
            <label className="text-slate-400 text-sm">
              URL Link / ลิงค์URL
            </label>
            <Input
              label=""
              value={bannerState?.link}
              onChange={onSetLink}
              placeholder={"link"}
              id="link"
              required={true}
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={onSaveBanner}
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
