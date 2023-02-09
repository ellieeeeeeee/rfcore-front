import TopBanner from "@/component/common/TopBanner";
import Slide from "@/component/product/Slide";
import { Box, Grid, Typography, styled } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const imgList = ["/logo_black.png", "/logo_color.png"];
export default function Product() {
  return (
    <Box>
      <TopBanner
        title="Product"
        subTitle1="Sub text Sub text Sub text Sub text Sub text Sub text Sub text Sub text Sub text Sub text"
        image={false}
      />
      <ProductBox>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item md={12} lg={6}>
              <Slide src={imgList}></Slide>
              <TextBox>
                <Typography>AMPLIFIERs</Typography>
                <Typography variant="body1">
                  Available in operating frequencies from HF to Ku-band and with
                  standard output powers ranging from 2 to 1000 watts.
                </Typography>
              </TextBox>
            </Grid>
            <Grid item md={12} lg={6}>
              <Slide src={imgList}></Slide>
              <TextBox>
                <Typography>MMICs</Typography>
                <Typography variant="body1">
                  RFcore has been innovating MMIC solutions for phased array
                  system pursuing more ease of use, higher performance, higher
                  level of integration as well as lower cost.
                </Typography>
              </TextBox>
            </Grid>
            <Grid item md={12} lg={6}>
              <Slide src={imgList}></Slide>
              <TextBox>
                <Typography>Sub-systems</Typography>
                <Typography variant="body1">
                  RFcore also have RF switch modules, RF Passive, Comb generator
                  and RF Matrix related with MMICs and Amplifiers.
                </Typography>
              </TextBox>
            </Grid>
            <Grid item md={12} lg={6}>
              <Slide src={imgList}></Slide>
              <TextBox>
                <Typography>Customized Solution</Typography>
                <Typography variant="body2">
                  RFcore also provides quick and reliable customized digital
                  mixed hardware solutions.
                </Typography>
              </TextBox>
            </Grid>
          </Grid>
        </Container>
      </ProductBox>
    </Box>
  );
}
const ProductBox = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
  },
}));
const TextBox = styled(Box)(({ theme }) => ({
  marginTop: "4rem",
  " p:first-of-type ": {
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    fontWeight: 500,
    color: theme.palette.info.main,
  },
  " p:last-child ": {
    marginTop: "1rem",
    color: theme.palette.secondary.contrastText,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
}));
