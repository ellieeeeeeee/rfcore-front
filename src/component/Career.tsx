import { Box, Button, Container, styled, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Career() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <CareerBox>
      <Container maxWidth="xl">
        <Typography variant="h1">Find Your Career</Typography>
        <Text variant="body1">
          <span>
            We’re looking for gritty and innovative minds to help us build a
            better and faster world through RF Technology. Come join our team
            today!
          </span>
        </Text>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>
          ARE YOU READY TO JOIN US?
        </Button>
      </Container>
    </CareerBox>
  );
}
//TODO 텍스트에 linear-gradient
const CareerBox = styled(Box)(({ theme }) => ({
  backgroundImage: ` linear-gradient( 91.81deg,
    rgba(0, 0, 0, 0.0549) 41.12%,
    rgba(0, 0, 0, 0.61) 79.49%),
    url("/main_bg_01.png");`,
  backgroundSize: "cover",
  color: theme.palette.secondary.light,
  "& > div": {
    paddingTop: "10rem",
    paddingBottom: "10rem",
  },
  "& button": {
    maxWidth: "36rem",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.light,
  margin: "20px 0 40px",
  "& span": {},
}));
