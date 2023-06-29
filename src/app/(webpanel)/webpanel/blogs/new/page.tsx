"use client";
import { useState } from "react";
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
export default function addBlog() {
  const [companyState, setCompanyState] = useState({});

  const addCompany = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/company-setting",
      companyState
    );

    console.log(response);
  };
  console.log(companyState);
  return (
    <div className="">
      <div className="mx-auto max-w-[1440px] min-h-[100vh] rounded-md gap-4 flex flex-col px-4">
        <div>New Blog</div>
        {/* general */}

        <GeneralInfo state={companyState} setState={setCompanyState} />
        {/* filter */}
        <FilterInfo state={companyState} setState={setCompanyState} />
        {/* details */}
        <DetailsInfo state={companyState} setState={setCompanyState} />
        {/* gallery */}
        <GalleryInfo state={companyState} setState={setCompanyState} />
        {/* contact */}
        <ContactInfo state={companyState} setState={setCompanyState} />
        {/* SEO */}
        <SeoInfo state={companyState} setState={setCompanyState} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={addCompany}
          type="button"
          className="mt-10 hover:scale-105 w-[200px] h-[70px] text-2xl inline-block rounded bg-success px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Create
        </button>
      </div>
    </div>
  );
}
