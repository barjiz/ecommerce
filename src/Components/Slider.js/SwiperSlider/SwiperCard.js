import React, { Children } from 'react'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SwiperSlide } from 'swiper/react';

export const SwiperCard = (props) => {
    return (

        <div>

            <SwiperSlide>

                <h1>{props.children}</h1>

            </SwiperSlide>

        </div>
    )
}
