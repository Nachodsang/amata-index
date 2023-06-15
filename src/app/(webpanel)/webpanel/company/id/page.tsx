import InputGroup from "@/components/InputGroup/InputGroup";
import Input from "@/components/Input/Input";

export default function buildCompany() {
  return (
    <div className="">
      <div className="mx-auto max-w-[1440px] min-h-[100vh] rounded-md gap-4 flex flex-col px-4">
        <div>New Company</div>
        {/* general */}

        <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md flex flex-col p-4 gap-2">
          <div className="flex justify-start border-b border-slate-300 py-2">
            <div>General</div>
          </div>
          <div className="flex justify-between">
            {/* logo */}
            <div>
              <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                className="w-[300px] h-[300px] object-cover"
              />
              <div className="mb-3">
                <label className="mb-2 inline-block   text-xs text-red-500 dark:text-neutral-200">
                  Dimension: 500 x 500 pixel (auto resize & crop)
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFile"
                />
              </div>
              {/* logo upload */}
            </div>
            {/* cover */}
            <div>
              <img
                src="https://industrial.frasersproperty.co.th/storage/updates/blog/2022/10/5-factors-to-consider-when-choosing-a-location-to-rent-a-Factory/img-08.jpg"
                className="w-[1500px] h-[300px] object-cover"
              />
              <label className="mb-2 inline-block  text-xs text-red-500 dark:text-neutral-200">
                Dimension: 1920 x 500 pixel (auto resize & crop)
              </label>
              <input
                className="mb-2 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
              />
              {/* video */}
              <Input label="Video URL" />
            </div>
          </div>

          <div>
            <InputGroup />
          </div>
          {/* save button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button>
          </div>
        </div>
        {/* filter */}
        <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
          <div className="flex justify-start border-b border-slate-300 py-2">
            <div>Filter</div>
          </div>
          <div>xxx</div>
        </div>
        {/* details */}
        <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
          <div className="flex justify-start border-b border-slate-300 py-2">
            <div>Details</div>
          </div>
          <div>xxx</div>
        </div>
        {/* gallery */}
        <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
          <div className="flex justify-start border-b border-slate-300 py-2">
            <div>Gallery</div>
          </div>
          <div>xxx</div>
        </div>
        {/* contact */}
        <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
          <div className="flex justify-start border-b border-slate-300 py-2">
            <div>Contact</div>
          </div>
          <div>xxx</div>
        </div>
        {/* SEO */}
        <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
          <div className="flex justify-start border-b border-slate-300 py-2">
            <div>SEO</div>
          </div>
          <div>xxx</div>
        </div>
      </div>
    </div>
  );
}
