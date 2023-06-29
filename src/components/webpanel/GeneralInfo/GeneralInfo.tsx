"use client";
import { useState } from "react";
import Input from "../Input/Input";
import InputGroup from "../InputGroup/InputGroup";
import FileInput from "../FileInput/FileInput";
import DropDown from "../DropDown/DropDown";
const mockData = [1, 2, 3, 4, 5, 6, 7];

export default function GeneralInfo({ state, setState }: any) {
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
    defaultGeneralInfoState
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

  console.log(generalInfoState);
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md flex flex-col p-4 gap-2">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>General</div>
      </div>
      <div className="flex justify-between w-full">
        {/* logo */}
        <div className="w-[25%]">
          {imgState?.logoImg ? (
            <img
              src={URL.createObjectURL(imgState?.logoImg)}
              className="w-[300px] h-[300px] object-cover"
            />
          ) : (
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              className="w-[300px] h-[300px] object-cover"
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
              className="w-[1500px] h-[300px] object-cover"
            />
          ) : (
            <img
              src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png"
              className="w-[1500px] h-[300px] object-cover"
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

          <Input
            label="Video URL"
            onChange={(e: any) => {
              setGeneralInfoState({
                ...generalInfoState,
                video: e.target.value,
              });
            }}
            value={generalInfoState.video}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* <InputGroup /> */}

        <div className="border-l-4 border-red-400 bg-slate-100/60 rounded-md p-4">
          <Input
            label="*Profile URL:eg.factory-name-thailand"
            onChange={(e: any) => {
              setGeneralInfoState({
                ...generalInfoState,
                profileUrl: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex flex-flow justify-between w-full">
          <div className="w-[30%]">
            <Input
              label="Company Name(TH)"
              onChange={(e: any) => {
                setGeneralInfoState({
                  ...generalInfoState,
                  companyNameTh: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-[30%]">
            <Input
              label="Company Name(EN)"
              onChange={(e: any) => {
                setGeneralInfoState({
                  ...generalInfoState,
                  companyNameEn: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-[30%]">
            <Input
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
        <div className="flex flex-flow justify-between w-full">
          <div className="w-[30%]">
            <Input
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
            <DropDown
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
            />
          </div>
          <div className="w-[30%]">
            <DropDown
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
            />
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
          className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          save
        </button>
      </div>
    </div>
  );
}
