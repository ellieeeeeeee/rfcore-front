import React from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  title: string;
}

export default function Banner({ title }: Props) {
  return (
    <BannerBox>
      <Container maxWidth="xl" sx={{ py: 12.5 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h2" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid>
            <Image
              src="/icon_union_white.svg"
              alt="arrow"
              width={48}
              height={13}
            />
          </Grid>
        </Grid>
      </Container>
    </BannerBox>
  );
}
const BannerBox = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(114.31deg, rgba(252, 252, 252, 0.1716) 23.91%, rgba(29, 117, 205, 0) 58.36%), #4393E3;",
  "& h2": {
    color: theme.palette.secondary.light,
  },
  "& img": {
    marginLeft: "40px",
  },
}));
