"use client";

import { useEffect, useState } from "react";

export default function Map({ companyData }: any) {
  const [mapState, setMapState] = useState("");

  useEffect(() => {
    // companyData?.contacts?.googleMap ??
    setMapState(companyData?.contacts?.googleMap);
  }, [companyData?.contacts?.googleMap]);
  //   console.log(mapState);
  //   console.log(companyData?.contacts?.googleMap);
  return (
    <div className="pb-40 w-full">
      <div className="max-w-[1440px] mx-auto rounded-2xl overflow-hidden ">
        {/* <iframe
          src={mapState}
          width="100%"
          height="500"
          // style="border:0;"
          // allowfullscreen="true"
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <div dangerouslySetInnerHTML={{ __html: mapState }}></div>
      </div>
    </div>
  );
}
