"use client";
// core version + navigation, pagination modules:
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCourousel({ images }: any) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // navigation
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 2,
          },
        }}
        className="h-full"
      >
        {images.map((i: any, index: any) => (
          <SwiperSlide key={index}>
            <img
              src={i}
              className="w-full h-[300px] tablet0:h-auto aspect-[4/3] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
