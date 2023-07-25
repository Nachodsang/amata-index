"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

import { RxCross2 } from "react-icons/rx";
export default function ShareModal({ show, setShow, link }: any) {
  return (
    <div
      onClick={() => setShow(!show)}
      className={`${
        !show ? "top-[100%]" : "top-0"
      } w-full h-[100vh] bg-black/50 fixed  left-0 transition-all z-[10] `}
    >
      <div className="desktop0:w-[40%] w-[80%] px-4 h-[300px] absolute top-[30%] left-[50%] translate-x-[-50%]  rounded-xl bg-slate-100 z-[20]">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <div
            className="absolute top-4 right-4 hover:cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <RxCross2 size={25} />
          </div>
          <h1 className="text-xl text-slate-500 ">
            Share this page on your social media
          </h1>
          <div className="flex justify-center items-center desktop0:gap-2 gap-1 tablet1:gap-4 ">
            <FacebookShareButton
              url={link}
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              //   hashtag={"#nextshare"}
            >
              <FacebookIcon size={70} round />
            </FacebookShareButton>
            <LineShareButton
              url={link}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <LineIcon size={70} round />
            </LineShareButton>
            <TwitterShareButton
              url={link}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TwitterIcon size={70} round />
            </TwitterShareButton>
            <FacebookMessengerShareButton url={link} appId={""}>
              <FacebookMessengerIcon size={70} round />
            </FacebookMessengerShareButton>
            <EmailShareButton url={link} subject={""} body="body">
              <EmailIcon size={70} round />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
