import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Slide from "./applications/Slide";

export default function Applications() {
  return (
    <ApplicationsBox>
      <Container maxWidth="xl">
        <Typography variant="h1">Applications</Typography>
        <Typography variant="body1">
          Find out more about RFCore around you
        </Typography>
        <Slide />
        <Box textAlign="center">
          <Typography>COMMUNICATION</Typography>
          <Typography variant="body2">
            Simple explanation on related applications
          </Typography>
        </Box>
      </Container>
    </ApplicationsBox>
  );
}

const ApplicationsBox = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  backgroundColor: "#144096",
  color: theme.palette.secondary.light,
  " & > div > p": {
    color: theme.palette.secondary.light,
    marginBottom: "10rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0 ",
  },
}));
