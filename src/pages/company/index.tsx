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
        image
      />

      <Technology>
        <Container maxWidth="xl">
          <Typography variant="h1" className="border-style">
            Excellence In
          </Typography>
          <Typography variant="h1">RF Technology</Typography>

          <Box className="image-box">
            {/* <Image
              layout="fill"
              src="/company/technology_image.png"
              alt="img"
              objectFit="cover"
            /> */}
          </Box>
          <Box className="title-box">
            <Typography variant="body1">
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
          <Typography variant="body2">
            RFcore, with a team of the greatest talents in RF technology, is a
            technology oriented company
            <br className="inPc" /> born to deliver various cutting edge RF
            solutions to customers, ranging from High Power Amplifier to MMIC,
            to Active
            <br className="inPc" /> Phased Array TRM’s, and to AESA Antenna
            Solutions. We envision a workplace where extraordinary employees are
            <br className="inPc" />
            inspired to drive innovations to customers’ satisfaction.
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">Customer First</Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">
                  Ethical & Fair Business Practices
                </Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">
                  Scientific Innovations
                </Typography>
                <Typography>text</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <Box className="border-box">
                <Typography variant="subtitle1">
                  Consistency and sustainability
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
          <Grid container className="content" spacing={12.5}>
            <Grid item xs={12} md={6} className="img-box">
              <Box>
                {/* <Image
                src="/logo_color.png"
                alt="logo"
                width={720}
                height={300}
              /> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className="download-box">
              <Box>
                <a download>
                  <Typography variant="body1">PNG Download</Typography>
                  <Image
                    src="/company/icon_download.svg"
                    alt="download"
                    width={18}
                    height={25}
                  />
                </a>
                <a download>
                  <Typography variant="body1">AI Download</Typography>
                  <Image
                    src="/company/icon_download.svg"
                    alt="download"
                    width={18}
                    height={25}
                  />
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
const Technology = styled(Box)`
  padding: 160px 0;
  background: url("/main_bg_02.png") #f4f4f4 no-repeat;
  background-position: right;
  & .border-style {
    position: relative;
    display: inline-block;
    max-height: 9rem;
    z-index: 5;
    ::after {
      display: block;
      position: relative;
      content: "";
      width: 100%;
      height: 25px;
      background-color: #4393e3;
      bottom: 3rem;
      z-index: -1;
    }
  }
  & .image-box {
    max-width: 1680px;
  }
  & .title-box {
    max-width: 720px;
    & p {
      color: #555;
    }
  }
`;
const Core = styled(Box)(({ theme }) => ({
  padding: "16rem 0 18rem",
}));
const Promise = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.light,
  background: `url("/company/promise_image.png")`,
  padding: "16rem 0",
  " > div >p": {
    color: theme.palette.info.dark,
    margin: "2rem 0 10rem",
  },
  "& .border-box": {
    padding: "4rem",
    border: "1px solid #fff",
    textAlign: "left",
    h6: {
      minHeight: "8rem",
      marginBottom: "2rem",
    },
  },
}));
const Ci = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  ".content": {
    marginTop: "10rem",
  },
  ".img-box": {
    " > div": { border: "1px solid #ddd" },
  },
  ".download-box": {
    " > div": { borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" },

    a: {
      display: "flex",
      padding: "5.7rem 4.2rem 5.7rem 0",
      justifyContent: "space-between",

      ":first-child": {
        borderBottom: "1px solid #ddd",
      },
    },
  },
}));
