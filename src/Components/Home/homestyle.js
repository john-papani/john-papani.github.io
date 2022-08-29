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
    // background: "#403B4A" /* fallback for old browsers */,
    // background:
    //   "-webkit-linear-gradient(to bottom, #403b4a, #e7e9bb); " /* Chrome 10-25, Safari 5.1-6 */,
    // background:
    //   "linear-gradient(to bottom, #403b4a, #e7e9bb)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    background: "#bdc3c7",
    background:
      "-webkit-linear-gradient(to bottom, #2c3e50, #bdc3c7)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to bottom, #2c3e50, #bdc3c7)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  footer: {
    textAlign: "center",
    padding: "1%",
    "@media(max-width:780px)": {
      padding: "3%",
    },
  },
  ArrowTop: {
    position: "fixed !important",
    bottom: "20px",
    animation: "fadeIn 0.3s",
    opacity: "0.8",
    margin: "0",
    top: "auto",
    right: "0",
    marginRight: "10px !important",
    "&:hover": {
      opacity: "1",
      backgroundColor: "grey",
    },
  },
}));
