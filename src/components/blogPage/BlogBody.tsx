import Content from "../companyProfile/Content";

export default function BlogBody({ blogData }: any) {
  return (
    <div className="w-full py-6 ">
      <div className="max-w-[1270px] mx-auto flex flex-col gap-4 items-start">
        <Content companyData={blogData} />
        {/* <div className="bg-slate-100 h-[100vh] w-full flex">
          <div className="m-auto text-6xl font-bold">Blog Body Here</div>
        </div> */}
        <div className="flex flex-col gap-4">
          <div>Website : www.ctwcargo.com</div>
          <div>Website Profile : บริษัท ซีทีดับบลิว คาร์โก้ จำกัด</div>
          <div>{blogData?.details?.facebook}</div>
          <div>Line : @ctwcargo</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
