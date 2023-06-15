export default function HeaderSettingPage() {
  return (
    <div className="bg-white rounded-xl min-h-[100vh] ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6  mx-auto">
        <h1 className="text-center font-semibold text-xl mb-4  ">
          Header Setting
        </h1>
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
        </div>
      </div>
    </div>
  );
}
