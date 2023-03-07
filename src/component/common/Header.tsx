import { useState } from "react";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { Box, Container, Link, Stack, styled, Typography } from "@mui/material";

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
  {
    id: 3,
    name: "APPLICATIONS",
    href: "/applications",
    lnb: [
      { name: "COMMUNICATION", href: "/applications" },
      { name: "RADIO & DATA LINK", href: "/applications" },
      { name: "RADAR & ELECTRONIC WARFARE", href: "/applications" },
    ],
  },
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
  const pathRoutePage = "/" + pathName.split("/")[1];
  const pathRoute = pathName.split("/")[2];

  //header inner hover
  const [innerLnb, setInnerLnb] = useState<any>({});
  const handleMouseOver = (item: any) => {
    const lnbItem = navItem.filter((lnb) => lnb.name === item.name);
    setInnerLnb(lnbItem[0]);
  };
  return (
    <>
      <Container maxWidth="xl">
        <HeaderBox
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack className="logo-box">
            <Image
              src="/logo_color.png"
              alt="logo"
              width={147}
              height={36}
              onClick={() => {
                router.push("/");
              }}
            />
          </Stack>
          <Stack
            direction="row"
            className="inPc"
            onMouseOver={() => setIsHovering(true)}
          >
            {navItem &&
              navItem.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  variant="subtitle2"
                  onMouseOver={() => handleMouseOver(item)}
                  className={pathRoutePage === item.href ? "active" : ""}
                >
                  {item.name}
                </Link>
              ))}
          </Stack>

          <Stack
            className="hamburger inMobile"
            onClick={() => setNavOpen(true)}
          >
            <Image
              src="/icon_hamburger.svg"
              alt="hamburger"
              width={18}
              height={16}
            />
          </Stack>
        </HeaderBox>
        {isHovering && (
          <HeaderInner>
            <Typography className="title">{innerLnb?.name}</Typography>
            {innerLnb.lnb &&
              innerLnb.lnb.map((item: any) => (
                <Link
                  key={item.name}
                  href={item.href}
                  variant="subtitle2"
                  className={
                    pathRoute === item.href.split("/")[2] ? "active" : ""
                  }
                >
                  {item.name}
                </Link>
              ))}
          </HeaderInner>
        )}

        {navOpen && (
          <HamburgerNav
            isOpen={navOpen}
            onClose={() => setNavOpen(false)}
            navItem={navItem}
          />
        )}
      </Container>
    </>
  );
}

const HeaderBox = styled(Stack)(({ theme }) => ({
  padding: "1.8rem 0",
  " .logo-box": {
    minWidth: "147px",
  },
  "& a": {
    color: theme.palette.info.main,
    fontSize: "2rem",
    margin: " 0 3.6rem ",
  },
  "& a.active": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    " .logo-box img": {
      width: "8.9rem",
      height: "2.2rem",
    },
  },
}));
const HeaderInner = styled(Box)(({ theme }) => ({
  padding: "6rem 0",
  " .title": {
    fontSize: "4.8rem",
    fontWeight: 600,
    lineHeight: "7.2rem",
    marginBottom: "2rem",
  },
  a: {
    fontSize: "2rem",
    lineHeight: "3rem",
    fontWeight: 500,
    color: theme.palette.info.main,
    marginRight: " 4rem",
  },
  "a.active": {
    color: theme.palette.primary.main,
  },
}));
