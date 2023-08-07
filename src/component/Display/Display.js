import React from "react";
import "./Display.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

//images
import img1 from "../../assets/images/display/1.jpg";
import img2 from "../../assets/images/display/2.jpg";
import img3 from "../../assets/images/display/3.jpg";
import img4 from "../../assets/images/display/4.jpg";
import img5 from "../../assets/images/display/5.jpg";
import img6 from "../../assets/images/display/6.jpg";
import img7 from "../../assets/images/display/7.jpg";
import img8 from "../../assets/images/display/8.jpg";
import img9 from "../../assets/images/display/10.jpg";

const Display = () => {
  return (
    <div className="mt-32">
      <h1 className="mb-10 text-5xl text-red-400 text-center">
        Just a glance of our work!
      </h1>
      <>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Display;
