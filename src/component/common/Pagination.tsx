import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, styled } from "@mui/material";

export default function PaginationButtons() {
  return (
    <PaginationArea>
      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
      </Stack>
    </PaginationArea>
  );
}
const PaginationArea = styled(Box)(({ theme }) => ({
  ul: {
    justifyContent: "center",
    li: {
      width: "4rem",
      height: "4rem",
      ":nth-child(2), :nth-last-child(2)": {
        margin: "0 1rem",
      },
      button: {
        width: "100%",
        height: "100%",
      },
    },
    "li button.MuiPaginationItem-firstLast,li button.MuiPaginationItem-previousNext":
      {
        border: "1px solid #aaa",
        borderRadius: 0,
      },
    "li:first-child button": {
      background: `url("/icon_prev_double.svg")center no-repeat `,
      backgroundSize: "1.2rem 1.2rem",
    },
    "li:nth-child(2) button": {
      background: `url("/icon_prev_gray.svg")center no-repeat `,
      backgroundSize: "0.6rem 1.2rem",
    },
    "li:nth-last-child(2) button": {
      background: `url("/icon_next_gray.svg")center no-repeat `,
      backgroundSize: "1.2rem 1.2rem",
    },
    "li:last-child button": {
      background: `url("/icon_next_double.svg")center no-repeat `,
      backgroundSize: "1.2rem 1.2rem",
    },
    "li button.Mui-disabled": {
      opacity: 1,
      border: `1px solid ${theme.palette.info.light}`,
    },
    ".MuiPaginationItem-text": {
      fontSize: "1.8rem",
      color: theme.palette.secondary.contrastText,
    },
    ".Mui-selected": {
      fontWeight: 500,
      background: theme.palette.secondary.light,
      color: theme.palette.primary.main,
    },
    ".MuiPaginationItem-icon ": {
      position: "relative",
      path: {
        display: "none",
      },
    },
  },
}));
