import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import MainSlide from "./MainSlide";

export default function ProductSection() {
  return (
    <ProductBox>
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h1">What we do</Typography>
          <Typography variant="body1">
            We provide high-quality RF Solutions
          </Typography>
          <MainSlide />
        </Box>
      </Container>
    </ProductBox>
  );
}
const ProductBox = styled(Box)`
  padding: 160px 0;
  background: url("/main_bg_02.png") #f4f4f4 no-repeat;
  background-position: right;
  @media (max-width: 992px) {
    padding: 80px 0;
  }
`;
