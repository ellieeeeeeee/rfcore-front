import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

//swiper css
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
interface Props {
  src?: any;
}

export default function Slide({ src }: Props) {
  SwiperCore.use([Pagination]);

  return (
    <StyledSwiper slidesPerView="auto" pagination>
      {src &&
        src.map((item: any) => (
          <StyledSwiperSlide key={item}>
            {/* TODO:Image 태그로 수정 */}
            <img src={item} alt="product" />
          </StyledSwiperSlide>
        ))}
    </StyledSwiper>
  );
}
const StyledSwiper = styled(Swiper)`
  & .swiper-pagination.swiper-pagination-horizontal {
    bottom: 40px;
  }
  & .swiper-pagination-bullet {
    width: 26px;
    height: 4px;
    background: #aaa;
    border-radius: 0;
    opacity: 1;
  }
  & .swiper-pagination-bullet-active {
    background: #4789cd;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 6.6rem;
  background: #f4f4f4;
  & > img {
    max-width: 441px;
  }
`;
