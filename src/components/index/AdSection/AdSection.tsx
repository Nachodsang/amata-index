"use client";
import { useContext } from "react";

import Ad from "../Ad/Ad";
import { AdContext } from "@/contexts/AdContext";
import { PageSettingContext } from "@/contexts/PageSettingContext";

export default function AdSection() {
  const { adsPage }: any = useContext(AdContext);
  const { pageSetting }: any = useContext(PageSettingContext);
  // const sortedAd = activatedAds.sort((a: any, b: any) => a.edition - b.edition);
  //

  const adAmount = pageSetting?.adAmount;
  return (
    <div className="m-6 overflow-hidden desktop0:hidden desktop0:w-full   ">
      <div className="grid tablet1:grid-cols-2 grid-cols-1  gap-4  gap-y-3">
        {adsPage.slice(0, adAmount).map((i: any, index: any) => {
          return <Ad key={index} image={i?.image} link={i?.link} />;
        })}
      </div>
    </div>
  );
}
