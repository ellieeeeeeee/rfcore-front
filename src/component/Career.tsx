import { Box, Button, Container, styled, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Career() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <CareerBox>
      <Container maxWidth="xl" sx={{ py: 12.5 }}>
        <Typography variant="h1">Find Your Career</Typography>
        <Text variant="body1">
          We’re looking for gritty and innovative minds to help us build a
          better and faster world through RF Technology. Come join our team
          today!
        </Text>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>
          ARE YOU READY TO JOIN US?
        </Button>
      </Container>
    </CareerBox>
  );
}
const CareerBox = styled(Box)`
  background: linear-gradient(
      91.81deg,
      rgba(0, 0, 0, 0.0549) 41.12%,
      rgba(0, 0, 0, 0.61) 79.49%
    ),
    url("/main_bg_01.png");
  background-size: cover;
  color: #fff;
  & button {
    max-width: 360px;
  }
`;
const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.dark,
  margin: "20px 0 40px",
}));
