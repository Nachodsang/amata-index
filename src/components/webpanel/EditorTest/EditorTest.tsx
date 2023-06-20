"use client";
// import Editor from "@/components/webpanel/editor";
import QuillEditor from "../QuillEditor/quillEditor";
import { useEffect, useState } from "react";

const EditorTest = () => {
  const [test, setTest] = useState<any[]>([]);
  const [model, setModel] = useState<any[]>([
    // {
    //   tagName: 'div',
    //   className: 'grid grid-cols-1 md:grid-cols-4 gap-4',
    //   contents: [
    //     {
    //       type:'html'
    //       className: '',
    //       contentHTML: '<h1>Test</h1>'
    //     },
    //     {
    //       type:'html'
    //       className: '',
    //       contentHTML: '<h1>Test</h1>'
    //     },
    //     {
    //       type:'html'
    //       className: '',
    //       contentHTML: '<h1>Test</h1>'
    //     },
    //     {
    //       type:'img'
    //       className: '',
    //       url: ''
    //     }
    //   ]
    // }
  ]);

  const [modelAdd, setModelAdd] = useState<any>();
  const [modelEditor, setModelEditor] = useState<any>();
  const [modelEditorContent, setModelEditorContent] = useState<any>();
  const returnOnchangeContent = (content: string) => {
    console.log(content);
    if (content.length > 0 && modelEditor) {
      setModelEditorContent(content);
      // console.log(b);
    }
  };

  useEffect(() => {
    console.log("modelEditorContent");

    if (modelEditor) {
      let a = [...model];
      console.log("editort");

      console.log(
        `index: ${modelEditor.index},indexContent: ${modelEditor.indexContent},content:${modelEditorContent}`
      );

      a[modelEditor.index]["contents"][modelEditor.indexContent][
        "contentHTML"
      ] = modelEditorContent;
      console.log(a);
      setModel(a);
    }
  }, [modelEditorContent]);

  // const AddLayout = () => {
  //   let editModel: any[] = model
  //   editModel.push({
  //     tagName: 'div',
  //     className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  //     contents: [
  //       {
  //         className: '',
  //         contentHTML: '<h1>Test</h1>'
  //       },
  //       {
  //         className: '',
  //         contentHTML: ''
  //       }
  //     ]
  //   })
  //   console.log(model);

  //   setModel(editModel)
  // }

  const deleteLayout = (index: number) => {
    let editModel: any[] = [];

    model.map((item: any, _index: number) => {
      if (index != _index) {
        editModel.push(item);
      }
    });
    setModel(editModel);
  };

  useEffect(() => {
    let ms = new Date("2023-06-19T10:04:30.180Z").toString();
    console.log(ms);

    if (modelAdd) {
      console.log("test123");
      console.log(modelAdd);
      // let editModel: any[] = model
      // editModel.push({
      //   tagName: 'div',
      //   className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
      //   contents: [
      //     {
      //       className: '',
      //       contentHTML: '<h1>Test</h1>'
      //     },
      //     {
      //       className: '',
      //       contentHTML: ''
      //     }
      //   ]
      // })
      // editModel.push(modelAdd)
      setModel((old) => [...old, modelAdd]);

      // setModel(e => editModel)
      console.log(model);
    }
  }, [modelAdd]);

  useEffect(() => {
    console.log("testModel");
  }, [model]);

  return (
    <div>
      {/* {JSON.stringify(modelEditor)} */}
      <button
        type="button"
        className="hidden rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-toggle="modal"
        data-te-target="#editorModel"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Vertically centered modal
      </button>
      {model
        ? model.map((item: any, index: number) => (
            <div key={index}>
              <div className="flex justify-end">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  onClick={() => {
                    deleteLayout(index);
                  }}
                >
                  Delete
                </button>
              </div>
              {item.tagName == "div" ? (
                <div
                  className={`${item.className} p-4 hover:bg-red-300`}
                  key={index}
                >
                  {item.contents.map(
                    (itemContent: any, indexContent: number) => (
                      // <div className={`${itemContent.className}`}><QuillEditor contentInit="" returnOnchangeContent={returnOnchangeContent}></QuillEditor></div>

                      <div
                        className={`${itemContent.className} hover:bg-slate-500 pb-10`}
                        key={indexContent}
                        // data-te-toggle="modal"
                        // data-te-target="#editorModel"
                        onClick={() => {
                          setModelEditor({
                            index: index,
                            indexContent: indexContent,
                            model: itemContent,
                          });
                        }}
                      >
                        {/* <div dangerouslySetInnerHTML={{ __html: itemContent?.contentHTML?.toString().replace(/(<? *script)/gi, 'illegalscript') ?? '' }} className=" m-4 text-black whitespace-pre-line ql-editor" style={{ backgroundColor: '' }}></div> */}
                        <QuillEditor
                          contentInit={
                            itemContent?.contentHTML
                              ?.toString()
                              .replace(/(<? *script)/gi, "illegalscript") ?? ""
                          }
                          returnOnchangeContent={returnOnchangeContent}
                        ></QuillEditor>
                      </div>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ))
        : null}

      <button
        type="button"
        data-te-toggle="modal"
        data-te-target="#addModel"
        data-te-ripple-init
        data-te-ripple-color="light"
        className=" w-full inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Add
      </button>

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
                Modal title
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative pt-4 pb-20">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div
                  className="grid grid-cols-1 gap-4 hover:outline hover:outline-offset-2 hover:outline-1"
                  onClick={() => {
                    setModelAdd({
                      tagName: "div",
                      className:
                        "grid-cols-1 grid md:grid-cols-1 gap-4 hover:outline hover:outline-offset-2 hover:outline-1",
                      contents: [
                        {
                          className: "",
                          contentHTML: "",
                        },
                      ],
                    });
                  }}
                >
                  <div className=" bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-2 gap-4 hover:outline hover:outline-offset-2 hover:outline-1"
                  onClick={() => {
                    setModelAdd({
                      tagName: "div",
                      className:
                        "grid-cols-1 grid desktop0:grid-cols-2 gap-4 hover:outline hover:outline-offset-2 hover:outline-1",
                      contents: [
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                      ],
                    });
                  }}
                >
                  <div className=" bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-3 gap-4 hover:outline hover:outline-offset-2 hover:outline-1"
                  onClick={() => {
                    setModelAdd({
                      tagName: "div",
                      className:
                        "grid-cols-1 grid desktop0:grid-cols-3 gap-4 hover:outline hover:outline-offset-2 hover:outline-1",
                      contents: [
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                      ],
                    });
                  }}
                >
                  <div className=" bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-3 gap-4 hover:outline hover:outline-offset-2 hover:outline-1"
                  onClick={() => {
                    setModelAdd({
                      tagName: "div",
                      className:
                        "grid-cols-1 grid desktop0:grid-cols-3 gap-4 hover:outline hover:outline-offset-2 hover:outline-1",
                      contents: [
                        {
                          className: "col-span-2",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                      ],
                    });
                  }}
                >
                  <div className="col-span-2 bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                </div>
                <div
                  className="grid grid-cols-3 gap-4 hover:outline hover:outline-offset-2 hover:outline-1"
                  onClick={() => {
                    setModelAdd({
                      tagName: "div",
                      className:
                        "grid-cols-1 grid desktop0:grid-cols-3 gap-4 hover:outline hover:outline-offset-2 hover:outline-1",
                      contents: [
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "col-span-2",
                          contentHTML: "",
                        },
                      ],
                    });
                  }}
                >
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="col-span-2 bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-4 gap-4 hover:outline hover:outline-offset-2 hover:outline-1"
                  onClick={() => {
                    setModelAdd({
                      tagName: "div",
                      className:
                        "grid-cols-1 grid desktop0:grid-cols-4 gap-4 hover:outline hover:outline-offset-2 hover:outline-1",
                      contents: [
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                        {
                          className: "",
                          contentHTML: "",
                        },
                      ],
                    });
                  }}
                >
                  <div className=" bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className=" bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                  <div className="bg-sky-400">
                    <p className=" text-center">Content</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
              {/* <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {model
        ? model.map((item: any, index: number) => (
            <div key={index}>
              {item.tagName == "div" ? (
                <div
                  className={`${item.className} p-4 hover:bg-red-300`}
                  key={index}
                >
                  {item.contents.map(
                    (itemContent: any, indexContent: number) => (
                      // <div className={`${itemContent.className}`}><QuillEditor contentInit="" returnOnchangeContent={returnOnchangeContent}></QuillEditor></div>

                      <div
                        className={`${itemContent.className} hover:bg-slate-500 pb-10`}
                        key={indexContent}
                        // data-te-toggle="modal"
                        // data-te-target="#editorModel"
                        onClick={() => {
                          setModelEditor({
                            index: index,
                            indexContent: indexContent,
                            model: itemContent,
                          });
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              itemContent?.contentHTML
                                ?.toString()
                                .replace(/(<? *script)/gi, "illegalscript") ??
                              "",
                          }}
                          className=" m-4 text-black whitespace-pre-line ql-editor"
                          style={{ backgroundColor: "" }}
                        ></div>
                      </div>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
};
export default EditorTest;
