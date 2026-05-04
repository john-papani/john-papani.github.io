import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";

const main_theme = createTheme({
  palette: {
    primary: {
      light: "#5CDB95",
      main: "#379683",
      dark: "black",
    },
    secondary: {
      light: "#fff",
      main: "#EDF5E1",
      dark: "#8EE4AF",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  appbar: {
    position:"sticky",
    borderBottom:"1px solid rgba(255, 255, 255, 0.12)",
    color: "white",
    background:
      "linear-gradient(90deg, rgba(6, 7, 11, 0.82), rgba(16, 19, 28, 0.72)) !important",
    backdropFilter: "blur(18px)",
    boxShadow: "0 18px 44px rgba(0, 0, 0, 0.24)",
  },
  toolbar: {
    backgroundColor: "transparent",
    position: "fixed",
  },
}));
