import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isOpen: boolean;
  onClose(): void;
  navItem: any;
}
export default function HamburgerNav({ isOpen, onClose, navItem }: Props) {
  return (
    <Nav>
      <CloseBox
        onClick={() => {
          onClose();
        }}
      >
        <CloseIcon />
      </CloseBox>
      <NavList direction="column">
        {navItem.map((item: string) => (
          <Typography key={item} variant="subtitle2" sx={{ mx: 4.5 }}>
            {item}
          </Typography>
        ))}
      </NavList>
    </Nav>
  );
}
const Nav = styled(Stack)(({ theme }) => ({
  position: "absolute",
  padding: "1.6rem",
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.light,
  " & svg": {
    color: theme.palette.secondary.light,
  },
}));

const CloseBox = styled(Box)`
  display: flex;
  justify-content: end;
`;

const NavList = styled(Stack)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textAlign: "center",
  " h6:not(:last-child)": {
    marginBottom: "2.4rem",
  },
}));
