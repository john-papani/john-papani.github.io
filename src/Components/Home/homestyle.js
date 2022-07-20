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
  navbar: {
    backgroundColor: "inherit",
    width: "100%",
  },
  wholepage: {

    background: "#403B4A" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to bottom, #403b4a, #e7e9bb); " /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to bottom, #403b4a, #e7e9bb)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  footer: {
    textAlign: "center",
  },
}));
