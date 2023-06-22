"use client";
import { useContext } from "react";

import Ad from "../Ad/Ad";
import { AdContext } from "@/contexts/AdContext";

let mockAdArr: number[] = [];
for (let i = 1; i <= 4; i++) {
  mockAdArr.push(i);
}

export default function AdSection() {
  const { activatedAds }: any = useContext(AdContext);
  return (
    <div className="m-4 desktop0:w-full  overflow-hidden gap-y-3 desktop0:hidden flex flex-col   ">
      {activatedAds.map((i: any, index: any) => (
        <Ad key={index} image={i?.image} />
      ))}
    </div>
  );
}
