"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function SeoInfo({ state, setState, edit }: any) {
  const [thKeywordState, setThKeywordState] = useState([]);
  const [enKeywordState, setEnKeywordState] = useState([]);
  const [jpKeywordState, setJpKeywordState] = useState([]);
  const [cnKeywordState, setCnKeywordState] = useState([]);
  const onChangeThKeyword = (e: any) => {
    setThKeywordState(e.target.value.split(","));
  };
  const onChangeEnKeyword = (e: any) => {
    setEnKeywordState(e.target.value.split(","));
  };
  const onChangeJpKeyword = (e: any) => {
    setJpKeywordState(e.target.value.split(","));
  };
  const onChangeCnKeyword = (e: any) => {
    setCnKeywordState(e.target.value.split(","));
  };
  const onHandleSave = () => {
    if (edit) {
      setState({
        ...state,
        seo: {
          ...state.seo,
          th: thKeywordState,
          en: enKeywordState,
          jp: jpKeywordState,
          cn: cnKeywordState,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "SEO has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setState({
        ...state,
        seo: {
          ...state.seo,
          th: thKeywordState,
          en: enKeywordState,
          jp: jpKeywordState,
          cn: cnKeywordState,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "SEO has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    edit && setThKeywordState(state?.seo?.th);
    edit && setEnKeywordState(state?.seo?.en);
    edit && setJpKeywordState(state?.seo?.jp);
    edit && setCnKeywordState(state?.seo?.cn);
  }, [state]);
  return (
    <div className="flex w-full flex-col rounded-md border border-slate-300  bg-white p-4 shadow-sm">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div className="text-2xl font-bold text-slate-700">SEO</div>
      </div>
      <div className="flex w-full flex-col gap-4  py-4">
        {thKeywordState && (
          <div className="flex w-full flex-wrap items-center gap-2 ">
            <h1 className="text-lg  text-slate-600">Seo Keywords(TH): </h1>
            {thKeywordState.map((i: any, index: any) => (
              <span
                className="rounded-2xl  bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
        )}
        <textarea
          id="message"
          rows={3}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="SEO Keywords(TH)...."
          onChange={onChangeThKeyword}
          value={thKeywordState}
        ></textarea>
      </div>
      <div className="flex w-full flex-col gap-4  py-4">
        {enKeywordState && (
          <div className="flex w-full flex-wrap items-center gap-2 ">
            <h1 className="text-lg  text-slate-600">Seo Keywords(EN): </h1>
            {enKeywordState.map((i: any, index: any) => (
              <span
                className="rounded-2xl  bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
        )}
        <textarea
          id="message"
          rows={3}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="SEO Keywords(EN)...."
          onChange={onChangeEnKeyword}
          value={enKeywordState}
        ></textarea>
      </div>
      <div className="flex w-full flex-col gap-4  py-4">
        {jpKeywordState && (
          <div className="flex w-full flex-wrap items-center gap-2 ">
            <h1 className="text-lg  text-slate-600">Seo Keywords(JP): </h1>
            {jpKeywordState.map((i: any, index: any) => (
              <span
                className="rounded-2xl  bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
        )}
        <textarea
          id="message"
          rows={3}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="SEO Keywords(JP)...."
          onChange={onChangeJpKeyword}
          value={jpKeywordState}
        ></textarea>
      </div>
      <div className="flex w-full flex-col gap-4  py-4">
        {cnKeywordState && (
          <div className="flex w-full flex-wrap items-center gap-2 ">
            <h1 className="text-lg  text-slate-600">Seo Keywords(CN): </h1>
            {cnKeywordState.map((i: any, index: any) => (
              <span
                className="rounded-2xl  bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
        )}
        <textarea
          id="message"
          rows={3}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="SEO Keywords(CN)...."
          onChange={onChangeCnKeyword}
          value={cnKeywordState}
        ></textarea>
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
