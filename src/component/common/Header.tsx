import { useState } from "react";
import Image from "next/image";
import router from "next/router";
import { Container, Link, Stack, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import HamburgerNav from "./HamburgerNav";

const navItem = [
  { name: "COMPANY", href: "/company" },
  { name: "PRODUCT", href: "/product" },
  { name: "APPLICATIONS", href: "/applications" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Container maxWidth="xl">
      <HeaderBox
        sx={{ my: 4 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src="/logo_color.png"
          alt="logo"
          width={147}
          height={36}
          onClick={() => {
            router.push("/");
          }}
        />
        <Stack direction="row" className="nav">
          {navItem.map((item) => (
            <div key={item.name}>
              <Link href={item.href} variant="subtitle2" sx={{ mx: 4.5 }}>
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
  );
}
const HeaderBox = styled(Stack)`
  .hamburger {
    display: none;
    width: 24px;
    height: 24px;
    &svg {
      font-size: 2.4rem;
    }
  }
  & a {
    color: #222;
  }
  @media (max-width: 992px) {
    .nav {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;
