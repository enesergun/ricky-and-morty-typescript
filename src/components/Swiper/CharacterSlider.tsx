import React, { useRef, useState } from "react";
import cn from "classnames";
import styles from "./Swiper.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import CharacterCard from "../Cards/CharacterCard";

interface CharacterSliderProps {
  data: Array<number>; // Change the type to match your actual data structure
}

const CharacterSlider: React.FC<CharacterSliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="characterCardSlide"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CharacterCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CharacterSlider;
