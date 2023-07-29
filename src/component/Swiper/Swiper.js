import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/images/head/1.jpg";
import img2 from "../../assets/images/head/2.jpg";
import img3 from "../../assets/images/head/3.jpeg";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import NavigationBar from "../NavigationBar/NavigationBar";

const Swiperr = () => {
  return (
    <div>
      <>
        <Swiper
          rewind={true}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="slider1">
            <NavigationBar></NavigationBar>
            <div className="text-white text-center p-20 mt-32 mx-auto  slider-container rounded-lg shadow-lg">
              <h1 className=" text-3xl slider-title pb-7">This is slider 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum ullam sunt facilis hic voluptatibus quisquam eos
                aspernatur molestias illo impedit dolor ex, perspiciatis dolorem
                quis unde minus minima, tempora debitis.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider2">
            <NavigationBar></NavigationBar>
            <div className="text-white text-center p-20 mt-32 mx-auto  slider-container rounded-lg shadow-lg">
              <h1 className=" text-3xl slider-title pb-7">This is slider 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum ullam sunt facilis hic voluptatibus quisquam eos
                aspernatur molestias illo impedit dolor ex, perspiciatis dolorem
                quis unde minus minima, tempora debitis.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider3">
            <NavigationBar></NavigationBar>
            <div className="text-white text-center p-20 mt-32 mx-auto slider-container rounded-lg shadow-lg">
              <h1 className=" text-3xl slider-title pb-7">This is slider 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum ullam sunt facilis hic voluptatibus quisquam eos
                aspernatur molestias illo impedit dolor ex, perspiciatis dolorem
                quis unde minus minima, tempora debitis.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Swiperr;
