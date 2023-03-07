import TopBanner from "@/component/common/TopBanner";
import {
  Box,
  Grid,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
//swiper css
import "swiper/css";
import "swiper/css/navigation";

import Banner from "@/component/common/Banner";
import CompanyBox from "@/component/company/CompanyBox";

export default function Capability() {
  const globalContent = [
    {
      id: 1,
      title: "eliable Service",
      pointTitle: "R",
      description: " With active cooperation to provide high-quality solutions",
    },
    {
      id: 2,
      title: "orefront Technology",
      pointTitle: "F",
      description:
        " Continuous innovation with the best and first technology in the RF field",
    },
    {
      id: 3,
      title: "tech Application",
      pointTitle: "Core",
      description:
        "Various application from single products to whole systems covering defense and civilian",
    },
  ];
  const [isHovering, setIsHovering] = useState(false);
  const handleHoverEvent = (id: number) => {
    const hoverItem = globalContent.filter((item) => item.id === id);
    setIsHovering(true);
  };
  SwiperCore.use([Navigation]);
  return (
    <>
      <TopBanner
        title="R&D Capability"
        subTitle1="RFcore provides optimized solutions, enhancing the value of our customers"
        image
      />
      <Realization>
        <Container maxWidth="xl">
          <Typography variant="h1">
            World&apos;s First Multi-Channel Realization with CMOS
          </Typography>
          <Grid
            container
            columnSpacing={{ xs: 0, lg: 5 }}
            rowSpacing={{ xs: 5, lg: 0 }}
          >
            <Grid item xs={12} lg={7}>
              <Table>
                <colgroup>
                  <col width="20%"></col>
                  <col width="32%"></col>
                  <col width=""></col>
                </colgroup>
                <TableHead>
                  <TableCell component="th"></TableCell>
                  <TableCell component="th" className="default">
                    Conventional
                    <br /> 4ch X-Band TRM
                  </TableCell>
                  <TableCell component="th" className="active">
                    New Tile type
                    <br /> 4ch X-Band TRM
                  </TableCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th">Size(mm)</TableCell>
                    <TableCell component="td" className="default">
                      150X78
                    </TableCell>
                    <TableCell component="td" className="active">
                      40X40
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">
                      Number
                      <br /> of chips
                    </TableCell>
                    <TableCell component="td" className="default">
                      64 chips and 1380 bonding wires (Many GaAs MMICs &
                      Assembly)
                    </TableCell>
                    <TableCell component="td" className="active">
                      5 chips
                      <br />
                      <span>
                        (One 4ch CMOS
                        <br /> core chip + Four GanN BDAs)
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box className="image-box">
                <Image
                  layout="fill"
                  src="/company/realization_image.png"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Realization>
      <Global>
        <Container maxWidth="xl">
          <Typography variant="h1">Global Top-Tier Partner, RF core</Typography>
          <Grid container columnSpacing={2.5}>
            {globalContent.map((item) => (
              <Item
                item
                xs={12}
                lg={4}
                onMouse={isHovering}
                // onMouseOver={() => handleHoverEvent(item.id)}
                // onMouseLeave={() => setIsHovering(false)}
                key={item.id}
              >
                <Box className="item">
                  <Typography variant="body1" className="title">
                    <span>{item.pointTitle}</span>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="sub-title">
                    {item.description}
                  </Typography>
                  <Box className="image-box">
                    <Box className="icon-box"></Box>
                  </Box>
                </Box>
              </Item>
            ))}
          </Grid>
        </Container>
      </Global>
      <Technology>
        <Container maxWidth="xl">
          <Typography variant="h1">No.1 RF Technology</Typography>
          <Grid container>
            <Grid item xs={6} md={3}>
              <Box>
                <Typography variant="subtitle1">
                  <span>~40</span>
                  GHz
                </Typography>
                <Typography variant="body1">CMOS, GaN, GaAs, MMIC</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box>
                <Typography variant="subtitle1">
                  <span>60 </span>
                  %+
                </Typography>
                <Typography variant="body1">R&D Personnel ratio</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box>
                <Typography variant="subtitle1">
                  <span>+10,000 </span>
                  EA/YEAR
                </Typography>
                <Typography variant="body1">
                  Stable production capacity for rapid response to multiple
                  varieties
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box>
                <Typography variant="subtitle1">
                  <span>20 </span>+
                </Typography>
                <Typography variant="body1">Customized Solutions</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Technology>
      <Certificates>
        <Container maxWidth="xl">
          <Typography variant="h1">Global Certificates </Typography>
          <StyledSwiper
            slidesPerView={4}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 40,
              },
            }}
          >
            <StyledSwiperSlide>
              <Box className="image-box">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/company/certificates_image_01.png"
                  alt="capability"
                />
              </Box>
              <Typography variant="subtitle1">ISO 9001</Typography>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Box className="image-box">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/company/certificates_image_01.png"
                  alt="capability"
                />
              </Box>
              <Typography variant="subtitle1">ISO 14001</Typography>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Box className="image-box">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/company/certificates_image_02.png"
                  alt="capability"
                />{" "}
              </Box>
              <Typography variant="subtitle1">AS 9100</Typography>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Box className="image-box">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/company/certificates_image_03.png"
                  alt="capability"
                />
              </Box>
              <Typography variant="subtitle1">KS Q 9100</Typography>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <Box className="image-box">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/company/certificates_image_02.png"
                  alt="capability"
                />
              </Box>
              <Typography variant="subtitle1">AS 9100</Typography>
            </StyledSwiperSlide>
          </StyledSwiper>
        </Container>
      </Certificates>
      <Partners>
        <Container maxWidth="xl">
          <Typography variant="h1">Global Partners</Typography>
          <Box className="map-area">
            <PointerBox className="pointer pointer_01">
              <CompanyBox title="United Kingdom" subTitle="RF Channel" />
            </PointerBox>
            <PointerBox className="pointer pointer_02">
              <Box className="pointer " />
              <CompanyBox title="Spain" subTitle="Milexia" />
            </PointerBox>
            <PointerBox className="pointer pointer_03">
              <Box className="pointer " />
              <CompanyBox title="France" subTitle="FH Microwave" />
            </PointerBox>
            <PointerBox className="pointer pointer_04">
              <Box className="pointer " />
              <CompanyBox title="Rumania" subTitle="Tejas Development SRL" />
            </PointerBox>
            {/* <PointerBox className="pointer pointer_05">
              <Box className="pointer " />
              <CompanyBox title="Turkey" subTitle="AKZ" />
            </PointerBox> */}
            <PointerBox className="pointer pointer_06">
              <Box className="pointer " />
              <CompanyBox
                title="Israel"
                subTitle="Mifne Focus Management Solutions Ltd."
              />
            </PointerBox>
            <PointerBox className="pointer pointer_07">
              <Box className="pointer " />
              <CompanyBox title="India" subTitle="APC Technologies" />
            </PointerBox>
            <PointerBox className="pointer pointer_08">
              <Box className="pointer " />
              <CompanyBox title="Russia" subTitle="Prochip" />
            </PointerBox>
          </Box>
        </Container>
      </Partners>
      <Banner title="History of Excellence !" />
    </>
  );
}
interface hoverStyleProps {
  onMouse: boolean;
}
const Global = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  ".MuiGrid-container": {
    marginTop: "10rem",
  },

  "item.active": {
    ".title": {
      color: theme.palette.info.main,
    },
    "& span": {
      color: theme.palette.primary.light,
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    ".MuiGrid-container": {
      marginTop: "6rem",
    },
  },
}));
const Item = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "onMouse",
})<hoverStyleProps>(({ onMouse, theme }) => ({
  ".item": {
    backgroundColor: " #EEF4FA",
    padding: "4rem 2rem 0",
    ".title": {
      fontWeight: 500,
      color: theme.palette.info.contrastText,
      "& span": {
        fontSize: "4.8rem",
        lineHeight: "7.2rem",
        fontWeight: 700,
      },
    },
    ".sub-title": {
      color: theme.palette.info.contrastText,
      marginBottom: "8rem",
      minHeight: "7.2rem",
    },
    ".image-box": {
      transition: "all 0.3s",
      padding: "6.2rem 0 4.2rem",
      margin: "0 -2rem",
      background: "none",
    },
    ".icon-box": {
      width: "1.5rem",
      height: "4.2rem",
      backgroundPosition: "center",
      margin: "0 auto",
      background: `url("/company/icon_union_blue.svg") no-repeat`,
    },
  },
  ":nth-of-type(1):hover, :nth-of-type(2):hover": {
    p: {
      color: theme.palette.info.main,
      span: {
        color: theme.palette.primary.main,
      },
    },
    ".image-box": {
      background: `url("/company/partner_image.png") no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ".icon-box": {
      background: `url("/company/icon_union_white.svg") no-repeat`,
    },
  },
  ":nth-of-type(3):hover": {
    p: {
      color: theme.palette.info.main,
      span: {
        color: "#FEBC08 !important",
      },
    },
    ".image-box": {
      background: `url("/company/partner_image.png") no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    ".icon-box": {
      background: `url("/company/icon_union_white.svg") no-repeat`,
    },
  },
  [theme.breakpoints.down("lg")]: {
    ":not(:last-child)": { marginBottom: "4rem" },
    ".item": {
      ".title": {
        color: theme.palette.info.main,
        "& span": {
          fontSize: "2.6rem",
          minHeight: "auto",
          color: theme.palette.primary.light,
        },
      },
      ".sub-title": {
        minHeight: "auto",
        marginBottom: "3.2rem",
      },
      ".image-box": {
        background: `url("/company/partner_image.png") no-repeat`,
        backgroundSize: "cover",
      },
      ".icon-box": {
        display: "none",
      },
    },
    ":nth-of-type(3)": {
      ".title span": {
        color: "#FEBC08",
      },
    },
  },
}));

const Technology = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  background: `url("/company/technology_image_02.png") no-repeat`,
  backgroundSize: "cover",
  h1: {
    marginBottom: "10rem",
    color: theme.palette.secondary.light,
  },
  ".MuiGrid-container": {
    justifyContent: "space-between",
  },
  ".MuiGrid-item": {
    textAlign: "center",
    maxWidth: "fit-content",
    h6: {
      maxWidth: "37.2rem",
      color: theme.palette.info.dark,
      span: {
        fontSize: "4.8rem",
        lineHeight: "7.2rem",
        fontWeight: 600,
        marginRight: "1rem",
        color: theme.palette.secondary.light,
      },
    },
    p: {
      minHeight: "5.6rem",
      color: theme.palette.info.dark,
    },
  },
  [theme.breakpoints.down("lg")]: {
    ".MuiGrid-item": {
      maxWidth: "50%",
      flexBasis: "50%",
      marginBottom: "2rem",
      textAlign: "center",
      h6: {
        maxWidth: "none",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    background: `url("/company/technology_image_m.png") no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    h1: {
      marginBottom: "6rem",
    },
    ".MuiGrid-item": {
      h6: {
        minHeight: "6.8rem",
        marginBottom: "1rem",
        span: {
          fontSize: "3.2rem",
          lineHeight: "4.8rem",
        },
      },
      p: {
        fontSize: "1.2rem",
        lineHeight: "1.8rem",
        minHeight: "auto",
      },
    },
  },
}));
const Certificates = styled(Box)(({ theme }) => ({
  padding: "16rem 0 8rem",
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    " > div": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    h1: {
      paddingLeft: "2.4rem",
      paddingRight: "2.4rem",
    },
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  marginTop: "10rem",
  paddingBottom: "15.6rem !important",
  ".swiper-button-prev,  .swiper-button-next ": {
    width: "5rem",
    height: "5rem",
    border: "1px solid #555",
    top: "auto",
    bottom: 0,
  },
  ".swiper-button-prev": {
    left: "46.6%",
  },
  ".swiper-button-next ": {
    left: "50%",
  },
  ".swiper-button-disabled": {
    border: `1px solid ${theme.palette.info.light}`,
  },
  ".swiper-button-prev::after,   .swiper-button-next::after": {
    content: `""`,
    width: "1rem",
    height: "2rem",
  },
  ".swiper-button-prev::after": {
    background: `url("/icon_prev_gray.svg") center no-repeat`,
    backgroundSize: "1rem 2rem",
  },
  ".swiper-button-next::after": {
    background: `url("/icon_next_gray.svg") center no-repeat`,
    backgroundSize: "1rem 2rem",
  },
  [theme.breakpoints.down("md")]: {
    margin: "6rem -2.4rem 0",
    paddingBottom: "0 !important",
    ".swiper-button-prev,   .swiper-button-next": {
      display: "none",
    },
  },
}));
const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  ".image-box": {
    height: "46.4rem",
    img: {
      objectFit: "contain",
    },
  },
  h6: {
    textAlign: "center",
    marginTop: "4rem",
    fontWeight: 500,
    color: theme.palette.info.contrastText,
  },
  [theme.breakpoints.down("md")]: {
    h6: {
      marginTop: "2rem",
      fontSize: "1.4rem",
    },
  },
}));
const Realization = styled(Box)(({ theme }) => ({
  background: "#F4F4F4;",
  padding: "16rem 0",
  ".MuiGrid-container ": {
    alignItems: "center",
  },
  table: {
    "th, td": {
      fontSize: "2.4rem",
      lineHeight: "4rem",
    },
    "tbody th": {
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: theme.palette.info.contrastText,
      borderRight: `1px solid ${theme.palette.info.dark}`,
    },
    ".default": {
      color: "#9f9f9f",
      fontWeight: 400,
    },
    ".active": {
      color: theme.palette.primary.light,
      fontWeight: 700,
      span: {
        fontWeight: 400,
      },
    },
  },
  ".image-box": {
    height: "50rem",
    img: {
      objectFit: "contain",
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    table: {
      marginTop: "6rem",
      "th, td": {
        fontSize: "1.2rem",
        lineHeight: "2.2rem",
      },
      "tbody th": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
    ".image-box": {
      height: "25rem",
    },
  },
}));
const Partners = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  backgroundColor: "#f4f4f4",
  h1: {
    marginBottom: "10rem",
  },
  ".map-area": {
    position: "relative",
    background: `url("/company/map_image.png") bottom no-repeat`,
    // paddingTop: "58%",
    height: "83.6rem",
    backgroundSize: "contain",
  },
  ".pointer": {
    position: "absolute",
    content: `""`,
    background: `url("/company/map_pointer.png") no-repeat`,
    width: "1.6rem",
    height: "1.6rem",
    ":hover > div": {
      background: theme.palette.primary.main,
      "::after": {
        background: theme.palette.primary.main,
      },
    },
    " > div": {
      position: "relative",
      width: "fit-content",
      left: "50%",
      transform: "translateX(-50%)",
      "::after": {
        position: "absolute",
        content: `""`,
        width: "0.1rem",
        background: "#7c7c7c",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
  },
  ".pointer_01": {
    left: "22.7rem",
    bottom: "32.3rem",
    " >div:not(.pointer)": {
      top: "-20rem",
      "::after": {
        height: "13rem",
      },
    },
  },
  ".pointer_02": {
    left: "64.4rem",
    bottom: "47rem",
    " >div:not(.pointer)": {
      bottom: "-7rem",
      "::after": {
        height: "9rem",
        top: "-7.5rem",
      },
    },
  },
  ".pointer_03": {
    left: "66.2rem",
    bottom: "49.3rem",
    " >div:not(.pointer)": {
      top: "-15rem",
      "::after": {
        height: "100%",
        bottom: "-4.2rem",
      },
    },
  },
  ".pointer_04": {
    left: "77.6rem",
    bottom: "49.3rem",
    " >div:not(.pointer)": {
      bottom: "-24rem",
      "::after": {
        height: "25rem",
        bottom: "9rem",
      },
    },
  },
  ".pointer_05": {
    left: "81rem",
    bottom: "47rem",
  },
  ".pointer_06": {
    left: "82.4rem",
    bottom: "44rem",
    " >div:not(.pointer)": {
      top: "-40rem",
      maxWidth: "30.6rem",
      h6: {
        width: "30rem",
        lineHeight: "3rem",
      },
      "::after": {
        height: "25.2rem",
        bottom: "-25.2rem",
      },
    },
  },
  ".pointer_07": {
    left: "101rem",
    bottom: "36.9rem",
    " >div:not(.pointer)": {
      top: "-27rem",
      "::after": {
        height: "16.3rem",
        bottom: "-16.3rem",
      },
    },
  },
  ".pointer_08": {
    left: "106rem",
    bottom: "47.2rem",
    " >div:not(.pointer)": {
      top: "12rem",
      "::after": {
        height: "12.8rem",
        bottom: "9rem",
      },
    },
  },
  [theme.breakpoints.down("xl")]: {
    padding: "8rem 0",
    h1: {
      marginBottom: "6rem",
    },
    ".pointer > div": {
      display: "none",
    },
    ".map-area": {
      background: `url("/company/map_image_m.png") no-repeat center`,
      backgroundSize: "contain",
      height: "auto",
      paddingTop: "43%",
    },
    ".pointer": {
      display: "none",
    },
  },
}));
const PointerBox = styled(Box)(({ theme }) => ({
  width: "fit-content",
  position: "absolute",
}));
