import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export default function News() {
  return (
    <NewsBox>
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item md={12} lg={5}>
            <Typography variant="h1">Latest News</Typography>
          </Grid>
          <Grid item md={12} lg={7}>
            <NewsList container direction="column">
              <Grid item className="text">
                <Typography variant="body2">View more</Typography>
                <Box>
                  <Image
                    src="/icon_arrow_gray.svg"
                    alt="arrow"
                    width={5}
                    height={10}
                  />
                </Box>
              </Grid>
              <NewsItem item>
                <SubText>
                  <Typography>NOTICE</Typography>
                  <Typography>11.15.2022</Typography>
                </SubText>
                <Typography variant="subtitle1">
                  초고성능 드론탐지 레이다 국 전력화 시험 테스트 성공
                </Typography>
                <Typography variant="body2" className="ellipsis">
                  알에프코어는 드론탐지레이더에 국방 분야에서 제한적으로
                  적용되던 능동위상배열 기술을 민간 분야에도 쉽게 응용할 수 있는
                  핵심기술인 알에프코어는 드론탐지레이더에 국방 분야에서
                  제한적으로 적용되던 알에프코어는 드론탐지레이더에 국방
                </Typography>
              </NewsItem>
              <NewsItem item>
                <SubText>
                  <Typography>NOTICE</Typography>
                  <Typography>11.15.2022</Typography>
                </SubText>
                <Typography variant="subtitle1">
                  초고성능 드론탐지 레이다 국 전력화 시험 테스트 성공
                </Typography>
                <Typography variant="body2" className="ellipsis">
                  알에프코어는 드론탐지레이더에 국방 분야에서 제한적으로
                  적용되던 능동위상배열 기술을 민간 분야에도 쉽게 응용할 수 있는
                  핵심기술인 알에프코어는 드론탐지레이더에 국방 분야에서
                  제한적으로 적용되던 알에프코어는 드론탐지레이더에 국방
                </Typography>
              </NewsItem>
            </NewsList>
          </Grid>
        </Grid>
      </Container>
    </NewsBox>
  );
}
const NewsBox = styled(Box)(() => ({
  padding: "16rem 0",
}));

const NewsList = styled(Grid)(({ theme }) => ({
  "*": {
    fontFamily: `"pretendard", sans-serif !important`,
  },
  "& .text": {
    display: "flex",
    alignItems: "baseLine",
    justifyContent: "right",
    color: theme.palette.secondary.contrastText,
    fontWeight: 500,
    paddingBottom: "2rem",
    borderBottom: `2px solid #ddd`,
    "& > div": {
      marginLeft: "1.7rem",
    },
  },
}));
const NewsItem = styled(Grid)(({ theme }) => ({
  padding: "4rem 0",
  borderBottom: "1px solid #ddd",
  "& .MuiTypography-subtitle1": {
    margin: "1rem 0 2rem",
  },
  "& .MuiTypography-body2": {
    color: theme.palette.secondary.contrastText,
  },
}));

const SubText = styled(Box)`
  & p {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #555;
  }
  & p:first-child {
    position: relative;
    display: inline-block;
    padding-right: 10px;
  }
  & p:last-child {
    padding-left: 10px;
  }
  & p:first-child::after {
    position: absolute;
    content: "";
    display: block;
    width: 1px;
    height: 8px;
    background-color: #555;
    top: 4px;
    right: 0;
  }
`;
