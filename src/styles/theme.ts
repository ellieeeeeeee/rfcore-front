import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1440,
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
      contrastText: "#555", //body text 색상
    },
    //gray
    info: {
      main: "#222",
      dark: "#3c3c3c",
      light: "#999",
    },
    //gray
    success: {
      main: "#ebebeb",
      dark: "#e6e6e6",
      light: "#f4f4f4",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 10,
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
        },
        h2: {
          fontSize: "5.6rem",
          lineHeight: "8.4rem",
          fontWeight: 700,
        },
        h3: {
          fontSize: "4rem",
          lineHeight: "6rem",
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: "2.4rem",
          lineHeight: "4rem",
          fontWeight: 600,
        },
        subtitle2: {
          fontSize: "1.6rem",
          lineHeight: "2rem",
          fontWeight: 500,
        },
        body1: {
          fontSize: "2.4rem",
          lineHeight: "4rem",
          fontWeight: 400,
        },
        body2: {
          fontSize: "1.8rem",
          lineHeight: "2.8rem",
          fontWeight: 400,
        },
        caption: {
          fontSize: "1.6rem",
          lineHeight: "2.4rem",
          fontWeight: 400,
        },
        button: {
          fontSize: "1.6rem",
          lineHeight: "2.4rem",
          fontWeight: 500,
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
            padding: "13px 0",
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
            padding: "12px 0",
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
            padding: "12px 16px",
            border: "1px solid #E6E6E6",
            borderRadius: 0,
            "&::placeholder": {
              color: "#aaa",
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: 400,
            },
          },
          textarea: {
            padding: "10px",
            border: "1px solid #E6E6E6;",
            borderRadius: 0,
            "&::placeholder": {
              color: "#aaa",
              fontSize: 16,
              lineHeight: "24px",
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
