import { useEffect, useState } from "react";
export default function DayBox({ day, onCheck }: any) {
  const defaultBoxState = { day: "", time: "", status: false };
  const [boxState, setBoxState] = useState(defaultBoxState);

  //   useEffect to set day to box state
  useEffect(() => {
    if (boxState.status) {
      setBoxState({ ...boxState, day: day });
    }
  }, [boxState.status]);
  useEffect(() => {
    onCheck(boxState);
  }, [boxState]);
  console.log(boxState);
  return (
    <div className="flex  border w-[50%] border-slate-200 py-1   ">
      <div className="flex w-[50%] justify-between px-10 ">
        <input
          type="checkbox"
          checked={boxState.status}
          onChange={() => {
            setBoxState({ ...boxState, status: !boxState.status });
          }}
          className=" hover:cursor-pointer"
        />
        <h1 className="">{day}</h1>
      </div>
      <div className="w-[50%]   border-l  border-slate-300 px-6 ">
        {boxState.status ? (
          <div className="flex justfiy-between items-center gap2s">
            <input
              onChange={(e) =>
                setBoxState({ ...boxState, time: e.target.value })
              }
              type="text"
              className="w-full h-full px-6 hover:cursor-pointer rounded-lg border border-slate-200 "
              placeholder="business hour . . ."
            />
            {/* <button
              onClick={() => {
                onCheck(boxState);
              }}
              type="button"
              className="inline-block rounded bg-success  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              save
            </button> */}
          </div>
        ) : (
          <h1 className="bg-slate-300 rounded-lg text-white font-bold">Time</h1>
        )}
      </div>
    </div>
  );
}
