import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
export const COLORS = {
  primary: "#435c70",
  secondary: "#f5a623",
  fontColor: "white",
  highLighter: "red",
};

export const theme = createTheme({
  palette: {
    secondary: {
      main: COLORS.secondary,
      light: "red",
      contrastText: "#fff",
    },
    primary: {
      main: COLORS.primary,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: COLORS.fontColor,
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          ":hover": {
            transform: "scale(1.3,1.3)",
            
          },
        transition:'2s, 2s'
        },
      },
    },
  },
});
