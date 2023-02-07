import { useState } from "react";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { Box, Container, Link, Stack, styled, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import HamburgerNav from "./HamburgerNav";

const navItem = [
  {
    id: 1,
    name: "COMPANY",
    href: "/company",
    lnb: [
      { name: "About RFcore", href: "/company" },
      { name: "R&D Capability", href: "/company/capability" },
      { name: "History", href: "/company/history" },
      { name: "PR Center", href: "/company/center" },
    ],
  },
  {
    id: 2,
    name: "PRODUCT",
    href: "/product",
    lnb: [
      { name: "Amplifiers", href: "/product" },
      { name: "MMICs", href: "/product/mmic" },
      { name: "Sub-systems", href: "/product/systems" },
      { name: "Customized Solution", href: "/product/solution" },
    ],
  },
  { id: 3, name: "APPLICATIONS", href: "/applications" },
  { id: 4, name: "CAREERS", href: "/careers" },
  {
    id: 5,
    name: "CONTACT",
    href: "/contact",
    lnb: [
      { name: "Get Inquires", href: "/contact" },
      { name: "Contact us", href: "/contact/ask" },
    ],
  },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pathName = useRouter().pathname;
  const pathRoute = pathName.split("/")[1];

  return (
    <>
      <Container maxWidth="xl">
        <HeaderBox
          sx={{ my: 4 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Image
              src="/logo_color.png"
              alt="logo"
              width={147}
              height={36}
              onClick={() => {
                router.push("/");
              }}
            />
          </Box>
          <Stack
            direction="row"
            className="nav"
            onMouseOver={() => setIsHovering(true)}
          >
            {navItem.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  variant="subtitle2"
                  className={pathName === item.href ? "active" : ""}
                  onMouseOver={() => console.log("item.name", item.name)}
                  //마우스 올렸을 때의 item name이랑 lnb의 name이 같은
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </Stack>
          <Stack
            direction="column"
            className="hamburger"
            onClick={() => setNavOpen(true)}
          >
            <MenuIcon />
          </Stack>
        </HeaderBox>
        {navOpen && (
          <HamburgerNav
            isOpen={navOpen}
            onClose={() => setNavOpen(false)}
            navItem={navItem}
          />
        )}
      </Container>
      {isHovering === true && (
        <Box
          style={{ borderTop: "1px solid #ddd" }}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Container maxWidth="xl">
            <Lnb>
              {navItem &&
                navItem.map((item) => (
                  <>
                    {"/" + pathRoute === item.href ? (
                      <Typography className="title" key={item.name}>
                        {item.name}{" "}
                      </Typography>
                    ) : (
                      ""
                    )}
                    <Stack className="lnb-list">
                      {item.lnb &&
                        pathName === item.href &&
                        item.lnb.map((lnb) => (
                          <Link
                            href={lnb.href}
                            key={lnb.name}
                            className={pathName === lnb.href ? "active" : ""}
                          >
                            {lnb.name && lnb.name}
                          </Link>
                        ))}
                    </Stack>
                  </>
                ))}
            </Lnb>
          </Container>
        </Box>
      )}
    </>
  );
}

const HeaderBox = styled(Stack)(({ theme }) => ({
  "& .hamburger": {
    display: "none",
    width: "2.4rem",
    height: "2.4rem",
    "& svg": {
      fontSize: "2.4rem",
    },
  },
  "& a": {
    color: theme.palette.info.main,
    fontSize: "2rem",
    margin: " 0 4rem ",
  },
  "& a.active": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    "& .nav": {
      display: "none",
      "& .hamburger": {
        display: "block",
      },
    },
  },
}));

const Lnb = styled(Stack)(({ theme }) => ({
  padding: "6rem 0",
  " .title": {
    fontSize: "4.8rem",
    fontWeight: 600,
    lineHeight: "7.2rem",
  },
  " .lnb-list": {
    flexDirection: "row",

    a: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: 500,
      color: theme.palette.info.main,
      marginTop: "2rem 4rem  0 0",
    },
    "a.active": {
      color: theme.palette.primary.main,
    },
  },
}));
