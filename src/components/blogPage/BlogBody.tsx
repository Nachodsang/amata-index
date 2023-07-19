import Content from "../companyProfile/Content";

export default function BlogBody({ blogData }: any) {
  return (
    <div className="w-full py-6 ">
      <div className="max-w-[1270px] mx-auto flex flex-col gap-4 items-start ">
        <Content companyData={blogData} />
        {/* <div className="bg-slate-100 h-[100vh] w-full flex">
          <div className="m-auto text-6xl font-bold">Blog Body Here</div>
        </div> */}

        <div className="flex flex-col gap-2 px-4">
          <span className="text-slate-400 text-sm">
            {blogData?.details?.facebook}
          </span>
          <h1 className="text-slate-400 font-bold text-base">References</h1>
          <div className="flex flex-col gap-1">
            {blogData?.details?.references.map((i: any) => (
              <div className="text-slate-400 text-sm">
                <a href={i.link}>{i.title}</a>
              </div>
            ))}
          </div>
          <h1 className="text-slate-400 font-bold  text-base">
            Recommendations
          </h1>
          <div className="flex flex-col gap-1">
            {blogData?.details?.recommendation.map((i: any) => (
              <div className="text-slate-400 text-sm">
                sdfsd
                <a href={i.link}>{i.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
