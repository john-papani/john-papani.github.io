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
  shortbiocontainer: {
    paddingTop: "4%",
    // width: "80%",
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingBottom: "2%",
    "@media (max-width:600px)": {
      paddingRight: "0%",
      paddingLeft: "3%",
    },
    // width: "100vw",
    // height: "95vh",
    minHeight: "95vh",
  },

  maintext: {
    fontSize: "0.9vw",
    "@media (max-width:600px)": {
      fontSize: "3vw",
    },
  },
}));
