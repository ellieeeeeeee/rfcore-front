import Banner from "@/component/common/Banner";
import TopBanner from "@/component/common/TopBanner";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Image from "next/legacy/image";
import Circle from "@/component/company/Circle";

export default function index() {
  return (
    <>
      <TopBanner
        title="About RFcore"
        subTitle1="Founded in 2000, RFcore Co. Ltd is a global leader in design, develop and manufacture the power amplifier solution for defense, commercial and industrial market application."
        image={true}
      />

      <Technology>
        <Container maxWidth="xl">
          <Box className="title-box">
            <Typography variant="h1" className="border-style">
              Excellence In
            </Typography>
            <Typography variant="h1">RF Technology</Typography>
          </Box>
          <Box className="image-box">
            {/* TODO: next/image로 변경 후 사이즈 조절 */}
            <img src="/company/technology_image.png" alt="technology" />
          </Box>

          <Box className="text-box">
            <Typography variant="subtitle1">
              Our mission is clear and simple. We constantly innovate ourselves
              with advanced RF technologies. And we offer better solutions to
              our clients.
            </Typography>
          </Box>
        </Container>
      </Technology>
      <Core>
        <Container maxWidth="xl">
          <Typography variant="h1">Core Competitiveness</Typography>
          <Stack direction="row">
            <Circle />
          </Stack>
        </Container>
      </Core>
      <Promise>
        <Container maxWidth="xl">
          <Typography variant="h1">The Value We Promise</Typography>
          <Typography variant="subtitle1">
            RFcore, with a team of the greatest talents in RF technology, is a
            technology oriented company born to deliver various cutting edge RF
            solutions to customers, ranging from High Power Amplifier to MMIC,
            to Active Phased Array TRM’s, and to AESA Antenna Solutions. We
            envision a workplace where extraordinary employees are inspired to
            drive innovations to customers’ satisfaction.
          </Typography>
          <Grid container spacing={{ xs: 2.5, xl: 5 }}>
            <Grid item sm={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">Customer First</Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">
                  Ethical & Fair
                  <br /> Business Practices
                </Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">
                  Scientific
                  <br /> Innovations
                </Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">
                  Consistency
                  <br /> and sustainability
                </Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Promise>
      <Ci>
        <Container maxWidth="xl">
          <Typography variant="h1">CI Download</Typography>
          <Grid
            container
            className="content"
            columnSpacing={{ xs: 2.5, md: 12.5 }}
          >
            <Grid item xs={12} md={6}>
              <Stack>
                <Box className="image-box">
                  <Image src="/logo_color.png" alt="logo" layout="fill" />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} className="download-box">
              <Box>
                <a download>
                  <Typography variant="body1">PNG Download</Typography>
                  <Box className="icon-box">
                    <Image
                      src="/company/icon_download.svg"
                      alt="download"
                      layout="fill"
                    />
                  </Box>
                </a>
                <a download>
                  <Typography variant="body1">AI Download</Typography>
                  <Box className="icon-box">
                    <Image
                      src="/company/icon_download.svg"
                      alt="download"
                      layout="fill"
                    />
                  </Box>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Ci>
      <Banner title="R&D Capability" />
    </>
  );
}

const Technology = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: "16rem 0",
  background: `url("/main_bg_02.png") #f4f4f4 no-repeat`,
  backgroundPosition: "right",
  ".title-box": {
    position: "absolute",
    margin: "-14.5rem 0  0 2.6rem",
    zIndex: 1,
  },
  " .border-style": {
    position: "relative",
    display: "inline-block",
    maxHeight: "9rem",
    "::after": {
      display: "block",
      position: "relative",
      content: `""`,
      width: "100%",
      height: "2.5rem",
      backgroundColor: theme.palette.primary.light,
      bottom: "3rem",
      zIndex: -1,
    },
  },
  ".image-box": {
    position: "relative",
    width: "100%",
    minWidth: "167.1rem",
    height: "auto",
    marginTop: "12rem",
    img: {
      height: "100%",
    },
  },
  ".text-box": {
    maxWidth: "72rem",
    marginTop: "4rem",
    color: theme.palette.info.contrastText,
  },

  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    backgroundPosition: "bottom",
    backgroundSize: "contain",
    ".title-box": {
      margin: "-6.3rem  0 0",
    },
    " .border-style": {
      maxHeight: "4rem",
      "::after": {
        height: "1.2rem",
        bottom: "1.6rem",
      },
    },
    ".image-box": {
      marginTop: "4.8rem",
    },
    ".text-box": {
      fontSize: "1.4rem",
      lineHeight: "2.6rem",
      marginTop: "2rem",
    },
  },
}));

const Core = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  h1: {
    marginBottom: "10rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    h1: {
      marginBottom: "6rem",
    },
  },
}));

const Promise = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  color: theme.palette.secondary.light,
  background: `url("/company/promise_image.png") no-repeat`,
  backgroundSize: "cover",
  " > div > h6": {
    color: theme.palette.info.light,
    margin: "2rem 0 10rem",
  },
  "& .border-box": {
    padding: "4rem",
    border: "1px solid #fff",
    textAlign: "left",
    h6: {
      minHeight: "8rem",
      marginBottom: "2rem",
      fontWeight: 500,
    },
    p: {
      color: theme.palette.info.light,
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    " > div > h6": {
      margin: "1rem 0 6rem",
    },
    "& .border-box": {
      textAlign: "center",
      h6: {
        minHeight: "3.6rem",
        marginBottom: "1rem",
        fontSize: "1.2rem",
        lineHeight: "1.8rem",
      },
      p: {
        fontSize: "1.2rem",
        lineHeight: "1.4rem",
      },
    },
  },
}));

const Ci = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  ".content": {
    marginTop: "10rem",
  },
  ".MuiGrid-item:first-of-type": {
    "> div": {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      border: `1px solid ${theme.palette.info.dark}`,
    },
    ".image-box": {
      height: "12.1rem",
      width: "48rem",
      img: {
        objectFit: "contain",
      },
    },
  },
  ".download-box": {
    " > div": { borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" },
    a: {
      display: "flex",
      padding: "5.7rem 4.2rem 5.7rem 0",
      justifyContent: "space-between",
      alignItems: "center",
      ":first-of-type": {
        borderBottom: "1px solid #ddd",
      },
      p: {
        fontWeight: 500,
      },
    },
    ".icon-box": {
      width: "1.8rem",
      height: "2.6rem",
    },
  },
  //   [theme.breakpoints.down("lg")]: {
  //     ".MuiGrid-item:first-of-type> div": {
  //       ".image-box": {
  //         height: "8rem",
  //         width: "36rem",
  //       },
  //     },
  //   },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    ".content": {
      marginTop: "6rem",
    },
    ".MuiGrid-item:first-of-type> div": {
      padding: "12rem 4rem",
      ".image-box": {
        height: "6rem",
        width: "24rem",
      },
    },
    ".download-box": {
      marginTop: "4rem",
      a: {
        padding: "2rem",
      },
      ".icon-box": {
        width: "1.3rem",
        height: "1.8rem",
      },
    },
  },
}));
