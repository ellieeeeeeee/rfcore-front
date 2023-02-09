import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterBox>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={2.5}>
            <Box className="logo-box">
              <Image src="/logo_black.png" alt="logo" width={147} height={36} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={5.5} className="item">
            <Typography variant="subtitle1">HEAD OFFICE</Typography>

            <Item direction="row">
              <Title variant="body2">Head office</Title>
              <Text variant="body2">
                C-708, Bundang Technopark, 744, Pangyo-ro, Bundang-gu,
                Seongnam-si, Gyeonggi-do, Republic of Korea
              </Text>
            </Item>
            <Item direction="row">
              <Title variant="body2">Tel</Title>
              <Box>
                <Text variant="body2">+82-31-000-0000 (HQ)</Text>
                <Text variant="body2">
                  +82-31-000-0000 (International call)
                </Text>
              </Box>
            </Item>
            <Item direction="row" className="copy-text">
              <Text variant="body2">
                Copyright © 2022 RFcore. All rights reserved.
              </Text>
            </Item>
          </Grid>
          <Grid item xs={12} lg={4} className="item">
            <Typography variant="subtitle1">SUPPORT</Typography>
            <Item direction="row">
              <Title variant="body2">General inquirles</Title>
              <Text variant="body2">abcd@rfCore.com </Text>
            </Item>
            <Item direction="row">
              <Title variant="body2">Career</Title>
              <Text variant="body2">abcd@rfCore.com</Text>
            </Item>
            <Item>
              <Button variant="text">Go to Inquiries</Button>
            </Item>
          </Grid>
          <Grid item className="copy-text-m">
            <Text variant="body2">
              Copyright © 2022 RFcore. All rights reserved.
            </Text>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  );
}
const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#ebebeb",
  padding: "6rem 0",
  " .item": {
    h6: {
      fontWeight: 600,
      color: theme.palette.info.main,
    },
  },
  "& .logo-box": {
    maxWidth: "194px",
  },
  ".copy-text p": {
    fontWeight: 500,
    color: theme.palette.info.main,
  },
  ".copy-text-m": {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "4rem 0",
    ".MuiGrid-item": {
      paddingTop: "2rem",
    },
    ".MuiGrid-item:first-of-type": {
      display: "none",
    },
    ".item": {
      h6: {
        paddingBottom: "1rem",
      },
    },
    ".copy-text ": {
      display: "none",
    },
    ".copy-text-m": {
      display: "block",
    },
  },
  [theme.breakpoints.down("md")]: {
    " .item > div:last-child": {
      display: "none",
    },
    ".copy-text-m": {
      p: {
        fontSize: "1.2rem",
        fontWeight: 500,
        color: theme.palette.info.main,
      },
    },
  },
}));

const Item = styled(Stack)(({ theme }) => ({
  marginTop: "2rem",
  [theme.breakpoints.down("lg")]: {
    display: "block",
    marginTop: "1rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  minWidth: "fit-content",
  fontWeight: 500,
  margin: "0 4rem 2rem 0",
  color: theme.palette.info.main,
  [theme.breakpoints.down("lg")]: {
    margin: "0 0 1rem ",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    lineHeight: "1.8rem",
  },
}));
