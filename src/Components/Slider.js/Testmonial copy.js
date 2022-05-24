import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testmonial.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { H4, H5 } from "../Text/Text";



function Testmonial({ testmonials }) {
    return (

        <div className="testmonial">


            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,

                }}


                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >


                {testmonials?.map(data => (

                    <div>

                        <SwiperSlide>

                            <div className="testmonial_slider_card">

                                <img src={data.photo} alt="" />

                                <H5 text={data.description} margin="15px" />


                            </div>


                        </SwiperSlide>
                    </div>

                ))}


            </Swiper>

        </div >
    )
}

export default Testmonial;