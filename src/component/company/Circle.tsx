import { Box, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";

export default function Circle() {
  const circleContent = [
    {
      title: "FAST and RELIABLE",
      subTitle: "Fast delivery of RF Solutions with utmost Reliability",
    },
    {
      title: "COMMUNICATIONS",
      subTitle:
        "Transparency and Fluency in Business / Technological Communications ",
    },
    {
      title: "VERTICAL ALIGNMENT",
      subTitle: "Vertical alignment of core RF technologies for AESA",
    },
  ];
  return (
    <GridContainer container columnSpacing={7.5}>
      {circleContent.map((item) => (
        <Grid item xs={12} md={4} key={item.title}>
          <Box className="outline">
            <Box className="inner">
              <Box className="text-box">
                <Typography className="title">{item.title}</Typography>
                <Typography variant="subtitle2">{item.subTitle}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </GridContainer>
  );
}
const GridContainer = styled(Grid)(({ theme }) => ({
  ".MuiGrid-item": {
    position: "relative",
    ":not(:last-child)::after": {
      position: "absolute",
      content: `""`,
      display: "block",
      width: "6rem",
      height: "0.1rem",
      backgroundColor: theme.palette.info.dark,
      right: "-6rem",
      top: "50%",
    },
  },
  ".outline ": {
    position: "relative",
    padding: "2.4rem",
    borderRadius: "50%",
    backgroundColor: "rgba(67, 147, 227, 0.24)",
    ".inner": {
      position: "relative",
      borderRadius: "50%",
      textAlign: "center",
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.light,
      "::after": {
        content: `""`,
        display: "block",
        paddingBottom: "100%",
      },
    },
    ".text-box": {
      position: "absolute",
      width: "100%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0 4rem",
      ".title": {
        fontSize: "2.8rem",
        lineHeight: "2.4rem",
        fontWeight: 600,
        wordBreak: "break-all",
      },
      h6: {
        lineHeight: "3rem",
        fontWeight: 400,
        marginTop: "2rem",
      },
    },
  },
  //원 비율땜에 텍스트가 커보여서 일단 lg로
  [theme.breakpoints.down("lg")]: {
    ".outline ": {
      ".text-box": {
        ".title": {
          fontSize: "1.8rem",
          lineHeight: "2.7rem",
        },
        h6: {
          fontSize: "1.4rem",
          lineHeight: "2.6rem",
        },
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    ".MuiGrid-item": {
      ":not(:last-child)": {
        marginBottom: "4rem",
      },
      ":not(:last-child)::after": {
        display: "none",
      },
    },
  },
}));
