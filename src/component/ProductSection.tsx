import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";

export default function ProductSection() {
  return (
    <ProductBox>
      <Container maxWidth="xl">
        <Box py={20}>
          <Typography variant="h1">What we do</Typography>
          <Typography variant="body1">
            We provide high-quality RF Solutions
          </Typography>
        </Box>
      </Container>
    </ProductBox>
  );
}
const ProductBox = styled(Box)`
  background: url("/main_bg_02.png") #f4f4f4 no-repeat;
  background-position: right;
`;
