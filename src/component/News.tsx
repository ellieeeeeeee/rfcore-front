import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export default function News() {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 25 }}>
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
    </Box>
  );
}

const NewsList = styled(Grid)`
  * {
    font-family: "pretendard", sans-serif !important;
  }
  & .text {
    display: flex;
    align-items: baseline;
    justify-content: right;
    color: #7c7c7c;
    font-weight: 500;
    padding-bottom: 2rem;
    border-bottom: 2px solid #ddd;
    & img {
      margin-left: 1.7rem;
    }
  }
`;
const NewsItem = styled(Grid)`
  padding: 4rem 0;
  border-bottom: 1px solid #ddd;
  & .MuiTypography-subtitle1 {
    margin: 1rem 0 2rem;
  }
  & .MuiTypography-body2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #555;
  }
`;
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
