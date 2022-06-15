import React, { Children, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperCarousel.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export const SwiperCarousel = (props) => {
    return (

        <div className="swiper_slider">


            <Swiper
       
     
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,

                }}


                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >


                <div className="slider_card">{props.children}</div>



            </Swiper>

        </div >
    )
}
