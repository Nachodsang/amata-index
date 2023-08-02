"use client";

import { useEffect, useState } from "react";

export default function Map({ companyData }: any) {
  const [mapState, setMapState] = useState("");

  useEffect(() => {
    // companyData?.contacts?.googleMap ??
    setMapState(companyData?.contacts?.googleMap);
  }, [companyData?.contacts?.googleMap]);
  //   (mapState);
  //   (companyData?.contacts?.googleMap);
  return (
    <div className="py-10 w-full">
      <div className=" px-4 mx-auto  ">
        <div className="w-full rounded-2xl border-2 border-slate-100 overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: mapState }}></div>
        </div>
      </div>
    </div>
  );
}
