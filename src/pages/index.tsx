import Slide from "@/component/ApplicationSlide";
import Image from "next/legacy/image";
import {
  Box,
  Container,
  Typography,
  styled,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import MainSlide from "@/component/MainSlide";

export default function Home() {
  return (
    <>
      <ProductBox>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h1">What we do</Typography>
            <Typography variant="body1">
              We provide high-quality RF Solutions
            </Typography>
            <MainSlide />
          </Box>
        </Container>
      </ProductBox>
      <ApplicationsBox>
        <Container maxWidth="xl">
          <Typography variant="h1">Applications</Typography>
          <Typography variant="body1">
            Find out more about RFCore around you
          </Typography>
          <Box className="isPc">
            <Slide />
            <Box textAlign="center" className="bottom-text">
              <Typography>COMMUNICATION</Typography>
              <Typography variant="body1">
                Simple explanation on related applications
              </Typography>
            </Box>
          </Box>
          <Stack className="isMobile" spacing={5}>
            <Item>
              <Typography variant="subtitle2">RADIO & DATA LINK</Typography>
              <Typography variant="caption">
                Simple explanation on related applications
              </Typography>
              <Box className="image-box">
                <Image src="/sample_m.png" alt="" layout="fill"></Image>
              </Box>
            </Item>
            <Item>
              <Typography variant="subtitle2">COMMUNICATION</Typography>
              <Typography variant="caption">
                Simple explanation on related applications
              </Typography>
              <Box className="image-box">
                <Image src="/sample_m.png" alt="" layout="fill"></Image>
              </Box>
            </Item>
            <Item>
              <Typography variant="subtitle2">
                RADAR & ELECTRONIC WARFARE
              </Typography>
              <Typography variant="caption">
                Simple explanation on related applications
              </Typography>
              <Box className="image-box">
                <Image src="/sample_m.png" alt="" layout="fill"></Image>
              </Box>
            </Item>
          </Stack>
        </Container>
      </ApplicationsBox>
      <NewsBox>
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item md={12} lg={5}>
              <Typography variant="h1" style={{ fontWeight: 700 }}>
                Latest News
              </Typography>
            </Grid>
            <Grid item md={12} lg={7}>
              <NewsList container direction="column">
                <Grid item className="top-text">
                  <Typography variant="body1">View more</Typography>
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
                  <Typography variant="body1" className="ellipsis">
                    알에프코어는 드론탐지레이더에 국방 분야에서 제한적으로
                    적용되던 능동위상배열 기술을 민간 분야에도 쉽게 응용할 수
                    있는 핵심기술인 알에프코어는 드론탐지레이더에 국방 분야에서
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
                  <Typography variant="body1" className="ellipsis">
                    알에프코어는 드론탐지레이더에 국방 분야에서 제한적으로
                    적용되던 능동위상배열 기술을 민간 분야에도 쉽게 응용할 수
                    있는 핵심기술인 알에프코어는 드론탐지레이더에 국방 분야에서
                    제한적으로 적용되던 알에프코어는 드론탐지레이더에 국방
                  </Typography>
                </NewsItem>
              </NewsList>
            </Grid>
          </Grid>
        </Container>
      </NewsBox>
      <CareerBox>
        <Container maxWidth="xl">
          <Typography variant="h1">Find Your Career</Typography>
          <Typography variant="subtitle1">
            We’re looking for gritty and innovative minds to help us build a
            better and faster world through RF Technology. Come join our team
            today!
          </Typography>
          <Button variant="contained">ARE YOU READY TO JOIN US?</Button>
        </Container>
      </CareerBox>
    </>
  );
}
const ProductBox = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  background: "#f4f4f4",
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
  },
}));
const ApplicationsBox = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  backgroundColor: "#144096",
  color: theme.palette.secondary.light,
  " > div > p": {
    color: theme.palette.secondary.light,
    margin: "2rem 0 10rem",
  },
  ".bottom-text": {
    "p:first-of-type": {
      fontSize: "3.2rem",
      fontWeight: 600,
      lineHeight: "4.8rem",
      marginBottom: "2rem",
    },
    "p:last-child": {
      color: theme.palette.info.light,
      fontWeight: 300,
    },
  },
  ".isMobile": { display: "none" },
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    " > div > p": {
      margin: "1rem 0 8rem",
      color: theme.palette.info.light,
    },
    ".isPc": {
      display: "none",
    },
    ".isMobile": { display: "block" },
  },
}));
//모바일
const Item = styled(Box)(({ theme }) => ({
  textAlign: "center",
  " .image-box": {
    width: "100%",
    minHeight: "32rem",
  },
  span: {
    display: "inline-block",
    margin: "1rem 0 2rem",
    color: theme.palette.info.light,
    fontWeight: 300,
  },
}));
const NewsBox = styled(Box)(({ theme }) => ({
  padding: "16rem 0",
  [theme.breakpoints.down("md")]: {
    padding: "8rem 0",
    ".MuiGrid-item h1": {},
  },
}));

const NewsList = styled(Grid)(({ theme }) => ({
  "*": {
    fontFamily: `"pretendard", sans-serif !important`,
  },
  "& .top-text": {
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
  [theme.breakpoints.down("md")]: {
    marginTop: "6.2rem",
    "& .top-text": {
      paddingBottom: "1.2rem",
    },
  },
}));

const NewsItem = styled(Grid)(({ theme }) => ({
  padding: "4rem 0",
  borderBottom: "1px solid #ddd",
  "& .MuiTypography-subtitle1": {
    margin: "1rem 0 2rem",
    fontWeight: 600,
  },
  "& .MuiTypography-body1": {
    color: theme.palette.secondary.contrastText,
  },
  [theme.breakpoints.down("md")]: {
    padding: "2rem 0",
    "& .MuiTypography-subtitle1": {
      margin: "1rem 0 ",
    },
  },
}));

const SubText = styled(Box)`
  & p {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #555;
  }
  & p:first-of-type {
    position: relative;
    display: inline-block;
    padding-right: 10px;
  }
  & p:last-child {
    padding-left: 10px;
  }
  & p:first-of-type::after {
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
//TODO 텍스트에 linear-gradient
const CareerBox = styled(Box)(({ theme }) => ({
  backgroundImage: ` linear-gradient( 91.81deg,
      rgba(0, 0, 0, 0.0549) 41.12%,
      rgba(0, 0, 0, 0.61) 79.49%),
      url("/main_bg_01.png");`,
  backgroundSize: "cover",
  color: theme.palette.secondary.light,
  "& > div": {
    paddingTop: "10rem",
    paddingBottom: "10rem",
    h1: {
      fontWeight: 700,
    },
    h6: {
      color: theme.palette.info.light,
      margin: "2rem 0 4rem",
    },
  },
  "& button": {
    maxWidth: "36rem",
  },
  [theme.breakpoints.down("md")]: {
    "& > div": {
      padding: "8rem 2rem",
      h6: {
        fontSize: "1.4rem",
        lineHeight: "2.6rem",
        margin: "1rem 0 4rem",
      },
      button: {
        width: "100%",
        maxWidth: "none",
        fontSize: "1.4rem",
      },
    },
  },
}));
