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
    <div className="pb-40 w-full">
      <div className="max-w-[1440px] px-4 mx-auto  ">
        <div className="w-full rounded-2xl border-2 border-slate-100 overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: mapState }}></div>
        </div>
        {/* <iframe
          src={mapState}
          width="100%"
          height="500"
          // style="border:0;"
          // allowfullscreen="true"
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
}
