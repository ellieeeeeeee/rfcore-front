import React from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/legacy/image";

interface Props {
  title: string;
}

export default function Banner({ title }: Props) {
  return (
    <BannerBox>
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h2" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid className="icon-box">
            <Image src="/icon_union_white.svg" alt="arrow" layout="fill" />
          </Grid>
        </Grid>
      </Container>
    </BannerBox>
  );
}
const BannerBox = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  background:
    "linear-gradient(114.31deg, rgba(252, 252, 252, 0.1716) 23.91%, rgba(29, 117, 205, 0) 58.36%), #4393E3;",
  h2: {
    color: theme.palette.secondary.light,
    fontWeight: 700,
  },
  "& .icon-box": {
    marginLeft: "4rem",
    width: "5rem",
    height: "1.3rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    h2: {
      fontSize: "2.4rem",
      lineHeight: "3.6rem",
    },
    "& .icon-box": {
      marginLeft: "2rem",
      width: "3.4rem",
      height: "1rem",
    },
  },
}));
