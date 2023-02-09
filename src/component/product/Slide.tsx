import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Image from "next/legacy/image";
//swiper css
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import { theme } from "@/styles/theme";
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
            <Image src={item} alt="product" layout="fill" objectFit="contain" />
          </StyledSwiperSlide>
        ))}
    </StyledSwiper>
  );
}
const StyledSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-pagination.swiper-pagination-horizontal": {
    bottom: "4rem",
  },
  ".swiper-pagination-bullet": {
    width: "2.6rem",
    height: "0.4rem",
    background: "#aaa",
    borderRadius: 0,
    opacity: 1,
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: "#4789cd",
  },
  [theme.breakpoints.down("md")]: {
    ".swiper-pagination.swiper-pagination-horizontal": {
      bottom: "2rem",
    },
    ".swiper-pagination-bullet": {
      width: "2rem",
      height: "0.4rem",
    },
  },
}));

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
