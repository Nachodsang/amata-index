"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BlogSeoInfo({ state, setState, edit }: any) {
  const [seoState, setSeoState] = useState({});
  //   const onHandleSave = () => {
  //     if (edit) {
  //       setState({
  //         ...state,
  //         seo: {
  //           ...state.seo,
  //           th: thKeywordState,
  //           en: enKeywordState,
  //           jp: jpKeywordState,
  //           cn: cnKeywordState,
  //         },
  //       });
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "SEO has been updated!",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     } else {
  //       setState({
  //         ...state,
  //         seo: {
  //           ...state.seo,
  //           th: thKeywordState,
  //           en: enKeywordState,
  //           jp: jpKeywordState,
  //           cn: cnKeywordState,
  //         },
  //       });
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "SEO has been saved!",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   };
  return (
    <div className="flex w-full flex-col rounded-md border border-slate-300  bg-white p-4 shadow-sm">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div className="text-2xl font-bold text-slate-700">SEO</div>
      </div>
      <div className="flex w-full flex-col gap-4  py-4">
        <h1 className="text-xl text-start font-semibold text-slate-700">
          Seo Keywords:
        </h1>
        <textarea
          id="message"
          rows={3}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="SEO Keywords(TH)...."
          //   onChange={onChangeThKeyword}
          //   value={thKeywordState}
        ></textarea>
      </div>
      <div className="flex w-full flex-col gap-4  py-4">
        {/* {enKeywordState && (
          <div className="flex w-full flex-wrap items-center gap-2 ">
            <h1 className="text-xl font-semibold text-slate-700">
              Seo Keywords(EN):{" "}
            </h1>
            {enKeywordState.map((i: any, index: any) => (
              <span
                className="rounded-2xl  bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
        )} */}
        <h1 className="text-xl text-start font-semibold text-slate-700">
          Description
        </h1>
        <textarea
          id="message"
          rows={3}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="SEO Keywords(EN)...."
          //   onChange={onChangeEnKeyword}
          //   value={enKeywordState}
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          //   onClick={onHandleSave}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
