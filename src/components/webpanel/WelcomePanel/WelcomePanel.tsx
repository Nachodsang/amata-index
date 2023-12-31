"use client";
import { LuSettings2 } from "react-icons/lu";
export default function WelcomePanel() {
  return (
    <div className="rounded-xl min-h-[100vh] relative ">
      {/* container */}
      <div className="max-w-[1440px]  px-4 py-6 my-auto absolute top-[20%] left-[33%] translate-x-[-20%] text-slate-300  mx-auto flex flex-col items-center justify-center">
        <h1 className="text-center font-semibold text-6xl mb-4  ">
          {` Welcome to ${process.env.NEXT_PUBLIC_APP_NAME} Webpanel`}
        </h1>
        <LuSettings2 size={300} />
      </div>
    </div>
  );
}
