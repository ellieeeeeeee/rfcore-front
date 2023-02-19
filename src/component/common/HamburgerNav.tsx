import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import router from "next/router";

interface Props {
  isOpen: boolean;
  onClose(): void;
  navItem: any;
}
export default function HamburgerNav({ isOpen, onClose, navItem }: Props) {
  return (
    <Nav>
      <Stack direction="row" className="header-box">
        <Box className="logo-box">
          <Image
            src="/logo_color.png"
            alt="logo"
            width={89}
            height={22}
            onClick={() => {
              router.push("/");
            }}
          />
        </Box>
        <Box className="close-box">
          <Image
            src="/icon_close.svg"
            alt="logo"
            width={16}
            height={16}
            onClick={() => {
              onClose();
            }}
          />
        </Box>
      </Stack>
      <NavBox>
        {navItem.map((item: any) => (
          <details key={item.id}>
            <summary className={item.lnb ? "" : "no-icon"}>
              <Typography variant="body2" className="title">
                {item.name}
              </Typography>
            </summary>
            {item.lnb && (
              <div>
                {item.lnb.map((lnb: any) => (
                  <Link variant="body2" key={lnb.name} href={lnb.href}>
                    {lnb.name}
                  </Link>
                ))}
              </div>
            )}
          </details>
        ))}
      </NavBox>
    </Nav>
  );
}
const Nav = styled(Stack)(({ theme }) => ({
  position: "absolute",
  padding: "1.8rem 2rem",
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.secondary.light,
  ".header-box": {
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".logo-box": {
    maxWidth: "8.9rem",
    height: "2.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
const NavBox = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  " details": {
    borderBottom: `1px solid ${theme.palette.info.dark}`,
  },
  " details summary": {
    padding: "2rem 1.2rem",
    p: { fontWeight: 500, color: `${theme.palette.info.main}` },
  },
  "details summary::after": {
    top: "2.6rem",
    right: "1.2rem",
    width: "1.5rem",
    height: "1.5rem",
  },
  "details summary.no-icon::after": {
    background: "none",
  },
  "details[open] summary p": {
    color: theme.palette.primary.main,
  },
  "details[open] > div": {
    padding: "2rem",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: "#F2F8FF",
    a: {
      display: "block",
      color: theme.palette.info.main,
    },
    "a:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    " details summary": {
      p: {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
      },
    },
    "details[open] > div": {
      a: {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
      },
    },
  },
}));
