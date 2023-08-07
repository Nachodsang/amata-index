import { useState, useEffect } from "react";
export default function BannerCard({
  title,
  category,
  image,
  link,
}: {
  title: any;
  category: string;
  image: string;
  link: string;
}) {
  return (
    <a href={link}>
      <div
        className={`${category}-background hover:cursor-pointer w-full h-auto overflow-hidden rounded-xl flex justify-center items-center hover:shadow-2xl`}
      >
        <div className="text-4xl h-auto overflow-hidden font-extrabold text-white capitalize">
          <img src={image} className="w-full h-auto object-cover" />
        </div>
      </div>
    </a>
  );
}
