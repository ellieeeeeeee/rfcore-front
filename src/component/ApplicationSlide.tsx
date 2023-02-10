import React from "react";
import { styled } from "@mui/material";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
//swiper css
import "swiper/css";
import "swiper/css/navigation";

export default function Slide() {
  SwiperCore.use([Navigation]);
  return (
    <StyledSwiper
      slidesPerView={2.3}
      navigation
      spaceBetween={99}
      centeredSlides
      initialSlide={1}
    >
      <StyledSwiperSlide>
        <Image layout="fill" objectFit="contain" src="/sample.png" alt="" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <Image layout="fill" objectFit="contain" src="/sample.png" alt="" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <Image layout="fill" objectFit="contain" src="/sample.png" alt="" />
      </StyledSwiperSlide>
    </StyledSwiper>
  );
}
const StyledSwiper = styled(Swiper)`
  & .swiper-slide-prev img {
    mask-image: linear-gradient(to right, transparent 46%, black 100%);
  }
  & .swiper-slide-next img {
    mask-image: linear-gradient(to left, transparent 46%, black 100%);
  }
  & .swiper-slide-prev,
  .swiper-slide-next {
  }
  & .swiper-button-prev {
    left: 25.5%;
  }
  & .swiper-button-next {
    right: 25.5%;
  }
  & .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
    width: 24px;
    height: 36px;
  }
  & .swiper-button-prev::after {
    background: url("/icon_prev_white.svg") center;
  }
  & .swiper-button-next::after {
    background: url("/icon_next_white.svg") center;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  height: 400px !important;
`;
