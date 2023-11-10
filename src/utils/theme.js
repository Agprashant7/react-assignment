import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
export const COLORS = {
  primary: "#567086",
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
  },
});
