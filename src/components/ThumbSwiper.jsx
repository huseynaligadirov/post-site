import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

export default function App({ photos }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {photos.map((photo) => (
          <SwiperSlide>
            <img src={`https://elanlar.im/uploads/item/${photo.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {photos.map((photo) => (
          <SwiperSlide>
            <img src={`https://elanlar.im/uploads/item/${photo.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
