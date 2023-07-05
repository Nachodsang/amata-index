"use client";
import React from "react";
import ImageUploading from "react-images-uploading";

export function ImageUploader({ limit }: { limit: number }) {
  const [images, setImages] = React.useState([]);
  const maxNumber = limit;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit

    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper flex flex-col">
            <button
              className="rounded-xl border border-slate-300 px-4 py-4 "
              style={isDragging ? { backgroundColor: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button
              onClick={onImageRemoveAll}
              className="rounded-xl border border-slate-300 px-4 py-4 "
            >
              Remove all images
            </button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="1920" height="500" />
                <div className="image-item__btn-wrapper">
                  <button
                    className="rounded-xl border border-slate-300 px-4 py-4 "
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="rounded-xl border border-slate-300 px-4 py-4 "
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
