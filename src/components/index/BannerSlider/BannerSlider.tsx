"use client";
// core version + navigation, pagination modules:
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerCard from "../BannerCard/BannerCard";

// let banners: number[] = [];
// for (let i = 1; i <= 20; i++) {
//   banners.push(i);
// }

export default function BannerSlider({
  category,
  banners,
}: {
  category: string;
  banners: any;
}) {
  console.log(banners);
  return (
    <div className="w-full  ">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          990: {
            slidesPerView: 2,
          },
        }}
        className="h-full"
      >
        {banners.map((i: any, index: any) => (
          <SwiperSlide key={index}>
            <BannerCard
              category={category}
              title={i?.bannerTitle}
              image={i?.image}
              link={i?.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
