export default function BlogBody() {
  return (
    <div className="w-full py-10">
      <div className="max-w-[1270px] mx-auto flex flex-col gap-10 items-center">
        <img
          className="w-[80%] rounded-xl shadow-xl"
          src="https://epresence.ie/wp-content/uploads/2014/01/blog_posts.jpg"
        />
        <div className="flex flex-col gap-6 items-start  w-full">
          <h1 className="text-5xl font-semibold">Blog Title</h1>
          <div className="flex justify-between w-full border-y-2 border-slate-200 py-4">
            <div>By: Lorem ipsum dolor sit.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
          </div>
          {/* banner */}
          <img
            src="https://www.at-once.info/images/banner-blog01.jpg"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
