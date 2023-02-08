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
            <Grid item xs={6} className="img-box">
              <Image layout="fill" alt="img" src="/sample_02.png" />
            </Grid>
            <Grid item xs={6} className="text-box">
              <Box>
                <Typography variant="h3">Amplifiers</Typography>
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
            <Grid item xs={6} className="img-box">
              <Image layout="fill" alt="img" src="/sample_02.png" />
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
            <Grid item xs={6} className="img-box">
              <Image layout="fill" alt="img" src="/sample_02.png" />
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
            <Grid item xs={6} className="img-box">
              <Image layout="fill" alt="img" src="/sample_02.png" />
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
}));

const ContentSlide = styled(SwiperSlide)(({ theme }) => ({
  ".img-box": {
    position: "relative",
    width: "100%",
    minHeight: "60rem",
  },
  ".text-box": {
    padding: "8rem 10rem",
    backgroundColor: theme.palette.secondary.light,
  },
  " .text-box h3": {
    display: "inline",
    borderBottom: "4px solid #4393E3",
  },
  ".text-box > div p": {
    margin: "4rem 0 7rem",
    color: theme.palette.secondary.contrastText,
  },
  ".click-area": {
    justifyContent: "end",
    color: theme.palette.primary.main,
  },
}));

const ThumbnailSwiper = styled(Swiper)(({ theme }) => ({
  margin: "10rem 0 4rem",
  "& .swiper-slide-active p": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));
const ThumbnailSlide = styled(SwiperSlide)`
  position: relative;
  max-width: fit-content;
  padding: 0 3.6rem;
  :first-child {
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
