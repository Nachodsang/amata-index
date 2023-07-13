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
import BlogGeneralInfo from "@/components/webpanel/BlogGeneralInfo/BlogGeneralInfo";
import BlogDetailsInfo from "@/components/webpanel/BlogDetailsInfo.tsx/BlogDetailsInfo";
import BlogSeoInfo from "@/components/BlogSeoInfo/BlogSeoInfo";
export default function addBlog() {
  const [blogState, setBlogState] = useState({});

  const addBlog = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/blogs",
      blogState
    );
    console.log(response);
  };

  return (
    <div className="">
      <div className="mx-auto flex min-h-[100vh] max-w-[1440px] flex-col gap-4 rounded-md px-4">
        <div>New Blog</div>
        {/* general */}
        <BlogGeneralInfo
          edit={false}
          state={blogState}
          setState={setBlogState}
        />
        {/* <GeneralInfo state={companyState} setState={setCompanyState} /> */}

        {/* details */}
        {/* <DetailsInfo
          state={companyState}
          setState={setCompanyState}
          content={"blog"}
        /> */}
        <BlogDetailsInfo
          edit={false}
          content="blog"
          state={blogState}
          setState={setBlogState}
        />
        <BlogSeoInfo edit={false} state={blogState} setState={setBlogState} />
      </div>

      <div className="flex justify-center">
        <button
          onClick={addBlog}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 mt-10 inline-block h-[70px] w-[200px] rounded bg-success px-6 pb-2  pt-2.5 text-2xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:scale-105 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Create
        </button>
      </div>
    </div>
  );
}
