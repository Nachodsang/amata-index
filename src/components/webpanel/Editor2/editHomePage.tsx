"use client";
// import Editor from "@/components/webpanel/editor";
import QuillEditor from "@/components/webpanel/QuillEditor2/quillEditor";
import { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Interface } from "readline";

import { IGroup, IGrid, IContent } from "@/service/models/companySetting.model";

const EditHomePage = ({ state, setState, edit }: any) =>
  // { _model }: { _model: IHomePage }
  {
    // const [model, setModel] = useState<IHomePage>(_model != null ? _model : { title: '', title2: '', group: [] })
    const [isStop, setIsStop] = useState(false);
    const [model, setModel] = useState<IGroup>({ grid: [] });
    const [modelAdd, setModelAdd] = useState<IGrid>();
    const [modelEditor, setModelEditor] = useState<any>();
    const [modelEditorContent, setModelEditorContent] = useState<any>();

    const returnOnchangeContent = (content: string) => {
      // console.log(content);
      if (modelEditor) {
        setModelEditorContent(content);
        // console.log(b);
      }
    };
    useEffect(() => {
      // !isStop && edit && setModel(state?.content);
      console.log("set model");
      console.log(state?.content?.grid?.length);
      console.log(!isStop);
      console.log(edit);
      if (!isStop && edit && state?.content?.grid?.length > 0) {
        setModel(state?.content);
        console.log("set model2");
        setIsStop(true);
      }

      console.log("xxxx");
      console.log(state);
    }, [state]);
    useEffect(() => {
      if (modelEditor) {
        let _model = { ...model };
        console.log("editort");

        if (_model) {
          _model.grid[modelEditor.indexGrid].contents[
            modelEditor.indexContent
          ].contentHTML = modelEditorContent;
        }
        // console.log(_model);
        setModel(_model);
      }
    }, [modelEditorContent]);

    useEffect(() => {
      if (modelAdd) {
        let _model = { ...model };
        console.log(_model);
        if (_model) {
          _model.grid?.push(modelAdd);
          setModel(_model);
          console.log(_model);
        }
      }
    }, [modelAdd]);

    const deleteGrid = (indexGrid: number) => {
      let editModel: any[] = [];

      let _model = { ...model };
      if (_model) {
        _model.grid.map((item: any, _index: number) => {
          if (indexGrid != _index) {
            editModel.push(item);
          }
        });
        _model.grid = editModel;
        setModel(_model);
      }
    };

    const moveUPGrid = (indexGrid: number) => {
      let _model = { ...model };
      if (_model) {
        if (indexGrid > 0) {
          var arr = _model.grid;
          var x = indexGrid;
          var temp = arr[x];
          arr[x] = arr[x - 1];
          arr[x - 1] = temp;
          setModel(_model);
        }
      }
    };

    const moveDOWNGrid = (indexGrid: number) => {
      let _model = { ...model };
      if (_model) {
        if (indexGrid < _model.grid.length - 1) {
          var arr = _model.grid;
          var x = indexGrid;
          var temp = arr[x];
          arr[x] = arr[x + 1];
          arr[x + 1] = temp;
          setModel(_model);
        }
      }
    };

    const uploadToServer = async (file: any) => {
      // const body = new FormData();

      // body.append("file", file);
      // body.append("folderName", "editor");
      // const response = await fetch("/a", {
      //   method: "POST",
      //   body,
      // });
      const data = new FormData();
      data.set("file", file);

      const res = await fetch(`/api/company-cover-upload`, {
        method: "POST",
        body: data,
      });
      return res.json();
    };

    const uploadToClientImg = async (
      event: any,
      indexGrid: number,
      indexContent: number
    ) => {
      // console.log('uploadToClientImg');

      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        const json = await uploadToServer(i);

        const img_fileName = json.image;
        // console.log(img_fileName);
        let _model = { ...model };
        _model.grid[indexGrid].contents[indexContent].url = img_fileName;
        setModel(_model);
      }
    };

    useEffect(() => {
      console.log("initTw");

      document.getElementById("initTw")?.click();
      setState({ ...state, content: model });
    }, [model]);

    return (
      <div>
        {/* {JSON.stringify(modelEditor)} */}
        <button
          type="button"
          data-te-toggle="modal"
          data-te-target="#addModel"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="hover:bg-primary-600  focus:bg-primary-600 active:bg-primary-700 m-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => {}}
        >
          Add
        </button>

        {model && model.grid
          ? model.grid.map((itemGrid: IGrid, indexGrid: number) => (
              <div key={indexGrid} className="hover:bg-slate-200">
                <div className="flex justify-end">
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className=" hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 m-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => {
                      moveUPGrid(indexGrid);
                    }}
                  >
                    UP Grid
                  </button>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="hover:bg-primary-600  focus:bg-primary-600 active:bg-primary-700 m-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => {
                      moveDOWNGrid(indexGrid);
                    }}
                  >
                    DOWN Grid
                  </button>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="m-1 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                    onClick={() => {
                      deleteGrid(indexGrid);
                    }}
                  >
                    Delete Grid
                  </button>
                </div>
                <div className={`${itemGrid.className} p-4 `}>
                  {itemGrid.contents
                    ? itemGrid.contents.map(
                        (itemContent: IContent, indexContent: number) =>
                          itemContent.type == "editor" ? (
                            <div
                              className={`${itemContent.className} mb-10 border-4 border-double border-sky-200 hover:bg-slate-50`}
                              key={indexContent}
                              onClick={() => {
                                setModelEditor({
                                  indexGrid: indexGrid,
                                  indexContent: indexContent,
                                  model: itemContent,
                                });
                              }}
                            >
                              <div
                                className=" relative mx-auto my-3 w-[200px]"
                                data-te-input-wrapper-init
                              >
                                <input
                                  type="text"
                                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  placeholder="Example label"
                                  onChange={(event) => {
                                    let _model = { ...model };
                                    _model.grid[indexGrid].contents[
                                      indexContent
                                    ].className = event.target.value;
                                    setModel(_model);
                                  }}
                                  value={itemContent.className}
                                  disabled
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                  Class
                                </label>
                              </div>
                              <button
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className=" hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 m-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                onClick={() => {
                                  let _model = { ...model };
                                  if (
                                    _model.grid[indexGrid].contents[
                                      indexContent
                                    ].show == null
                                  ) {
                                    _model.grid[indexGrid].contents[
                                      indexContent
                                    ].show = true;
                                  } else {
                                    _model.grid[indexGrid].contents[
                                      indexContent
                                    ].show =
                                      !_model.grid[indexGrid].contents[
                                        indexContent
                                      ].show;
                                  }
                                  console.log(
                                    `indexGrid:${indexGrid},indexContent:${indexContent}`
                                  );
                                  setModel(_model);
                                }}
                              >
                                Edit Content
                              </button>
                              {itemContent.show ? (
                                <QuillEditor
                                  contentInit={
                                    itemContent?.contentHTML
                                      ?.toString()
                                      .replace(
                                        /(<? *script)/gi,
                                        "illegalscript"
                                      ) ?? ""
                                  }
                                  returnOnchangeContent={returnOnchangeContent}
                                ></QuillEditor>
                              ) : (
                                <div
                                  key={indexContent}
                                  className={`ql-editor`}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      itemContent?.contentHTML
                                        ?.toString()
                                        .replace(
                                          /(<? *script)/gi,
                                          "illegalscript"
                                        ) ?? "",
                                  }}
                                ></div>
                              )}
                            </div>
                          ) : itemContent.type == "img" ? (
                            <div
                              className={`${
                                itemContent.className?.split("card-product")[0]
                              } mb-10 border-4 border-double border-green-200 hover:bg-slate-50`}
                              key={indexContent}
                              onClick={() => {
                                setModelEditor({
                                  indexGrid: indexGrid,
                                  indexContent: indexContent,
                                  model: itemContent,
                                });
                              }}
                            >
                              <div
                                className=" w-max-[200px] relative mx-4 my-3 "
                                data-te-input-wrapper-init
                              >
                                <input
                                  type="text"
                                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  placeholder="Example label"
                                  onChange={(event) => {
                                    let _model = { ...model };
                                    _model.grid[indexGrid].contents[
                                      indexContent
                                    ].className = event.target.value;
                                    setModel(_model);
                                  }}
                                  value={itemContent.className}
                                  disabled
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                  Class
                                </label>
                              </div>

                              <div className="mx-auto">
                                <Image
                                  alt="image"
                                  src={`${itemContent.url}`}
                                  width={500}
                                  height={500}
                                  quality={75}
                                  style={{
                                    width: `${itemContent.width ?? "auto"}`,
                                    maxWidth: `${
                                      itemContent.maxWidth ?? "auto"
                                    }`,
                                    height: `${itemContent.height ?? "200px"}`,
                                    maxHeight: `${
                                      itemContent.maxHeight ?? "auto"
                                    }`,
                                  }}
                                  className=" mx-auto block object-contain"
                                ></Image>
                              </div>

                              <div className="mb-3">
                                <div className=" m-4 flex">
                                  <input
                                    className="relative m-0 block  min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    id="formFileSm"
                                    type="file"
                                    onChange={(e) => {
                                      uploadToClientImg(
                                        e,
                                        indexGrid,
                                        indexContent
                                      );
                                    }}
                                  />
                                </div>
                                <div
                                  className=" w-max-[200px] relative  mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].width = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.width}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Width
                                  </label>
                                </div>
                                <div
                                  className=" w-max-[200px] relative mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].maxWidth = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.maxWidth}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Max-Width
                                  </label>
                                </div>

                                <div
                                  className=" w-max-[200px] relative  mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].height = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.height}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Height
                                  </label>
                                </div>
                                <div
                                  className=" w-max-[200px] relative mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].maxHeight = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.maxHeight}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Max-Height
                                  </label>
                                </div>
                              </div>
                            </div>
                          ) : itemContent.type == "vdo" ? (
                            <div
                              className={`${itemContent.className} mb-10 hover:bg-slate-50 `}
                              key={indexContent}
                              onClick={() => {
                                setModelEditor({
                                  indexGrid: indexGrid,
                                  indexContent: indexContent,
                                  model: itemContent,
                                });
                              }}
                            >
                              <div
                                className=" w-max-[200px] relative mx-4 my-3 "
                                data-te-input-wrapper-init
                              >
                                <input
                                  type="text"
                                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  placeholder="Example label"
                                  onChange={(event) => {
                                    let _model = { ...model };
                                    _model.grid[indexGrid].contents[
                                      indexContent
                                    ].className = event.target.value;
                                    setModel(_model);
                                  }}
                                  value={itemContent.className}
                                  disabled
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                  Class
                                </label>
                              </div>

                              <div className="mx-auto">
                                {itemContent.url &&
                                itemContent.url.split("http").length > 1 ? (
                                  <iframe
                                    width="420"
                                    height="315"
                                    style={{
                                      width: `${itemContent.width ?? "auto"}`,
                                      maxWidth: `${
                                        itemContent.maxWidth ?? "auto"
                                      }`,
                                      height: `${
                                        itemContent.height ?? "200px"
                                      }`,
                                      maxHeight: `${
                                        itemContent.maxHeight ?? "auto"
                                      }`,
                                    }}
                                    className=" mx-auto block object-contain"
                                    src={`${itemContent.url}`}
                                  ></iframe>
                                ) : (
                                  <video
                                    controls
                                    autoPlay
                                    style={{
                                      width: `${itemContent.width ?? "auto"}`,
                                      maxWidth: `${
                                        itemContent.maxWidth ?? "auto"
                                      }`,
                                      height: `${
                                        itemContent.height ?? "200px"
                                      }`,
                                      maxHeight: `${
                                        itemContent.maxHeight ?? "auto"
                                      }`,
                                    }}
                                    className=" mx-auto block object-contain"
                                  >
                                    <source
                                      src={`/api/img?Id=${itemContent.url}`}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                )}

                                {/* <Image alt="image" src={`/api/img?Id=${itemContent.url}`} width={500} height={500} quality={75} style={{ width: `${itemContent.width ?? "auto"}`, maxWidth: `${itemContent.maxWidth ?? "auto"}`, height: `${itemContent.height ?? "200px"}`, maxHeight: `${itemContent.maxWidth ?? "auto"}` }} className=" object-contain block mx-auto" ></Image> */}
                              </div>

                              <div className="mb-3">
                                <div className=" m-4 flex">
                                  <input
                                    className="relative m-0 block  min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    id="formFileSm"
                                    type="file"
                                    onChange={(e) => {
                                      uploadToClientImg(
                                        e,
                                        indexGrid,
                                        indexContent
                                      );
                                    }}
                                  />
                                </div>
                                <div
                                  className=" w-max-[200px] relative  mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].url = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.url}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    URL
                                  </label>
                                </div>
                                <div
                                  className=" w-max-[200px] relative  mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].width = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.width}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Width
                                  </label>
                                </div>
                                <div
                                  className=" w-max-[200px] relative mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].maxWidth = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.maxWidth}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Max-Width
                                  </label>
                                </div>

                                <div
                                  className=" w-max-[200px] relative  mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].height = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.height}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Height
                                  </label>
                                </div>
                                <div
                                  className=" w-max-[200px] relative mx-4 my-3"
                                  data-te-input-wrapper-init
                                >
                                  <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Example label"
                                    onChange={(event) => {
                                      let _model = { ...model };
                                      _model.grid[indexGrid].contents[
                                        indexContent
                                      ].maxHeight = event.target.value;
                                      setModel(_model);
                                    }}
                                    value={itemContent.maxHeight}
                                  />
                                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    Max-Height
                                  </label>
                                </div>
                              </div>
                            </div>
                          ) : itemContent.type == "hr" ? (
                            <hr className="my-2" key={indexContent} />
                          ) : null
                      )
                    : null}
                </div>
              </div>
            ))
          : null}
        <div
          data-te-modal-init
          className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="addModel"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            data-te-modal-dialog-ref
            className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
          >
            <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalScrollableLabel"
                >
                  Add Grid
                </h5>

                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative pb-4 pt-4">
                <div
                  className="grid grid-cols-1 gap-4 p-4"
                  data-te-modal-dismiss
                >
                  <div
                    className="grid cursor-pointer grid-cols-1 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid-cols-1 grid md:grid-cols-1 gap-4",
                        contents: [
                          {
                            type: "hr",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-orange-200">
                      <p className=" m-2 text-center">Divide</p>
                    </div>
                  </div>

                  <div className="text-lg font-bold text-red-600 underline underline-offset-8">
                    Content Zone
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-1 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid-cols-1 grid gap-4",
                        contents: [
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-2 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-2 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-6 gap-7 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-6 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className:
                              "lg:col-start-2 lg:col-span-2 col-start-1 col-span-1",
                            url: "",
                          },
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-1",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" col-span-2 col-start-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-3 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-3 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-1",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "lg:col-span-1 col-span-1",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>
                  <div
                    className="grid cursor-pointer grid-cols-3 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "lg:col-span-1 col-span-1",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-1",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-4 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-4 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div className="text-lg font-bold text-red-600 underline underline-offset-8">
                    Content + Image Zone
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-1 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">img</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-6 gap-7 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-6 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className:
                              "lg:col-start-2 lg:col-span-2 col-span-1",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "lg:col-span-2 col-span-1",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" col-span-2 col-start-2 bg-green-200 ">
                      <p className=" m-2 text-center">Image</p>
                    </div>
                    <div className="col-span-2 col-start-4 bg-green-200 ">
                      <p className=" m-2 text-center">Image</p>
                    </div>
                  </div>
                  <div
                    className="grid cursor-pointer grid-cols-2 gap-7 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-2 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className: "lg:col-span-1 col-span-1",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "lg:col-span-1 col-span-1",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" col-span-1  bg-green-200 ">
                      <p className=" m-2 text-center">Image</p>
                    </div>
                    <div className="col-span-1  bg-green-200 ">
                      <p className=" m-2 text-center">Image</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-2 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-2 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Image</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-2 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-2 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-green-200">
                      <p className=" m-2 text-center">Image</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-3 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className: "card-product lg:col-span-1 col-span-3",
                            url: "",
                          },
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-3",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-3 gap-3 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-1",
                            contentHTML: "",
                          },
                          {
                            type: "img",
                            className: "card-product col-span-1",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-6 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-6 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className: "lg:col-span-2 col-span-1 card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "lg:col-span-2 col-span-1 card-product",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" col-span-2 bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" col-span-2 bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-6 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-6 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "img",
                            className: "card-product",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                    <div className=" bg-green-200">
                      <p className=" m-2 text-center">Img</p>
                    </div>
                  </div>

                  <div className="text-lg font-bold text-red-600 underline underline-offset-8">
                    Content + VDO Zone
                  </div>
                  <div
                    className="grid cursor-pointer grid-cols-1 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "vdo",
                            className: "",
                            url: "",
                            width: "100%",
                            maxWidth: "350px",
                            height: "auto",
                            maxHeight: "200px",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-6 gap-7 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className:
                          "grid lg:grid-cols-6 gap-7 content grid-cols-1",
                        contents: [
                          {
                            type: "vdo",
                            className:
                              "lg:col-start-2 lg:col-span-2 col-span-1",
                            url: "",
                          },
                          {
                            type: "vdo",
                            className:
                              "lg:col-start-4 lg:col-span-2 col-span-1",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" col-span-2 col-start-2 bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                    <div className="col-span-2 col-start-4 bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-2 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-2 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "vdo",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                    <div className="bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-2 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-2 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "",
                            contentHTML: "",
                          },
                          {
                            type: "vdo",
                            className: "card-product",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className="bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-3 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "vdo",
                            className: "card-product",
                            url: "",
                          },
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-1",
                            contentHTML: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className=" bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                  </div>

                  <div
                    className="grid cursor-pointer grid-cols-3 gap-4 hover:outline hover:outline-1 hover:outline-offset-2"
                    onClick={() => {
                      setModelAdd({
                        className: "grid lg:grid-cols-3 gap-4 grid-cols-1",
                        contents: [
                          {
                            type: "editor",
                            className: "lg:col-span-2 col-span-1",
                            contentHTML: "",
                          },
                          {
                            type: "vdo",
                            className: "card-product",
                            url: "",
                          },
                        ],
                      });
                    }}
                  >
                    <div className="col-span-2 bg-sky-200">
                      <p className=" m-2 text-center">Content</p>
                    </div>
                    <div className=" bg-yellow-200">
                      <p className=" m-2 text-center">VDO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  className="bg-primary-100 text-primary-700 hover:bg-primary-accent-100 focus:bg-primary-accent-100 active:bg-primary-accent-200 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {model
            ? model?.grid?.map((itemGrid: IGrid, indexGrid: number) => (
                <div key={indexGrid} className={itemGrid.className}>
                  {itemGrid.contents
                    ? itemGrid.contents.map(
                        (itemContent: IContent, indexContent: number) => (
                          <div
                            key={indexContent}
                            className={`ql-snow ${itemContent.className}`}
                          >
                            {itemContent.type == "editor" ? (
                              <div>
                                <div
                                  key={indexContent}
                                  className={`ql-editor`}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      itemContent?.contentHTML
                                        ?.toString()
                                        .split("<p>#</p>")[0]
                                        .replace(
                                          /(<? *script)/gi,
                                          "illegalscript"
                                        ) ?? "",
                                  }}
                                ></div>
                                {itemContent.show &&
                                itemContent.contentHTML &&
                                itemContent.contentHTML.split("<p>#</p>")
                                  .length > 1 ? (
                                  <div
                                    className={`ql-editor`}
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        itemContent?.contentHTML
                                          ?.toString()
                                          .split("<p>#</p>")[1]
                                          .replace(
                                            /(<? *script)/gi,
                                            "illegalscript"
                                          ) ?? "",
                                    }}
                                  ></div>
                                ) : null}

                                {itemContent.contentHTML &&
                                itemContent.contentHTML.split("<p>#</p>")
                                  .length > 1 ? (
                                  <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className=" hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 m-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    onClick={() => {
                                      let _model = { ...model };
                                      if (
                                        _model.grid[indexGrid].contents[
                                          indexContent
                                        ].show == null
                                      ) {
                                        _model.grid[indexGrid].contents[
                                          indexContent
                                        ].show = true;
                                      } else {
                                        _model.grid[indexGrid].contents[
                                          indexContent
                                        ].show =
                                          !_model.grid[indexGrid].contents[
                                            indexContent
                                          ].show;
                                      }
                                      setModel(_model);
                                    }}
                                  >
                                    See More
                                  </button>
                                ) : null}
                              </div>
                            ) : itemContent.type == "img" ? (
                              <div className="mx-auto">
                                <Image
                                  alt="image"
                                  src={`${itemContent.url}`}
                                  width={500}
                                  height={500}
                                  quality={75}
                                  style={{
                                    width: `${itemContent.width ?? "auto"}`,
                                    maxWidth: `${
                                      itemContent.maxWidth ?? "auto"
                                    }`,
                                    height: `${itemContent.height ?? "200px"}`,
                                    maxHeight: `${
                                      itemContent.maxHeight ?? "auto"
                                    }`,
                                  }}
                                  className=" mx-auto block object-contain"
                                ></Image>
                              </div>
                            ) : // <Image alt="image" src={`/api/img?Id=${itemContent.url}`} width={774} height={433} quality={75} style={{ width: "auto", height: '200px' }} className={`object-contain block mx-auto`}></Image>

                            itemContent.type == "vdo" ? (
                              <div className="mx-auto">
                                {itemContent.url &&
                                itemContent.url.split("http").length > 1 ? (
                                  <iframe
                                    width="420"
                                    height="315"
                                    style={{
                                      width: `${itemContent.width ?? "auto"}`,
                                      maxWidth: `${
                                        itemContent.maxWidth ?? "auto"
                                      }`,
                                      height: `${
                                        itemContent.height ?? "200px"
                                      }`,
                                      maxHeight: `${
                                        itemContent.maxHeight ?? "auto"
                                      }`,
                                    }}
                                    className=" mx-auto block object-contain"
                                    src={`${itemContent.url}`}
                                  ></iframe>
                                ) : (
                                  <video
                                    controls
                                    autoPlay
                                    style={{
                                      width: `${itemContent.width ?? "auto"}`,
                                      maxWidth: `${
                                        itemContent.maxWidth ?? "auto"
                                      }`,
                                      height: `${
                                        itemContent.height ?? "200px"
                                      }`,
                                      maxHeight: `${
                                        itemContent.maxHeight ?? "auto"
                                      }`,
                                    }}
                                    className=" mx-auto block object-contain"
                                  >
                                    <source
                                      src={`/api/img?Id=${itemContent.url}`}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                )}
                              </div>
                            ) : itemContent.type == "hr" ? (
                              <hr className="my-2" />
                            ) : null}
                          </div>
                        )
                      )
                    : null}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  };
export default EditHomePage;
