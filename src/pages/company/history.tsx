import Tab from "@/component/common/Tab";
import TopBanner from "@/component/common/TopBanner";
import { Box, styled } from "@mui/material";
import React from "react";

const content = [
  { title: "Present ~ 2015" },
  { title: "2014 ~ 2010" },
  { title: "2000 ~ 2009" },
];

export default function history() {
  return (
    <History>
      <TopBanner
        image
        title="History of Excellence !"
        subTitle1="Founded in 2000, RFcore Co., Ltd is a global leader in design, develop and manufacture the power amplifier solution for defense, commercial and industrial market application."
      />
      <Tab content={content} />
    </History>
  );
}
const History = styled(Box)(({ theme }) => ({}));
