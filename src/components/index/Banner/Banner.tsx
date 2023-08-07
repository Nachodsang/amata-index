"use client";
import { useContext } from "react";
import { BannerContext } from "@/contexts/bannerContext";
import BannerSlider from "../BannerSlider/BannerSlider";

export default function Banner({ category }: { category: string }) {
  const { banners, bannerPage }: any = useContext(BannerContext);
  return (
    <div className=" w-full py-[30px]  px-6 ">
      <div className="max-w-[1270px]   mx-auto py-4 px-4 flex gap-4 w-full">
        <BannerSlider category={category} banners={bannerPage} />
      </div>
    </div>
  );
}
