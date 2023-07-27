"use client";
import { useEffect, useState } from "react";
import FileInput from "../FileInput/FileInput";
import Swal from "sweetalert2";

export default function GalleryInfo({ state, setState, edit }: any) {
  const [galleryState, setGalleryState] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      // console.log(Object.values(e.target.files));
      setSelectedImage(Object.values(e.target.files));
    }
  };

  const onHandleSave = () => {
    if (edit) {
      setState({
        ...state,
        gallery: galleryState,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Gallery has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!edit) {
      setState({
        ...state,
        gallery: galleryState,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Gallery has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Please upload photos",
        timer: 2500,
      });
    }
  };
  useEffect(() => {
    edit && setGalleryState(state?.gallery);
  }, [state]);

  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div className="font-bold text-2xl text-slate-700">Gallery</div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full  bg-slate-300 rounded-2xl grid grid-cols-4 gap-4 p-6 ">
          {edit &&
            galleryState &&
            galleryState.map((i: any, index: any) => (
              <div className="w-[300px] h-[300px] " key={index}>
                <h1>Delete</h1>
                <img src={i} />
              </div>
            ))}
          {/* {JSON.stringify(galleryState)} */}
          {!edit && (
            <h1 className="m-auto text-2xl font-bold text-white">
              No image selected
            </h1>
          )}
        </div>

        {selectedImage && (
          <div className="flex flex-wrap gap-2">
            {selectedImage.map((i: any, index: any) => (
              <img
                key={index}
                className="w-[300px]"
                src={URL.createObjectURL(i)}
              />
            ))}
          </div>
        )}

        <FileInput
          imageChange={imageChange}
          objectState={false}
          state={galleryState}
          setState={setGalleryState}
          path="gallery-upload"
          stateValue={"gallery"}
          multiple={true}
        />
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
