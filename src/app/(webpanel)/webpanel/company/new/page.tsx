"use client";
import { useState } from "react";

// import GeneralInfo from "@/components/webpanel/GeneralInfo/GeneralInfo";
import FilterInfo from "@/components/webpanel/FilterInfo/FilterInfo";
import DetailsInfo from "@/components/webpanel/DetailsInfo/DetailsInfo";
import GalleryInfo from "@/components/webpanel/GalleryInfo/GalleryInfo";
import SeoInfo from "@/components/webpanel/SeoInfo/SeoInfo";
// import ContactInfo from "@/components/webpanel/ContactInfo/ContactInfo";
import axios from "axios";
import Swal from "sweetalert2";
import ContactInfoNew from "@/components/webpanel/ContactInfoNew/ContatctInfoNew";
import GeneralInfoNew from "@/components/webpanel/GeneralInfoNew/GeneralInfoNew";
export default function AddCompany() {
  const [companyState, setCompanyState] = useState(null);
  const [categoryState, setCategoryState] = useState("");

  const addCompany = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/company-setting`,
        companyState
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Company profile has been created`,
        showConfirmButton: false,
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
      <div className="mx-auto flex min-h-[100vh] max-w-[1440px] flex-col gap-4 rounded-md px-4">
        <div>New Company</div>
        {/* general */}

        <GeneralInfoNew
          state={companyState}
          setState={setCompanyState}
          edit={false}
          categoryState={categoryState}
          setCategoryState={setCategoryState}
        />
        {/* filter */}
        <FilterInfo
          state={companyState}
          setState={setCompanyState}
          edit={false}
          categoryState={categoryState}
        />
        {/* details */}
        <DetailsInfo
          state={companyState}
          setState={setCompanyState}
          edit={false}
          content={"companyProfile"}
        />
        {/* gallery */}
        <GalleryInfo
          state={companyState}
          setState={setCompanyState}
          edit={false}
        />
        {/* contact */}
        <ContactInfoNew
          state={companyState}
          setState={setCompanyState}
          edit={false}
        />
        {/* SEO */}
        <SeoInfo state={companyState} setState={setCompanyState} edit={false} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => companyState && addCompany()}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 mt-10 inline-block h-[70px] w-[200px] rounded bg-success px-6 pb-2  pt-2.5 text-2xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:scale-105 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Create
        </button>
      </div>
    </div>
  );
}
