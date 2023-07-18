import Footer from "@/components/blogPage/Footer";
import BlogBody from "@/components/blogPage/BlogBody";
import Header from "@/components/blogPage/Header";
import axios from "axios";
import Content from "@/components/companyProfile/Content";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = params.id;
  // const fetchBlog = async () => {
  //   const response = await fetch("http://localhost:3000/api/blogs", {
  //     method: "GET",
  //     cache: "no-store",
  //   });
  //   const data = await response.json();
  //   const thisBlog = data.blogSetting.find(
  //     (i: any) => i?.generalInfo?.blogUrl === blog
  //   );
  //   return thisBlog;
  //   // console.log(data?.blogSetting);
  // };

  const fetchSingleBlog = async () => {
    const response = await fetch(
      `http://localhost:3000/api/blog-item?id=${blog}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json();
    return data.blogSetting;
  };
  const blogData = await fetchSingleBlog();
  // console.log(blog);
  // console.log(blogData);
  return (
    <>
      {blogData ? (
        <>
          <meta name="keywords" content={blogData?.seo?.keyword} />
          <meta name="description" content={blogData?.seo?.description} />
          <Header blogData={blogData} />
          <BlogBody blogData={blogData} />
          <Footer />
        </>
      ) : (
        <div className="flex  h-[100vh]">
          <h1 className="m-auto font-bold text-4xl">Blog Not Found</h1>
        </div>
      )}
    </>
  );
}
