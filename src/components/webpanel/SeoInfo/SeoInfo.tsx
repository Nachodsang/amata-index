"use client";
import { useState } from "react";
export default function SeoInfo({state,setState}:any) {
  const [keywordState, setKeywordState] = useState([]);
  const onChangeKeyword = (e: any) => {
    setKeywordState(e.target.value.split(", "));
  };

  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div className="font-bold text-2xl text-slate-700">SEO</div>
      </div>
      <div className="py-4 flex flex-col gap-4">
        {keywordState && (
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold text-xl text-slate-700">
              Seo Keywords:{" "}
            </h1>
            {keywordState.map((i: any) => (
              <span className="text-white  font-bold text-xs p-2 bg-red-500 rounded-2xl">
                {i}
              </span>
            ))}
          </div>
        )}
        <textarea
          id="message"
          rows={5}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="SEO Keywords...."
          onChange={onChangeKeyword}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
        onClick={()=>{
          setState({...state,seo:{...state.seo,th:keywordState}})
        }}
          type="button"
          className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
