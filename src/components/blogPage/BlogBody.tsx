import Content from "../companyProfile/Content";

export default function BlogBody({ blogData }: any) {
  return (
    <div className="w-full py-6 ">
      <div className="max-w-[1270px] mx-auto flex flex-col gap-4 items-start">
        <Content companyData={blogData} />
        {/* <div className="bg-slate-100 h-[100vh] w-full flex">
          <div className="m-auto text-6xl font-bold">Blog Body Here</div>
        </div> */}

        <div className="flex flex-col gap-2">
          {blogData?.details?.facebook}
          <h1 className="text-slate-600 font-bold text-xl">References</h1>
          {blogData?.details?.references.map((i: any) => (
            <div className="text-slate-400">
              <a href={i.link}>{i.title}</a>
            </div>
          ))}
          <h1 className="text-slate-600 font-bold text-xl">Recommendations</h1>
          {blogData?.details?.recommendation.map((i: any) => (
            <div className="text-slate-400">
              sdfsd
              <a href={i.link}>{i.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
