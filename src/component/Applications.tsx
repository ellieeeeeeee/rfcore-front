import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Slide from "./applications/Slide";

export default function Applications() {
  return (
    <ApplicationsBox py={20}>
      <Container maxWidth="xl">
        <Typography variant="h1">Applications</Typography>
        <Typography variant="body1">
          Find out more about RFCore around you
        </Typography>
        <Slide />
        <Box mt={5} textAlign="center">
          <Typography mb={2.5}>COMMUNICATION</Typography>
          <Typography variant="body2">
            Simple explanation on related applications
          </Typography>
        </Box>
      </Container>
    </ApplicationsBox>
  );
}

const ApplicationsBox = styled(Box)`
  background: #144096;
  color: #fff;
  & > div > p {
    color: #ccc;
    margin-bottom: 10rem;
  }
`;
