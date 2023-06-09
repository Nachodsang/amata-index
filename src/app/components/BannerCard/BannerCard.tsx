import { useState, useEffect } from "react";
export default function BannerCard({
  num,
  category,
}: {
  num: number;
  category: string;
}) {
  return (
    <div
      className={`${category}-background hover:cursor-pointer w-full h-full rounded-xl flex justify-center items-center hover:shadow-2xl`}
    >
      <div className="text-4xl font-extrabold text-white capitalize">
        {category} Banner {num}
      </div>
    </div>
  );
}
