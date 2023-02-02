import { theme } from "@/styles/theme";
import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterBox>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={2.5} className="item">
            <Box className="logo-box">
              <Image src="/logo_black.png" alt="logo" width={147} height={36} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} className="item">
            <Typography variant="subtitle1">HEAD OFFICE</Typography>

            <Item direction="row" className="title-style-1">
              <Title variant="subtitle2">Head office</Title>
              <Text variant="caption" style={{ maxWidth: "589px" }}>
                C-708, Bundang Technopark, 744, Pangyo-ro, Bundang-gu,
                Seongnam-si, Gyeonggi-do, Republic of Korea
              </Text>
            </Item>
            <Item direction="row" className="title-style-1">
              <Title variant="subtitle2">Tel</Title>
              <Box>
                <Text variant="caption">+82-31-000-0000 (HQ)</Text>
                <Text variant="caption">
                  +82-31-000-0000 (International call)
                </Text>
              </Box>
            </Item>
            <Item direction="row">
              <Text
                variant="subtitle2"
                style={{ color: theme.palette.info.main }}
              >
                Copyright © 2022 RFcore. All rights reserved.
              </Text>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3.5} className="item">
            <Typography variant="subtitle1">SUPPORT</Typography>
            <Item direction="row" className="title-style-2">
              <Title variant="subtitle2">General inquirles</Title>
              <Text variant="caption">abcd@rfCore.com </Text>
            </Item>
            <Item direction="row" className="title-style-2">
              <Title variant="subtitle2">Career</Title>
              <Text variant="caption">abcd@rfCore.com</Text>
            </Item>
            <Item>
              <Button variant="text">Go to Inquiries</Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  );
}
const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#ebebeb",
  padding: "6rem 0",
  "& .MuiGrid-item": {
    color: theme.palette.info.main,
  },
  "& .logo-box": {
    maxWidth: "194px",
  },
  "& .title-style-1 h6": {
    minWidth: "94px",
  },
  "& .title-style-2 h6": {
    minWidth: "137px",
  },
  [theme.breakpoints.down("lg")]: {
    "& .item:not(:last-child)": {
      marginBottom: "3.6rem",
    },
  },
}));

const Item = styled(Stack)(({ theme }) => ({
  marginTop: "2rem",
  [theme.breakpoints.down("lg")]: {
    marginTop: "1.2rem",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  minWidth: "fit-content",
  fontWeight: 500,
  margin: "0 4rem 2rem 0",
  color: theme.palette.info.main,
  [theme.breakpoints.down("xl")]: {
    margin: "0 3.2rem 2rem 0",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
}));
