import React, { useEffect, useRef, useState } from "react";
import Image from "next/legacy/image";
import { Container, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller, Navigation } from "swiper";
import { theme } from "@/styles/theme";

//swiper css
import "swiper/css";
import "swiper/css/navigation";

export default function MainSlide() {
  SwiperCore.use([Navigation]);

  const gallerySwiperRef = useRef(null);
  const thumnailSwiperRef = useRef(null);

  const gallerySwiperParams = {};
  const thumnailSwiperParams = {};
  const [controlledSwiper, setControlledSwiper] = useState();
  return (
    <>
      <ContentSwiper
        ref={gallerySwiperRef}
        navigation
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
      >
        <ContentSlide style={{ height: "300px" }}>
          <Image
            layout="fill"
            alt="img"
            objectFit="contain"
            src="/sample_02.png"
          />
        </ContentSlide>
        <ContentSlide style={{ height: "300px" }}>
          <Image
            layout="fill"
            alt="img"
            objectFit="contain"
            src="/sample_02.png"
          />
        </ContentSlide>
        <ContentSlide style={{ height: "300px" }}>
          <Image
            layout="fill"
            alt="img"
            objectFit="contain"
            src="/sample_02.png"
          />
        </ContentSlide>
        <ContentSlide style={{ height: "300px" }}>
          <Image
            layout="fill"
            alt="img"
            objectFit="contain"
            src="/sample_02.png"
          />
        </ContentSlide>
      </ContentSwiper>
      <ThumnailSwiper
        slidesPerView={4}
        modules={[Controller]}
        onSwiper={() => setControlledSwiper}
      >
        <ThumnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            Amplifiers
          </Typography>
        </ThumnailSlide>
        <ThumnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            MMICs
          </Typography>
        </ThumnailSlide>
        <ThumnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            Sub-systems
          </Typography>
        </ThumnailSlide>
        <ThumnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            Customized Solution
          </Typography>
        </ThumnailSlide>
      </ThumnailSwiper>
    </>
  );
}
const ContentSwiper = styled(Swiper)(({ theme }) => ({}));
const ContentSlide = styled(SwiperSlide)(({ theme }) => ({}));
const ThumnailSwiper = styled(Swiper)(({ theme }) => ({
  "& .swiper-slide-active p": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));
const ThumnailSlide = styled(SwiperSlide)`
  max-width: fit-content;
  margin: 0 3.6rem;
  :first-child {
    margin-left: 0px;
  }
`;
