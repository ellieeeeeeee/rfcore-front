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
  // {
  //   id: 2,
  //   name: "PRODUCT",
  //   href: "/product",
  //   lnb: ["Amplifiers", "MMICs", "Sub-systems", "Customized Solution"],
  // },
  // { id: 3, name: "APPLICATIONS", href: "/applications" },
  // { id: 4, name: "CAREERS", href: "/careers" },
  // {
  //   id: 5,
  //   name: "CONTACT",
  //   href: "/contact",
  //   lnb: ["Get Inquires", "Contact us"],
  // },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pathName = useRouter().pathname;
  const pathRoute = pathName.split("/")[2];
  console.log(pathRoute);
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
        <Container
          maxWidth="xl"
          style={{ borderTop: "1px solid #ddd" }}
          onMouseOut={() => setIsHovering(false)}
        >
          {navItem &&
            navItem.map((item) => (
              <Lnb key={item.id}>
                <Typography>{item.name}</Typography>
                <Stack className="lnb-list">
                  {item.lnb.map((lnb) => (
                    <Link
                      href={lnb.href}
                      key={lnb.name}
                      className={pathName === lnb.href ? "active" : ""}
                    >
                      {lnb.name}
                    </Link>
                  ))}
                </Stack>
              </Lnb>
            ))}
        </Container>
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
      "& .hamburhger": {
        display: "block",
      },
    },
  },
}));
const Lnb = styled(Stack)(({ theme }) => ({
  padding: "6rem 0",
  " > p": {
    fontSize: "4.8rem",
    fontWeight: 600,
    lineHeight: "7.2rem",
    marginBottom: "2rem",
  },
  " .lnb-list": {
    flexDirection: "row",
    a: {
      marginRight: "4rem",
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: 500,
      color: theme.palette.info.main,
    },
    "a.active": {
      color: theme.palette.primary.main,
    },
  },
}));
