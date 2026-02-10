"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const PhotoCarousel = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000 }}
                className="w-full h-full"
            >

                <SwiperSlide>
                    <img
                        src="/images/me1.jpeg"
                        className="w-full h-full object-cover object-[center_60%]"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="/images/me3.jpeg"
                        className="w-full h-full object-cover object-[center_30%]"
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default PhotoCarousel;
