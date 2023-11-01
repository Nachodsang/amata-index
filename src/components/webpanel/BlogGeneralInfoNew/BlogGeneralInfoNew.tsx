"use client";
import { useContext, useEffect, useState } from "react";
import { Input } from "tw-elements";
import FileInput from "../FileInput/FileInput";
import Ip from "../Input/Input";
import { IblogGeneralInfo } from "@/service/models/blogSetting.model";
import Swal from "sweetalert2";
import DropDown from "../DropDown/DropDown";
import { FilterContext } from "@/contexts/FilterContext";
import axios from "axios";
import { blogTypes } from "../../../../public/assets/nationalities";

export default function BlogGeneralInfoNew({
  edit,
  state,
  setState,
}: {
  edit: boolean;
  state: any;
  setState: any;
}) {
  const initialState = {
    blogUrl: "",
    coverImage: "",
    type: "",
    video: "",
    logo: "",
    companyReview: "",
    industry: "",
    language: "",
  };

  const [companyList, setCompanyList] = useState([]);
  const { filtersState }: any = useContext(FilterContext);
  const [imgState, setImgState] = useState(null);
  const [generalInfoState, setGeneralInfoState] = useState(initialState);

  //  Categories Array
  const uniqueFilterCategories = new Set(
    filtersState.map((i: any) => i?.filterCategory)
  );
  const filterCategories = Array.from(uniqueFilterCategories);

  const coverImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgState(e.target.files[0]);
    }
  };

  const fetchCompany = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`
    );

    setCompanyList(
      response.data.companySetting

        .filter((i: any) => i?.deleted === false)
        .map((i: any) => i?.generalInfo?.companyNameEn)
        .sort()
    );
  };
  // const companyList = companyData.filter((i: any) => !i?.deleted);
  const onHandleSave = () => {
    if (edit) {
      setState({ ...state, generalInfo: generalInfoState });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "general info has been updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (
        state?.blogTitle &&
        generalInfoState?.blogUrl &&
        generalInfoState?.type
      ) {
        setState({ ...state, generalInfo: generalInfoState });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "general info has been saved!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops...",
          text: "Please enter Blog URL, Blog Title ,and TYPE",
          timer: 2500,
        });
      }
    }
  };

  useEffect(() => {
    edit && state && setGeneralInfoState(state?.generalInfo);
  }, [state]);

  //   useEffect(() => {
  //     const blogTitleInput = new Input(document.getElementById("blogTitle"));
  //     blogTitleInput.update();
  //     // const companyInput = new Input(document.getElementById("company"));
  //     // companyInput.update();
  //     const typeInput = new Input(document.getElementById("type"));
  //     typeInput.update();
  //     const blogUrlInput = new Input(document.getElementById("blogUrl"));
  //     blogUrlInput.update();
  //     // initial as input type
  //     const companyReviewInput = new Input(
  //       document.getElementById("companyReview")
  //     );
  //     companyReviewInput.update();
  //     // const industryInput = new Input(document.getElementById("industry"));
  //     // industryInput.update();
  //     const languageInput = new Input(document.getElementById("language"));
  //     languageInput.update();
  //   }, [generalInfoState]);
  useEffect(() => {
    fetchCompany();
  }, []);
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-slate-300 bg-white p-4 shadow-sm">
      <div className="max-w-[1440px]  mx-auto w-full">
        <div className="flex flex-cols justify-start border-b border-slate-300 py-2">
          <div className="text-2xl font-bold text-slate-600">General</div>
        </div>
        <div className="flex flex-col gap-4 mt-4  ">
          <div className="">
            {/* blog Image */}
            <div className="flex-col items-center flex ">
              {imgState ? (
                <img
                  src={URL.createObjectURL(imgState)}
                  className="h-[720px] w-[1080px] object-cover"
                />
              ) : edit && generalInfoState?.coverImage ? (
                <img
                  src={generalInfoState?.coverImage}
                  className="h-[720px] w-[1080px]object-cover"
                />
              ) : (
                <img
                  src="https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"
                  className="h-[720px] w-[1080px] object-cover"
                />
              )}
              <div className="mb-3  w-full">
                <p className="mb-2 inline-block text-xs text-red-500 dark:text-neutral-200 ">
                  Dimension: 1080px x 720px (auto resize & crop)
                </p>
                <FileInput
                  imageChange={coverImageChange}
                  objectState={true}
                  state={generalInfoState}
                  setState={setGeneralInfoState}
                  path="blog-image-upload"
                  stateValue={"coverImage"}
                  multiple={false}
                />
              </div>
              {/* logo upload */}
            </div>
          </div>
          {/* Inputs */}
          <div className=" w-full flex flex-col ">
            <div className="bg-slate-100/50 p-4 mb-4 rounded-lg border-l-4 border-red-300 ">
              <Ip
                required={true}
                id="blogUrl"
                value={generalInfoState?.blogUrl}
                placeholder="blog URL"
                label={"**Blog URL / URL ของบล็อก"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    blogUrl: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex gap-4">
              <Ip
                required={true}
                id="blogTitle"
                value={state?.blogTitle}
                placeholder="blog title"
                label={"**Blog Title / ชื่อบล็อก"}
                onChange={(e: any) =>
                  setState({ ...state, blogTitle: e.target.value })
                }
              />

              {/* <Ip
                id="company"
                value={state?.company}
                placeholder="company"
                label={"Company"}
                onChange={(e: any) =>
                  setState({ ...state, company: e.target.value })
                }
              /> */}
              <DropDown
                filterList={blogTypes}
                title={generalInfoState?.type || `TYPE ประเภทบล็อก*`}
                checkBox={false}
                type="dropdown"
                onChange={(e: any) =>
                  setGeneralInfoState({ ...generalInfoState, type: e })
                }
                selected={undefined}
                edit={undefined}
                category={undefined} // onChange: any
                // selected: any
                // edit: any
                // category: any;
              />
            </div>
            {/* <div className="flex gap-4">
              <Ip
                id="type"
                value={generalInfoState?.type}
                placeholder="blog type"
                label={"Type"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    type: e.target.value,
                  })
                }
              />
              <Ip
                id="companyReview"
                value={generalInfoState?.companyReview}
                placeholder="company review"
                label={"Review"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    companyReview: e.target.value,
                  })
                }
              />
            </div> */}
            <div className="flex gap-4">
              {/* <Ip
                placeholder="industry"
                id="industry"
                value={generalInfoState?.industry}
                label={"Industry"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    industry: e.target.value,
                  })
                }
              /> */}
              <DropDown
                filterList={filterCategories}
                title={
                  generalInfoState?.industry ||
                  `prefered industry / อุตสาหกรรม`
                }
                checkBox={false}
                type="dropdown"
                onChange={(value: any) => {
                  setGeneralInfoState({
                    ...generalInfoState,
                    industry: value,
                  });
                }}
                selected={undefined}
                edit={undefined}
                category={undefined} // onChange: any
                // selected: any
                // edit: any
                // category: any;
              />
              {/* <Ip
                required={false}
                id="language"
                placeholder="language"
                value={generalInfoState?.language}
                label={"Language"}
                onChange={(e: any) =>
                  setGeneralInfoState({
                    ...generalInfoState,
                    language: e.target.value,
                  })
                }
              /> */}
            </div>
          </div>
        </div>
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
