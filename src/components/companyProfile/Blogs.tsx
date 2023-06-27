import { GrGallery } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import BlogCard from "../index/BlogCard/BlogCard";
export default function Blogs() {
  const blogs = [];
  for (let i = 0; i < 7; i++) {
    blogs.push(i);
  }
  return (
    <div className="w-full bg-slate-100">
      {/* container */}
      <div className="mx-auto max-w-[1440px] py-10 flex flex-col gap-6">
        <div className=" flex gap-5 items-center">
          <div className="p-4 rounded-full bg-orange-500 text-white">
            <TfiGallery size={25} className="" />
          </div>
          <h1 className="font-semibold text-2xl">Blogs</h1>
        </div>
        <div className="flex flex-wrap gap-20">
          {blogs.map((i) => (
            <BlogCard />
          ))}
        </div>
      </div>
    </div>
  );
}
