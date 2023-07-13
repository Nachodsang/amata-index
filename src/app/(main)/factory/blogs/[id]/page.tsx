import Footer from "@/components/blogPage/Footer";
import BlogBody from "@/components/blogPage/BlogBody";
import Header from "@/components/blogPage/Header";
import axios from "axios";
import Content from "@/components/companyProfile/Content";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = params.id;
  const fetchBlog = async () => {
    const response = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    const thisBlog = data.blogSetting.find(
      (i: any) => i?.generalInfo?.blogUrl === blog
    );
    return thisBlog;
    // console.log(data?.blogSetting);
  };
  const blogData = await fetchBlog();
  console.log(blog);
  console.log(blogData);
  return (
    <div>
      <Header blogData={blogData} />

      <BlogBody blogData={blogData} />
      <Footer />
    </div>
  );
}
