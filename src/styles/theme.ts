import { createTheme } from "@mui/material/styles";

export const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 900,
      lg: 1200, //1200이상 적용
      xl: 1488,
    },
  },
});
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 900,
      lg: 1200,
      xl: 1488,
    },
  },
  palette: {
    //blue
    primary: {
      main: "#1D75CD",
      light: "#4393E3",
      contrastText: "#2a84e1",
    },
    secondary: {
      main: "#000",
      light: "#fff",
      contrastText: "#9a9a9a", // 클릭 가능한 그레이
    },
    //gray
    info: {
      main: "#222", //타이틀
      dark: "#ddd", //라인
      light: "#ccc", //클릭 불가능한 그레이
      contrastText: "#555", //정보성 text
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 10,
          fontWeight: 400,
          fontFamily: "Poppins",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
        h1: {
          fontSize: "6rem",
          lineHeight: "9rem",
          fontWeight: 700,
          [breakpointsTheme.breakpoints.down("md")]: {
            fontSize: "2.6rem",
            lineHeight: "3.9rem",
          },
        },
        h2: {
          fontSize: "5.6rem",
          lineHeight: "8.4rem",
        },
        h3: {
          fontSize: "4rem",
          lineHeight: "6rem",
          [breakpointsTheme.breakpoints.down("md")]: {
            fontSize: "2.2rem",
            lineHeight: "3.3rem",
          },
        },
        subtitle1: {
          fontSize: "2.4rem",
          lineHeight: "4rem",
          [breakpointsTheme.breakpoints.down("md")]: {
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
          },
        },
        subtitle2: {
          fontSize: "2rem",
          lineHeight: "2rem",
        },
        body1: {
          fontSize: "1.8rem",
          lineHeight: "2.8rem",
          [breakpointsTheme.breakpoints.down("md")]: {
            fontSize: "1.4rem",
            lineHeight: "2.6rem",
          },
        },
        body2: {
          fontSize: "1.6rem",
          lineHeight: "2.4rem",
          [breakpointsTheme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
            lineHeight: "1.8rem",
          },
        },
        caption: {
          fontSize: "1.4rem",
          lineHeight: "2.1rem",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontFamily: "Poppins",
            color: "#fff",
            padding: "1.3rem 0",
            borderRadius: 0,
            boxShadow: "none",
            width: "100%",
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            fontWeight: 500,
            "&:hover": { backgroundColor: "#1D75CD", boxShadow: "none" },
          },
        },
        {
          props: { variant: "text" },
          style: {
            fontFamily: "Poppins",
            color: "#fff",
            backgroundColor: "#1D75CD",
            padding: "1.2rem 0",
            borderRadius: 40,
            boxShadow: "none",
            width: "100%",
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            fontWeight: 500,
            "&:hover": { backgroundColor: "#1D75CD", boxShadow: "none" },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          input: {
            padding: "1.2rem 1.6rem",
            border: "1px solid #E6E6E6",
            borderRadius: 0,
            "&::placeholder": {
              color: "#aaa",
              fontSize: 16,
              lineHeight: "2.4rem",
              fontWeight: 400,
            },
          },
          textarea: {
            padding: "1rem",
            border: "1px solid #E6E6E6;",
            borderRadius: 0,
            "&::placeholder": {
              color: "#aaa",
              fontSize: 16,
              lineHeight: "2.4rem",
              fontWeight: 400,
            },
          },
          "&.MuiInputBase-multiline": {
            borderRadius: 0,
            padding: "0",
          },
        },
      },
    },
  },
});
