"use client";
import { useEffect, useState } from "react";

import Ip from "@/components/webpanel/Input/Input";


import FileInput from "@/components/webpanel/FileInput/FileInput";
import DropDown from "@/components/webpanel/DropDown/DropDown";

const mockData = [1, 2, 3, 4, 5, 6, 7];
// Initialization for ES Users
import {
    Input,
    Timepicker,
    initTE,
    Datepicker,
    Ripple,
    Sidenav,
    Dropdown,
    Modal,
} from "tw-elements";
export default function GeneralInfo({ state, setState, edit }: any) {
    const defaultGeneralInfoState: any = {
        profileUrl: "",
        logo: "",
        coverImage: "",
        video: "",
        companyNameTh: "",
        companyNameEn: "",
        companyNameJp: "",
        companyNameCn: "",
        industry: "",
        nationality: "",
    };
    const [generalInfoState, setGeneralInfoState] = useState(
        edit ? state : defaultGeneralInfoState
    );

    const [imgState, setImgState] = useState({
        logoImg: undefined,
        coverImg: undefined,
    });
    const logoImageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImgState({
                ...imgState,
                logoImg: e.target.files[0],
            });
        }
    };
    const coverImageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImgState({
                ...imgState,
                coverImg: e.target.files[0],
            });
        }
    };



    useEffect(() => {
        if (state != null) {
            console.log("state");

            console.log(state);

            setGeneralInfoState(state?.generalInfo);
        }
    }, [state]);

    const [s, setS] = useState(true)
    const [v, setV] = useState('')
    useEffect(() => {
        init()
    }, [s]);
    const init = () => {
        // initTE({ Input, Timepicker, Datepicker, Ripple, Sidenav, Dropdown, Modal });
        console.log("init doing from page");
        document.getElementById("initTw")?.click();
    };

    const sClick = () => {
        setS(true)
        setV('v')
    }
    useEffect(() => {
        console.log('init V');

        const myInput = new Input(document.getElementById("testV"))
        myInput.update()
    }, [v]);
    // console.log("state from upper com");
    // console.log(state);

    // console.log("print generalInfo state");
    // console.log(generalInfoState);

    return (
        <div className="flex w-full max-w-[1440px] flex-col gap-2 rounded-md border border-slate-300 bg-white p-4 shadow-sm">
            <div>
                <div className="flex justify-start border-b border-slate-300 py-2">
                    <div>General</div>
                    <button onClick={init}>Init</button>
                    <button onClick={sClick}>Set s</button>
                    {s ? (<div>
                        <div className="relative mb-3" id="testV">
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                                placeholder="Example label"
                                value={v}
                            />
                            <label
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Example label
                            </label>
                        </div>
                    </div>) : null}
                </div>
                <div className="flex w-full justify-between">
                    {/* logo */}
                    <div className="w-[25%]">
                        {imgState?.logoImg ? (
                            <img
                                src={URL.createObjectURL(imgState?.logoImg)}
                                className="h-[300px] w-[300px] object-cover"
                            />
                        ) : (
                            <img
                                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                                className="h-[300px] w-[300px] object-cover"
                            />
                        )}
                        <div className="mb-3">
                            <p className="mb-2 inline-block text-xs text-red-500 dark:text-neutral-200 ">
                                Dimension: 500 x 500 pixel (auto resize & crop)
                            </p>
                            <FileInput
                                imageChange={logoImageChange}
                                objectState={true}
                                state={generalInfoState}
                                setState={setGeneralInfoState}
                                path="company-logo-upload"
                                stateValue={"logo"}
                            />
                        </div>
                        {/* logo upload */}
                    </div>
                    {/* cover */}
                    <div className="w-[75%]">
                        {imgState?.coverImg ? (
                            <img
                                src={URL.createObjectURL(imgState?.coverImg)}
                                className="h-[300px] w-[1500px] object-cover"
                            />
                        ) : edit && state?.generalInfo?.coverImage ? (
                            <img
                                src={generalInfoState?.coverImage}
                                className="h-[300px] w-[1500px] object-cover"
                            />
                        ) : (
                            <img
                                src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png"
                                className="h-[300px] w-[1500px] object-cover"
                            />
                        )}

                        <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
                            Dimension: 1920 x 500 pixel (auto resize & crop)
                        </label>
                        <FileInput
                            imageChange={coverImageChange}
                            objectState={true}
                            state={generalInfoState}
                            setState={setGeneralInfoState}
                            path="company-cover-upload"
                            stateValue={"coverImage"}
                        />
                        {/* video */}
                        <label>Video URL</label>
                        <Ip
                            label="Video URL"
                            onChange={(e: any) => {
                                setGeneralInfoState({
                                    ...generalInfoState,
                                    video: e.target.value,
                                });
                            }}
                            value={generalInfoState?.video}
                            placeholder="...."
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    {/* <InputGroup /> */}

                    <div className="rounded-md border-l-4 border-red-400 bg-slate-100/60 p-4">
                        <Ip
                            placeholder="...."
                            value={generalInfoState?.profileUrl}
                            label="*Profile URL:eg.factory-name-thailand"
                            onChange={(e: any) => {
                                setGeneralInfoState({
                                    ...generalInfoState,
                                    profileUrl: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="flex-flow flex w-full justify-between">
                        <div className="w-[30%]">
                            <label>Company Name(TH)</label>
                            <Ip
                                placeholder="...."
                                value={generalInfoState?.companyNameTh}
                                label="Company Name(TH)"
                                onChange={(e: any) => {
                                    setGeneralInfoState({
                                        ...generalInfoState,
                                        companyNameTh: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="relative mb-3" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput1"
                                placeholder="Example label"
                                value={generalInfoState?.companyNameEn}
                            />
                            <label
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Example label
                            </label>
                        </div>
                        <div className="w-[30%]">
                            <label>Company Name(EN)</label>
                            <Ip
                                placeholder="...."
                                value={generalInfoState?.companyNameEn}
                                label="Company Name(EN)"
                                onChange={(e: any) => {
                                    setGeneralInfoState({
                                        ...generalInfoState,
                                        companyNameEn: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[30%] flex-col ">
                            <label className="">Company Name(JP)</label>
                            <Ip
                                placeholder="...."
                                value={generalInfoState?.companyNameJp}
                                label="Company Name(JP)"
                                onChange={(e: any) => {
                                    setGeneralInfoState({
                                        ...generalInfoState,
                                        companyNameJp: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex-flow flex w-full justify-between">
                        <div className="w-[30%]">
                            <label>Company Name(CN)</label>
                            <Ip
                                placeholder="...."
                                value={generalInfoState?.companyNameCn}
                                label="Company Name(CN)"
                                onChange={(e: any) => {
                                    setGeneralInfoState({
                                        ...generalInfoState,
                                        companyNameCn: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[30%]">
                            <label>Industry</label>
                            {/* <DropDown
                title={generalInfoState?.industry || "Industry"}
                checkBox={false}
                filterList={mockData}
                type="dropdown"
                onChange={(value: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    industry: value,
                  });
                }}
              /> */}
                        </div>
                        <div className="w-[30%]">
                            <label>Nationality</label>
                            {/* <DropDown
                title={generalInfoState?.nationality || "Nationality"}
                checkBox={false}
                filterList={mockData}
                type="dropdown"
                onChange={(value: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    nationality: value,
                  });
                }}
              /> */}
                        </div>
                    </div>
                </div>
                {/* save button */}
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            setState({
                                ...state,
                                generalInfo: generalInfoState,
                                companyTitle: generalInfoState?.companyNameEn,
                            });
                        }}
                        type="button"
                        className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                    >
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}
