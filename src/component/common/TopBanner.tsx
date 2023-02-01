import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Image, { ImageProps } from "next/image";
import { subtle } from "crypto";
import { transform } from "typescript";

interface Props {
  image?: string;
  title?: string;
  subTitle1?: string;
  subTitle2?: any;
  buttonTxt1?: string;
  buttonTxt2?: string;
  test?: boolean;
}
export default function TopBanner({
  image,
  title,
  subTitle1,
  subTitle2,
  buttonTxt1,
  buttonTxt2,
}: Props) {
  return (
    <BannerBox image="">
      <Container maxWidth="xl">
        {/* TODO: 카테고리 들어갈 영역 만들기(상품 하위 카테고리) */}
        <Typography variant="h2" sx={{ mb: "2rem" }}>
          {title}
        </Typography>
        <Grid container className="banner-text">
          <Grid item className={subTitle1 ? "title" : "title-list"}>
            {subTitle2 &&
              subTitle2.map((item: any) => (
                <Typography variant="body2" key={item}>
                  {item}
                </Typography>
              ))}
            {subTitle1 && <Typography variant="body1">{subTitle1}</Typography>}
          </Grid>
          <Grid item>
            <Grid container className="button-group">
              <Grid item>
                {buttonTxt1 && (
                  <Button variant="contained">{buttonTxt1}</Button>
                )}
              </Grid>
              <Grid item>
                {buttonTxt2 && (
                  <Button variant="contained">{buttonTxt2}</Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </BannerBox>
  );
}
interface BgStyleProps {
  image: string;
}
const BannerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "image",
})<BgStyleProps>(({ image, theme }) => ({
  padding: `6rem 0`,
  ...(image !== ""
    ? {
        background: `url("/banner_bg_01.png")`,
      }
    : { background: `url("/banner_bg_02.png") #F6F6F6 center` }),
  "& .banner-text": {
    color: theme.palette.secondary.contrastText,
    alignItems: "center",
    justifyContent: "space-between",
    "& .title-list": {
      display: "flex",
      "& p": {
        position: "relative",
        padding: "0 2rem",
      },
      "& p:not(:last-child)::after": {
        position: "absolute",
        display: "block",
        content: '""',
        width: "1px",
        height: "10px",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        background: "#ccc",
      },
      "& p:first-child": {
        paddingLeft: 0,
      },
    },
    "& .button-group": {
      "& button": {
        padding: "1.3rem 3.6rem",
      },
      "& > div:first-child": {
        marginRight: "2rem",
      },
    },
  },
  "& .button-group": {},
}));
