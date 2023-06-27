import Input from "../Input/Input";

export default function ContactInfo() {
  return (
    <div className="w-full bg-white border border-slate-300 shadow-sm rounded-md  flex flex-col p-4">
      <div className="flex justify-start border-b border-slate-300 py-2">
        <div>Contact</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 items-start">
          <label>Business Hour</label>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
          <div className="flex justify-center border w-[50%] border-slate-200 py-1 px-2">
            <div className="flex gap-1  flex-1">
              <input type="checkbox" />
              <h1>Sunday</h1>
            </div>
            <div className=" flex-1">
              <h1>time</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-2">
          <div className="flex flex-col w-[400px] gap-2 items-start">
            <Input label="Tel" />
          </div>
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Input label="SMS" />
          </div>
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Input label="E-mail" />
          </div>
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Input label="Website" />
          </div>
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Input label="Facebook" />
          </div>
          <div className="flex flex-col  w-[400px]  gap-2 items-start">
            <Input label="Line" />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start">
            <label htmlFor="">Address</label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="">Google Map</label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
