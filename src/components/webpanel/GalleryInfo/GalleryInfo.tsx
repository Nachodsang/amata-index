"use client";
import { useState } from "react";
import FileInput from "../FileInput/FileInput";

export default function GalleryInfo() {
  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div className="font-bold text-2xl text-slate-700">Gallery</div>
      </div>
      {selectedImage && (
        <img className="w-[300px]" src={URL.createObjectURL(selectedImage)} />
      )}
      <div>
        <FileInput imageChange={imageChange} />
      </div>
    </div>
  );
}
