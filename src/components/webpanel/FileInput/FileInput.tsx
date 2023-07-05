"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function FileInput({
  path,
  imageChange,
  setState,
  state,
  objectState,
  stateValue,
}: any) {
  const [file, setFile] = useState<File>();

  const onBrowseImage = (e: any) => {
    setFile(e.target.files?.[0]);
    imageChange(e);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch(`/api/${path}`, {
        method: "POST",
        body: data,
      });

      // handle the error
      if (!res.ok) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops...",
          text: "Please enter valid inputs!",
          timer: 1500,
        });
        throw new Error(await res.text());
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Image has been uploaded",
          showConfirmButton: false,
          timer: 1500,
        });
        // response return
        const response = await res.json();

        objectState
          ? setState({ ...state, [stateValue]: response.image })
          : setState(response.image);
      }
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="relative m-0 mb-2 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        name="file"
        id="formFile"
        onChange={onBrowseImage}
      />

      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Upload
        </button>
      </div>
    </form>
  );
}
