import Footer from "@/components/blogPage/Footer";
import BlogBody from "@/components/blogPage/BlogBody";
import Header from "@/components/blogPage/Header";
import axios from "axios";
import Content from "@/components/companyProfile/Content";
import TopBarBlogPage from "@/components/blogPage/TopBarBlogPage";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = params.id;

  const fetchSingleBlog = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/blog-item?id=${blog}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json();
    return data.blogSetting;
  };
  const blogData = await fetchSingleBlog();

  const fetchPageSetting = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/page-setting`
    );
    const data = await response.json();
    return data.pageSetting;
  };
  return (
    <>
      {blogData && !blogData?.deleted ? (
        <>
          <meta name="keywords" content={blogData?.seo?.keyword} />
          <meta name="description" content={blogData?.seo?.description} />
          <TopBarBlogPage blogData={blogData} />
          <Header blogData={blogData} pageSetting={await fetchPageSetting()} />
          <BlogBody blogData={blogData} />
          <Footer pageSetting={await fetchPageSetting()} />
        </>
      ) : (
        <div className="flex  h-[100vh]">
          <h1 className="m-auto font-bold text-4xl">Blog Not Found</h1>
        </div>
      )}
    </>
  );
}
