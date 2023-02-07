import TopBanner from "@/component/common/TopBanner";
import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";

export default function index() {
  return (
    <>
      <TopBanner
        title="R&D Capability"
        subTitle1="RFcore provides optimized solutions, enhancing the value of our customers"
        image
      />
      <Global>
        <Container maxWidth="xl">
          <Typography variant="h1">Global Top-Tier Partner, RF core</Typography>
          <Grid container>
            <Grid item xs={12} md={4} className="item">
              <Typography variant="body1" className="title">
                <span>R</span>eliable Service
              </Typography>
              <Typography variant="body2" className="sub-title">
                With active cooperation to provide high-quality solutions
              </Typography>
              <Stack className="img-box">
                <Image
                  src="/company/icon_union_blue.svg"
                  alt="arrow"
                  width={14}
                  height={30}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Global>
    </>
  );
}
const Global = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  ".item": {
    backgroundColor: " #EEF4FA",
    padding: "4rem 2rem",
    ".title": {
      color: "#555",
      fontWeight: 700,
      "& span": {
        fontSize: "4.8rem",
        lineHeight: "7.2rem",
      },
      "& span.active": {},
    },
    ".sub-title": {
      color: theme.palette.secondary.contrastText,
      marginBottom: "8rem",
    },
    ".img-box": {
      justifyContent: "center",
    },
  },
  "item.active": {
    ".title": {
      color: theme.palette.info.main,
    },
    "& span": {
      color: theme.palette.primary.light,
    },
  },
}));
