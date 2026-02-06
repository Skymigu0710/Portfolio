"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const PhotoCarousel = () => {
    return (
        <div className="relative w-full overflow-hidden">


            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000 }}
                className="w-full max-w-md h-[600px]"
            >
                <SwiperSlide>
                    <img
                        src="/images/me5.jpeg"
                        className=" w-full h-full object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="/images/me1.jpeg"
                        className="w-full h-full object-cover object-center "
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="/images/me3.jpeg"
                        className="w-full h-full object-cover object-[bottom_40%]"
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default PhotoCarousel;
