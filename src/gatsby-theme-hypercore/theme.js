import { createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
  palette: {
    white: "#FFFFFF",
    black: "#262626",
    primary: {
      main: "#D2801E",
      bright: "#ED6D0B",
      dull: "#F3EEE5",
      light: "#C4C4C4",
    },
    secondary: {
      main: "#323438",
      blue: "#0BA9ED",
      dull: "#7C7C7C",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".HypBranding-root": {
          color: "#fff",
          fontSize: 24,
          textDecoration: "none",
        },
        "[class*='Hero-content'] > .MuiTypography-root:first-child": {
          textShadow: `0 1px 4px #000`,
        },
        h1: {
          fontSize: "30px !important",
          fontWeight: "800 !important",
        },
        code: {
          background: "rgb(45, 42, 85)",
          color: "rgb(158, 254, 255)",
          padding: "0 4px",
          borderRadius: "4px",
          display: "inline-block",
        },
        p: {
          padding: "10px 0",
        },
      },
    },
    MuiDivider: {
      root: {
        margin: "1rem 0",
      },
    },
  },
});

export default theme;