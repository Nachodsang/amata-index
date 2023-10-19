"use client";
import { useContext, useEffect, useState } from "react";
import Ip from "../Input/Input";

import FileInput from "../FileInput/FileInput";
import DropDown from "../DropDown/DropDown";
import Swal from "sweetalert2";
import { nationalities } from "../../../../public/assets/nationalities";
import { FilterContext } from "@/contexts/FilterContext";
// Initialization for ES Users
import { Input } from "tw-elements";
const nationalityList = nationalities.map((i: any) => i.Nationality);

export default function GeneralInfo({
  categoryState,
  setCategoryState,
  state,
  setState,
  edit,
}: any) {
  const envi = process.env.NEXT_PUBLIC_APP_KEY_WORD;
  const { filtersState }: any = useContext(FilterContext);
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
  // tbt
  const [generalInfoState, setGeneralInfoState] = useState(
    edit ? state : defaultGeneralInfoState
  );

  const [imgState, setImgState] = useState({
    logoImg: undefined,
    coverImg: undefined,
  });
  // Types Array
  const uniqueFilterTypes = new Set(
    filtersState
      .filter((i: any) => i?.filterCategory === categoryState)
      .map((i: any) => i.filterType)
  );
  // const filterTypes = Array.from(uniqueFilterTypes);

  //  Categories Array
  const uniqueFilterCategories = new Set(
    filtersState.map((i: any) => i?.filterCategory)
  );
  const filterCategories = Array.from(uniqueFilterCategories);
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

  const onHandleSave = () => {
    if (edit) {
      setState({
        ...state,
        generalInfo: generalInfoState,
        companyTitle: generalInfoState?.companyNameEn,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "General Info. has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      !edit &&
      generalInfoState?.profileUrl &&
      generalInfoState?.companyNameTh &&
      generalInfoState?.companyNameEn
    ) {
      setState({
        ...state,
        generalInfo: generalInfoState,
        companyTitle: generalInfoState?.companyNameEn,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "General Info. has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Please enter Profile URL, Company Name(TH) and Company Name(EN)",
        timer: 2500,
      });
    }
  };

  useEffect(() => {
    if (state != null) {
      setGeneralInfoState(state?.generalInfo);
    }
  }, [state]);

  useEffect(() => {
    setCategoryState(generalInfoState?.industry);
  }, [generalInfoState?.industry]);
  // difference in edit and new
  useEffect(() => {
    if (edit && typeof window !== "undefined") {
      const videoURLInput = new Input(document.getElementById("videoURL"));
      videoURLInput.update();
      const profileUrlInput = new Input(document.getElementById("profileURL"));
      profileUrlInput.update();
      const companyNameEnInput = new Input(
        document.getElementById("companyNameEn")
      );
      companyNameEnInput.update();
      const companyNameThInput = new Input(
        document.getElementById("companyNameTh")
      );
      companyNameThInput.update();
      const companyNameJpInput = new Input(
        document.getElementById("companyNameJp")
      );
      companyNameJpInput.update();
      const companyNameCnInput = new Input(
        document.getElementById("companyNameCn")
      );
      companyNameCnInput.update();
    }
  }, [generalInfoState]);

  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-slate-300 bg-white p-4 shadow-sm">
      <div>
        <div className="flex justify-start border-b border-slate-300 py-2">
          <div className="text-2xl font-bold text-slate-600">General</div>
        </div>
        <div className="flex w-full justify-between">
          {/* logo */}
          <div className="w-[25%]">
            {imgState?.logoImg ? (
              <img
                src={URL.createObjectURL(imgState?.logoImg)}
                className="h-[300px] w-[300px] object-cover"
              />
            ) : edit && generalInfoState?.logo ? (
              <img
                src={generalInfoState?.logo}
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
                multiple={false}
              />
            </div>
            {/* logo upload */}
          </div>
          {/* cover */}
          <div className="w-[75%]">
            {imgState?.coverImg ? (
              <img
                src={URL.createObjectURL(imgState?.coverImg)}
                className="h-[300px] w-[1200px] object-cover"
              />
            ) : edit && generalInfoState?.coverImage ? (
              <img
                src={generalInfoState?.coverImage}
                className="h-[300px] w-[1200px] object-cover"
              />
            ) : (
              <img
                src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png"
                className="h-[300px] w-[1200px] object-cover"
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
              multiple={false}
            />
            {/* video */}

            <Ip
              id="videoURL"
              label="Video URL"
              onChange={(e: any) => {
                setGeneralInfoState({
                  ...generalInfoState,
                  video: e.target.value,
                });
              }}
              value={generalInfoState?.video || ""}
              placeholder="...."
              required={false}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* <InputGroup /> */}

          <div className="rounded-md border-l-4 border-red-400 bg-slate-100/60 p-4">
            <Ip
              id="profileURL"
              placeholder="...."
              value={generalInfoState?.profileUrl || ""}
              label="Profile URL / URL หน้าเพจ**"
              onChange={(e: any) => {
                setGeneralInfoState({
                  ...generalInfoState,
                  profileUrl: e.target.value,
                });
              }}
              required={true}
            />
          </div>
          <div className="flex-flow flex w-full justify-between">
            <div className="w-[30%]">
              <Ip
                id="companyNameTh"
                placeholder="...."
                value={generalInfoState?.companyNameTh || ""}
                label={`${envi} name(TH) / ชื่อภาษาไทย*`}
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameTh: e.target.value,
                  });
                }}
                required={true}
              />
            </div>

            <div className="w-[30%]">
              <Ip
                id="companyNameEn"
                placeholder="...."
                value={generalInfoState?.companyNameEn || ""}
                label={`${envi} name(EN) / ชื่อภาษาอังกฤษ*`}
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameEn: e.target.value,
                  });
                }}
                required={true}
              />
            </div>
            <div className="w-[30%] flex-col ">
              <Ip
                id="companyNameJp"
                placeholder="...."
                value={generalInfoState?.companyNameJp || ""}
                label={`${envi} name(JP) / ชื่อภาษาญี่ปุ่น`}
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameJp: e.target.value,
                  });
                }}
                required={false}
              />
            </div>
          </div>
          <div className="flex-flow flex w-full justify-between">
            <div className="w-[30%]">
              <Ip
                id="companyNameCn"
                placeholder="...."
                value={generalInfoState?.companyNameCn || ""}
                label={`${envi} name(CN) / ชื่อภาษาจีน`}
                onChange={(e: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyNameCn: e.target.value,
                  });
                }}
                required={false}
              />
            </div>
            <div className="w-[30%]">
              <DropDown
                category=""
                edit={edit}
                selected={null}
                title={
                  generalInfoState?.industry ||
                  (envi === "factory"
                    ? "Industry / ประเภทอุตสาหกรรม*"
                    : "Machine Type / ประเภทเครื่องจักร*")
                }
                checkBox={false}
                filterList={filterCategories}
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
                category=""
                edit={edit}
                selected={null}
                title={
                  generalInfoState?.nationality || "Nationality / สัญชาติ*"
                }
                checkBox={false}
                filterList={nationalityList}
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
            onClick={onHandleSave}
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
