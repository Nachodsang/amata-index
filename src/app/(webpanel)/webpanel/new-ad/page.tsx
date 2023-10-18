"use client";
import Input from "@/components/webpanel/Input/Input";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AdContext } from "@/contexts/AdContext";
import FileInput from "@/components/webpanel/FileInput/FileInput";
export default function CreateNewAdPage() {
  const defaultAdState = {
    client: "",
    description: "",
    adTitle: "",
    image: "",
    link: "",
  };
  const [adState, setAdState] = useState(defaultAdState);
  const [selectedImage, setSelectedImage] = useState();
  const { addAd }: any = useContext(AdContext);
  const router = useRouter();

  const onSetClient = (e: any) => {
    setAdState({ ...adState, client: e.target.value });
  };
  const onSetDescription = (e: any) => {
    setAdState({ ...adState, description: e.target.value });
  };
  const onSetTitle = (e: any) => {
    setAdState({ ...adState, adTitle: e.target.value });
  };
  const onSetLink = (e: any) => {
    setAdState({ ...adState, link: e.target.value });
  };
  const onSetImage = (e: any) => {
    setAdState({ ...adState, image: e.target.value });
  };
  const onSaveAd = () => {
    const { client, adTitle, description, image, link }: any = adState;
    if (client?.length > 3 && adTitle?.length > 3 && description?.length > 3) {
      addAd(client, adTitle, description, image, link);
      setAdState({
        adTitle: "",
        client: "",
        description: "",
        image: "",
        link: "",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Ad has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/webpanel/ads");
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
  return (
    <div className="min-h-[100vh] rounded-xl bg-white ">
      {/* container */}
      <div className="mx-auto  max-w-[1440px] px-4  py-6">
        <h1 className="mb-4 text-center text-xl font-semibold  ">New Ad</h1>
        <div>
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              className="h-[300px] w-[300px] object-cover"
            />
          ) : (
            <div className="h-[300px] w-[300px] bg-slate-200"></div>
          )}
          <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
            Dimension: 500 x 500 pixel (auto resize & crop)
          </label>
          <FileInput
            path="upload-ad"
            objectState={true}
            state={adState}
            setState={setAdState}
            imageChange={imageChange}
            stateValue={"image"}
            multiple={false}
          />
        </div>
        {/* Client name */}
        <div className="mt-4 flex flex-col  gap-4">
          <Input
            label="Image URL"
            value={adState?.image}
            onChange={onSetImage}
            placeholder=""
            id=""
          />
          <Input
            label="Client"
            value={adState?.client}
            onChange={onSetClient}
            placeholder=""
            id=""
          />

          {/* Ad title */}

          <Input
            label="Ad Title"
            value={adState?.adTitle}
            onChange={onSetTitle}
            placeholder=""
            id=""
          />

          <Input
            label="Description"
            value={adState?.description}
            onChange={onSetDescription}
            placeholder=""
            id=""
          />
          <Input
            label="Link"
            value={adState?.link}
            onChange={onSetLink}
            placeholder=""
            id=""
          />
          <div className="flex justify-end">
            <button
              onClick={onSaveAd}
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
