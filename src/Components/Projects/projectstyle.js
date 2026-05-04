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
  cardheader: {
    color: "red",
    textAlign: "center",
  },
  container: {
    paddingTop: "5%",
    width: "100vw",
    // padding: "0 10% 2% 10%",
    // paddingLeft: "10%",
  },

  card: {
    variant: "outlined",

    "&:hover": {
      border: "1px solid #ff3d55",
      background: "rgba(255, 255, 255, 0.08)",
    },
  },
  cardtext: {
    display: "none",
  },
  // cardbutton: {
  // position:"inhe"
  // },
}));
