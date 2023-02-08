import { useState } from "react";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { Container, Link, Stack, styled } from "@mui/material";

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
  const pathRoute = pathName.split("/")[1];

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
                <Link key={item.id} href={item.href} variant="subtitle2">
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
// const Item = styled(Box)(({ theme }) => ({}));
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
