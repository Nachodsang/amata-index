"use client";
import { useContext } from "react";

import Ad from "../Ad/Ad";
import { AdContext } from "@/contexts/AdContext";

export default function AdSection() {
  const { adsPage }: any = useContext(AdContext);
  // const sortedAd = activatedAds.sort((a: any, b: any) => a.edition - b.edition);
  // console.log(sortedAd);
  return (
    <div className="m-6 desktop0:w-full overflow-hidden desktop0:hidden   ">
      <div className="flex  gap-y-3   flex-col">
        {adsPage.map((i: any, index: any) => {
          return <Ad key={index} image={i?.image} link={i?.link} />;
        })}
      </div>
    </div>
  );
}
