import TopBanner from "@/component/common/TopBanner";
import Slide from "@/component/propduct/Slide";
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
      />
      <Container maxWidth="xl">
        <Grid container spacing={5} py={20}>
          <Grid item md={12} lg={6}>
            <Slide src={imgList}></Slide>
            <TextBox>
              <Typography mb={2.5}>AMPLIFIERs</Typography>
              <Typography variant="body2">
                Available in operating frequencies from HF to Ku-band and with
                standard output powers ranging from 2 to 1000 watts.
              </Typography>
            </TextBox>
          </Grid>
          <Grid item md={12} lg={6}>
            <Slide src={imgList}></Slide>
            <TextBox>
              <Typography mb={2.5}>MMICs</Typography>
              <Typography variant="body2">
                RFcore has been innovating MMIC solutions for phased array
                system pursuing more ease of use, higher performance, higher
                level of integration as well as lower cost.
              </Typography>
            </TextBox>
          </Grid>
          <Grid item md={12} lg={6}>
            <Slide src={imgList}></Slide>
            <TextBox>
              <Typography mb={2.5}>Sub-systems</Typography>
              <Typography variant="body2">
                RFcore also have RF switch modules, RF Passive, Comb generator
                and RF Matrix related with MMICs and Amplifiers.
              </Typography>
            </TextBox>
          </Grid>
          <Grid item md={12} lg={6}>
            <Slide src={imgList}></Slide>
            <TextBox>
              <Typography mb={2.5}>Customized Solution</Typography>
              <Typography variant="body2">
                RFcore also provides quick and reliable customized digital mixed
                hardware solutions.
              </Typography>
            </TextBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
const TextBox = styled(Box)`
  margin-top: 40px;
`;
