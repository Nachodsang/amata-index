"use client";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import { IContent, IGrid } from "@/service/models/companySetting.model";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Content({ companyData }: any) {
  const [model, setModel] = useState(companyData?.details?.content);

  return (
    <div className="w-full py-10 ">
      <div className="max-w-[1270px] mx-auto px-4 ">
        <div className="content">
          {model
            ? model.grid.map((itemGrid: IGrid, indexGrid: number) => (
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
                                  width={1500}
                                  height={1500}
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
                                itemContent.url.split("iframe").length > 1 ? (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        itemContent?.url
                                          ?.toString()
                                          .split("<p>#</p>")[0]
                                          .replace(
                                            /(<? *script)/gi,
                                            "illegalscript"
                                          ) ?? "",
                                    }}
                                  ></div>
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
    </div>
  );
}
