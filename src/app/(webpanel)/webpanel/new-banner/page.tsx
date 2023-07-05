"use client";
import Input from "@/components/webpanel/Input/Input";
import Swal from "sweetalert2";
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
      client?.length > 3 &&
      bannerTitle?.length > 3 &&
      description?.length > 3
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid inputs!",
      });
    }
  };
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  useEffect(() => {}, [bannerState]);
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
            <div className="h-[300px] w-full bg-slate-200"></div>
          )}

          <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
            Dimension: 1920 x 500 pixel (auto resize & crop)
          </label>
          <FileInput
            imageChange={imageChange}
            path={"upload-banner"}
            setState={setBannerState}
            state={bannerState}
            objectState={true}
          />
        </div>
        {/* Client name */}
        <div className="mt-4 flex flex-col gap-4">
          <Input
            label="Image URL"
            value={bannerState?.image}
            onChange={onSetImage}
          />
          <Input
            label="Client"
            value={bannerState?.client}
            onChange={onSetClient}
          />
          {/* Banner title */}
          <Input
            label="Banner Title"
            value={bannerState?.bannerTitle}
            onChange={onSetTitle}
          />
          <Input
            label="Description"
            value={bannerState?.description}
            onChange={onSetDescription}
          />
          <Input label="Link" value={bannerState?.link} onChange={onSetLink} />
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
