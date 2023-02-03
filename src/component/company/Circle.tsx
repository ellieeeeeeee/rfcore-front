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
    <GridContainer container rowSpacing={2}>
      {circleContent.map((item) => (
        <Grid item xs={12} md={4} className="circle" key={item.title}>
          <Typography>{item.title}</Typography>
          <Typography variant="body2">{item.subTitle}</Typography>
        </Grid>
      ))}
    </GridContainer>
  );
}
const GridContainer = styled(Grid)(({ theme }) => ({
  "& .circle": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "50%",
    color: theme.palette.secondary.light,
    maxHeight: "44rem",
    border: " 2.4rem solid #fff",
    padding: "4.7rem",
    "& p:first-child": {
      fontSize: "2.8rem",
      lineHeight: "2.4rem",
      fontWeight: 600,
    },
    "& p:last-child": {
      fontSize: "2rem",
      lineHeight: "3rem",
      marginTop: "2rem",
    },
  },
}));
