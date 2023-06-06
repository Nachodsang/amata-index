import BlogCard from "../BlogCard/BlogCard";
let blog: number[] = [];
for (let i = 0; i < 100; i++) {
  blog.push(i);
}

export default function about() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-[1270px] px-4 pt-4  ">
        <div className="">
          <h1 className="text-4xl font-bold mb-5 ">Blog</h1>
        </div>
        {/* Container */}
        <div className="lg:grid-cols-4 grid gap-6">
          {blog.map((i) => (
            <BlogCard />
          ))}
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
