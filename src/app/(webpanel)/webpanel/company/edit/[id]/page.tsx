"use client";
import { useEffect, useState } from "react";
import InputGroup from "@/components/webpanel/InputGroup/InputGroup";
import Input from "@/components/webpanel/Input/Input";
import DropDown from "@/components/webpanel/DropDown/DropDown";
import GeneralInfo from "@/components/webpanel/GeneralInfo/GeneralInfo";
import FilterInfo from "@/components/webpanel/FilterInfo/FilterInfo";
import DetailsInfo from "@/components/webpanel/DetailsInfo/DetailsInfo";
import GalleryInfo from "@/components/webpanel/GalleryInfo/GalleryInfo";
import SeoInfo from "@/components/webpanel/SeoInfo/SeoInfo";
import ContactInfo from "@/components/webpanel/ContactInfo/ContactInfo";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditCompanyPage({
  params,
}: {
  params: { id: string };
}) {
  const companyURL = params.id;
  const [companyState, setCompanyState] = useState<any>(null);
  const [categoryState, setCategoryState] = useState("");
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`
        );
        const data = response.data;

        const thisCompany = data.companySetting.find(
          (i: any) => i?.generalInfo?.profileUrl === companyURL
        );

        setCompanyState(thisCompany);
      } catch (err) {}
    };

    fetchCompany();
  }, []);

  //   change this one to put method for editing company
  const editCompany = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`,
        { _id: companyState?._id, newValue: companyState }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${companyState?.companyTitle} company profile has been edited`,
        showConfirmButton: true,
        timer: 3000,
      });
    } catch (err) {
      err;
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong.",
        timer: 2500,
      });
    }
  };

  return (
    <div className="">
      {/* {companyState && (
        <> */}
      <div className="mx-auto flex min-h-[100vh] max-w-[1440px] flex-col gap-4 rounded-md px-4">
        <div className="text-2xl font-bold text-slate-600">
          Edit: {companyState?.companyTitle}
        </div>
        {/* general */}

        <GeneralInfo
          state={companyState}
          setState={setCompanyState}
          edit={true}
          categoryState={categoryState}
          setCategoryState={setCategoryState}
        />
        {/* filter */}
        <FilterInfo
          categoryState={categoryState}
          state={companyState}
          setState={setCompanyState}
          edit={true}
        />
        {/* details */}
        <DetailsInfo
          state={companyState}
          setState={setCompanyState}
          edit={true}
          content={"companyProfile"}
        />
        {/* gallery */}
        <GalleryInfo
          state={companyState}
          setState={setCompanyState}
          edit={true}
        />
        {/* contact */}
        <ContactInfo
          state={companyState}
          setState={setCompanyState}
          edit={true}
        />
        {/* SEO */}
        <SeoInfo state={companyState} setState={setCompanyState} edit={true} />
      </div>
      <div className="fixed top-28 right-10">
        <button
          onClick={editCompany}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 mt-10 inline-block rounded bg-success px-6 pb-2  pt-2.5 text-2xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:scale-105 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
