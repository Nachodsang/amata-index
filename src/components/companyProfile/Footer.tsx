import {}
export default function Footer() {
  return (
    <div className="py-10 flex flex-col  items-center bg-slate-100 mt-10">
      <div className="mx-auto max-w-[800px] flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-xl font-bold">Something Express</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            natus nisi magnam praesentium ratione deserunt laudantium
            dignissimos! Laboriosam, ex dolores?
          </p>
        </div>
        <div className="flex justify-center gap-4 w-full ">
          <div className="px-6 py-2 w-[50%] rounded-3xl bg-blue-700 text-white text-center">
            Call
          </div>
          <div className="px-6 py-2 w-[50%] rounded-3xl bg-blue-700 text-white text-center">
            Email
          </div>
        </div>
        {/* social media and business hours */}
        <div className="flex justify-center gap-4 h-[300px] w-full">
          <div className="w-[50%] rounded-xl border border-slate-200 shadow-lg  overflow-hidden">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Social Media</h1>
            </div>
            <div className="h-[40%] bg-red-200">sdf</div>
            <div className="h-[20%] bg-green-200">sdf</div>
            <div className="h-[20%] bg-blue-200">sdf</div>
          </div>
          <div className="w-[50%] rounded-xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="h-[20%] bg-slate-800 p-4">
              <h1 className="text-xl font-bold text-white">Business Hours</h1>
            </div>
            <div className="p-6 flex flex-col gap-1">
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-around">
                <span>MON</span>
                <span>08:30 - 17:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
