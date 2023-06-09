import BlogCard from "../BlogCard/BlogCard";
let blogs: number[] = [];
for (let i = 0; i < 12; i++) {
  blogs.push(i);
}

export default function blog({ category }: { category: string }) {
  return (
    <div className="w-full py-10  px-6 relative ">
      <div className="mx-auto max-w-[1270px] px-4 pt-4  ">
        <div className="">
          <h1 className="text-4xl font-bold mb-5 ">Blog</h1>
        </div>
        {/* Grid Container */}
        <div className="desktop0:grid-cols-4 tablet2:grid-cols-2 tablet2:grid flex flex-col items-center gap-y-4 gap-x-0">
          {blogs.map((i, index) => (
            <BlogCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
