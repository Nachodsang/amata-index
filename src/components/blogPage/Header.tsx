export default function BlogBody({ blogData, pageSetting }: any) {
  // (blogData?.);
  const localDate = `${new Date(blogData?.updatedAt)
    .getDate()
    .toString()
    .padStart(2, "0")}/${(new Date(blogData?.updatedAt).getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${new Date(blogData?.updatedAt).getFullYear()}`;

  return (
    <div className="w-full py-10 mt-10">
      <div className="max-w-[1270px] mx-auto flex flex-col gap-10 items-center px-4">
        <div className="w-full rounded-xl shadow-xl overflow-hidden ">
          <img
            src={blogData?.generalInfo?.coverImage}
            className="w-full h-auto "
          />
        </div>
        <div className="flex flex-col gap-6 items-start  w-full">
          <h1 className="text-5xl font-semibold ">{blogData?.blogTitle}</h1>
          <div className="flex justify-between w-full border-y-2 border-slate-200 py-4">
            <div className="text-slate-400">
              By: {process.env.NEXT_PUBLIC_APP_NAME}
            </div>
            <div className="text-slate-400">Updated On: {localDate}</div>
          </div>
          {/* banner */}
          <img src={pageSetting?.topBanner} className="w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
