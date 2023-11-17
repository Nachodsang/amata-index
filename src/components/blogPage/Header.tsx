export default function BlogBody({ blogData, pageSetting }: any) {
  // (blogData?.);
  const localDate = `${new Date(blogData?.updatedAt)
    .getDate()
    .toString()
    .padStart(2, "0")}/${(new Date(blogData?.updatedAt).getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${new Date(blogData?.updatedAt).getFullYear()}`;

  return (
    <div className="w-full pt-24">
      <div className="max-w-[1270px] mx-auto flex flex-col gap-10 items-center px-4">
        <div className="w-[85%] rounded-xl shadow-xl overflow-hidden  ">
          <img
            src={blogData?.blogGeneralInfo?.coverImage}
            className="w-full mx-auto  h-auto "
          />
        </div>
        <div className="flex flex-col gap-6 items-start  w-full">
          <h1 className="desktop0:text-4xl tablet1:text-2xl text-xl  text-slate-700 font-semibold ">
            {blogData?.blogTitle}
          </h1>
          <div className="flex justify-between w-full border-y-2 border-slate-200 py-4">
            <div className="text-slate-400 text-xs tablet1:text-sm ">
              {blogData?.company || process.env.NEXT_PUBLIC_APP_NAME}
            </div>
            <div className="text-slate-400 text-xs tablet1:text-sm">
              Updated On: {localDate}
            </div>
          </div>
          {/* banner */}
          <img
            src={pageSetting?.topBanner}
            className="w-[75%] rounded-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
