import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Wall01 from '../wallpapers/Wall01';
import Pattern02 from '../artwork/Pattern02/Pattern02';
import Pattern01 from '../artwork/Pattern01/Pattern01';
import Wall02 from '../wallpapers/Wall02';

const Wallpapers = () => {
    return (
        <Swiper
            style={{ height: '100vh' }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Wall01 />
            </SwiperSlide>
            <SwiperSlide>
                <Pattern02 />
            </SwiperSlide>
            <SwiperSlide>
                <Pattern01 />
            </SwiperSlide>
            <SwiperSlide>
                <Wall02 />
            </SwiperSlide>
        </Swiper>
    );
};

export default Wallpapers;