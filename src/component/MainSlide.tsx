import Image from "next/legacy/image";
import { Box, Grid, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller, Navigation } from "swiper";
import { theme } from "@/styles/theme";

//swiper css
import "swiper/css";
import "swiper/css/navigation";
import { Stack } from "@mui/system";

export default function MainSlide() {
  SwiperCore.use([Navigation]);

  return (
    <>
      <ThumbnailSwiper
        slidesPerView={4}
        navigation
        modules={[Controller]}
        // onSwiper={setFirstSwiper}
        // controller={{ control: secondSwiper }}
      >
        <ThumbnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            Amplifiers
          </Typography>
        </ThumbnailSlide>
        <ThumbnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            MMICs
          </Typography>
        </ThumbnailSlide>
        <ThumbnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            Sub-systems
          </Typography>
        </ThumbnailSlide>
        <ThumbnailSlide>
          <Typography
            variant="body2"
            color={theme.palette.secondary.contrastText}
          >
            Customized Solution
          </Typography>
        </ThumbnailSlide>
      </ThumbnailSwiper>
      <ContentSwiper
        navigation
        modules={[Controller]}
        // onSwiper={setSecondSwiper}
        // controller={{ control: firstSwiper }}
      >
        <ContentSlide>
          <Grid container>
            <Grid item xs={12} lg={6} className="image-box">
              <Image layout="fill" alt="img" src="/sample_02.png" />
            </Grid>
            <Grid item xs={12} lg={6} className="text-box">
              <Box>
                <Typography variant="h3">Amplifiers</Typography>
                <Typography variant="body1">
                  RFcore has been innovating MMIC solutions for phased array
                  system pursuing more ease of use, higher performance, higher
                  level of integration as well as lower cost. We believe that
                  the most suitable way is exploiting properties of God gifted
                  semiconductor Silicon and GaN. We aim at integrating all
                  components of TRM for active phased array on single die and
                  even multi-channel TRM too.
                </Typography>
              </Box>
              <Stack direction="row" className="click-area">
                <Typography variant="caption">More</Typography>
                <Box className="icon-box">
                  <Image
                    alt="img"
                    src="/icon_union_blue.svg"
                    layout="fill"
                    priority
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </ContentSlide>
        <ContentSlide>
          <Grid container>
            <Grid item xs={6} className="image-box">
              <Image layout="fill" alt="img" src="/sample_02.png" priority />
            </Grid>
            <Grid item xs={6} className="text-box">
              <Box>
                <Typography variant="h3">MMICs</Typography>
                <Typography variant="body2">
                  RFcore has been innovating MMIC solutions for phased array
                  system pursuing more ease of use, higher performance, higher
                  level of integration as well as lower cost. We believe that
                  the most suitable way is exploiting properties of God gifted
                  semiconductor Silicon and GaN. We aim at integrating all
                  components of TRM for active phased array on single die and
                  even multi-channel TRM too.
                </Typography>
                <Stack direction="row" className="click-area">
                  <Typography variant="caption" mr={1.5}>
                    More
                  </Typography>
                  <Image
                    alt="img"
                    src="/icon_union_blue.svg"
                    objectFit="contain"
                    width={44}
                    height={8}
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </ContentSlide>
        <ContentSlide>
          <Grid container>
            <Grid item xs={6} className="image-box">
              <Image layout="fill" alt="img" src="/sample_02.png" priority />
            </Grid>
            <Grid item xs={6} className="text-box">
              <Box>
                <Typography variant="h3">Sub-systems</Typography>
                <Typography variant="body2">
                  RFcore has been innovating MMIC solutions for phased array
                  system pursuing more ease of use, higher performance, higher
                  level of integration as well as lower cost. We believe that
                  the most suitable way is exploiting properties of God gifted
                  semiconductor Silicon and GaN. We aim at integrating all
                  components of TRM for active phased array on single die and
                  even multi-channel TRM too.
                </Typography>
                <Stack direction="row" className="click-area">
                  <Typography variant="caption" mr={1.5}>
                    More
                  </Typography>
                  <Image
                    alt="img"
                    src="/icon_union_blue.svg"
                    objectFit="contain"
                    width={44}
                    height={8}
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </ContentSlide>
        <ContentSlide>
          <Grid container>
            <Grid item xs={6} className="image-box">
              <Image layout="fill" alt="img" src="/sample_02.png" priority />
            </Grid>
            <Grid item xs={6} className="text-box">
              <Box>
                <Typography variant="h3">Customized Solution</Typography>
                <Typography variant="body2">
                  RFcore has been innovating MMIC solutions for phased array
                  system pursuing more ease of use, higher performance, higher
                  level of integration as well as lower cost. We believe that
                  the most suitable way is exploiting properties of God gifted
                  semiconductor Silicon and GaN. We aim at integrating all
                  components of TRM for active phased array on single die and
                  even multi-channel TRM too.
                </Typography>
                <Stack direction="row" className="click-area">
                  <Typography variant="caption" mr={1.5}>
                    More
                  </Typography>
                  <Image
                    alt="img"
                    src="/icon_union_blue.svg"
                    objectFit="contain"
                    width={44}
                    height={8}
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </ContentSlide>
      </ContentSwiper>
    </>
  );
}
const ThumbnailSwiper = styled(Swiper)(({ theme }) => ({
  margin: "10rem 0 4rem",
  "& .swiper-slide-active p": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  [theme.breakpoints.down(1024)]: {
    display: "none",
  },
}));
const ThumbnailSlide = styled(SwiperSlide)`
  position: relative;
  max-width: fit-content;
  padding: 0 3.6rem;
  :first-of-type {
    padding-left: 0px;
  }
  :not(:last-child)::after {
    position: absolute;
    content: "";
    display: block;
    width: 1px;
    height: 17px;
    background: #ddd;
    right: 0;
    top: 5px;
  }
`;

const ContentSwiper = styled(Swiper)(({ theme }) => ({
  "& .swiper-button-prev::after,.swiper-button-next::after": {
    content: `""`,
    width: "2rem",
    height: "3.7rem",
  },
  "& .swiper-button-prev::after": {
    background: `url("/icon_prev_gray.svg") center`,
  },
  "& .swiper-button-next::after": {
    background: `url("/icon_next_gray.svg") center`,
  },
  [theme.breakpoints.down(1024)]: {
    ".MuiGrid-container": {
      flexDirection: "column",
    },
  },
}));

const ContentSlide = styled(SwiperSlide)(({ theme }) => ({
  ".image-box": {
    position: "relative",
    width: "100%",
    minHeight: "60rem",
  },
  ".text-box": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "8rem 10rem",
    backgroundColor: theme.palette.secondary.light,
  },
  " .text-box h3": {
    display: "inline",
    borderBottom: "4px solid #4393E3",
  },
  ".text-box > div p": {
    margin: "4rem 0 7rem",
    color: theme.palette.info.contrastText,
  },
  ".click-area": {
    justifyContent: "end",
    alignItems: "baseline",
    color: theme.palette.primary.main,
    ".icon-box": {
      marginLeft: "1rem",
      width: "44px",
      height: "8px",
    },
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "6rem",
    ".text-box": {
      padding: "4rem 1.2rem",
      "> div p": {
        margin: "2rem 0 4.5rem",
      },
    },
    ".icon-box": {
      marginLeft: "0.4rem",
      width: "2.2rem",
      height: "0.6rem",
    },
  },
}));
