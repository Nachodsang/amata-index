"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import BlogGeneralInfo from "@/components/webpanel/BlogGeneralInfo/BlogGeneralInfo";
import BlogDetailsInfo from "@/components/webpanel/BlogDetailsInfo/BlogDetailsInfo";
import BlogSeoInfo from "@/components/BlogSeoInfo/BlogSeoInfo";
import Swal from "sweetalert2";
export default function BlogEditPage({ params }: { params: { id: string } }) {
  const blogURL = params.id;
  const router = useRouter();

  const [blogState, setBlogState] = useState<any>(null);
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`
      );
      const data = response.data;

      const thisBlog = data.blogSetting.find(
        (i: any) => i?.generalInfo?.blogUrl === blogURL
      );

      setBlogState(thisBlog);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch blog
  useEffect(() => {
    fetchBlog();
  }, []);

  const editBlog = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`,
        {
          _id: blogState?._id,
          newValue: blogState,
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${blogState?.blogTitle} Blog has been edited`,
        showConfirmButton: true,
        timer: 3000,
      });
      router.push("/webpanel/blogs");
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
        <div className="text-2xl font-bold text-slate-600 ">
          Edit: {blogState?.blogTitle}
        </div>
        {/* general */}
        <BlogGeneralInfo
          edit={true}
          state={blogState}
          setState={setBlogState}
        />

        {/* details */}

        <BlogDetailsInfo
          edit={true}
          content="blog"
          state={blogState}
          setState={setBlogState}
        />
        <BlogSeoInfo edit={true} state={blogState} setState={setBlogState} />
      </div>

      <div className="fixed top-28 right-10">
        <button
          onClick={editBlog}
          type="button"
          className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 mt-10 inline-block  rounded bg-success px-6 pb-2  pt-2.5 text-2xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:scale-105 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
