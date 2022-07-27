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
  timeBtnBox: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
  loadingbtn: {
    backgroundColor: "#d32f2f !important",
    color: "#d32f2f !important",
  },
}));
