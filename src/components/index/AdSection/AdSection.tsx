"use client";
import { useContext } from "react";

import Ad from "../Ad/Ad";
import { AdContext } from "@/contexts/AdContext";

export default function AdSection() {
  const { adsPage }: any = useContext(AdContext);
  // const sortedAd = activatedAds.sort((a: any, b: any) => a.edition - b.edition);
  //
  return (
    <div className="m-6 overflow-hidden desktop0:hidden desktop0:w-full   ">
      <div className="flex  flex-col   gap-y-3">
        {adsPage.map((i: any, index: any) => {
          return <Ad key={index} image={i?.image} link={i?.link} />;
        })}
      </div>
    </div>
  );
}
