import { Box, Container, styled } from "@mui/material";
import React from "react";

interface Props {
  image?: string;
  title: string;
  subTitle: string;
  buttonTxt1: string;
  buttonTxt2: string;
}
export default function TopBanner({
  image,
  title,
  subTitle,
  buttonTxt1,
  buttonTxt2,
}: Props) {
  return (
    <BannerBox image="">
      <Container maxWidth="xl"></Container>
    </BannerBox>
  );
}
interface BgStyleProps {
  image: string;
}
const BannerBox = styled(Container)<BgStyleProps>(() => ({}));
