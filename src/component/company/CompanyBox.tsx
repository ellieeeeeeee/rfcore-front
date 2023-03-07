import { Box, Typography, styled } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  subTitle: string;
}
export default function CompanyBox({ title, subTitle }: Props) {
  return (
    <Company>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="subtitle2">{subTitle}</Typography>
    </Company>
  );
}
const Company = styled(Box)(({ theme }) => ({
  background: "#7c7c7c",
  color: theme.palette.secondary.light,
  padding: "2rem",
  cursor: "pointer",
  ":hover": {
    background: theme.palette.primary.main,
  },
  p: {
    width: "max-content",
  },
  h6: {
    width: "max-content",
    fontWeight: 600,
    marginTop: "1rem",
  },
}));
