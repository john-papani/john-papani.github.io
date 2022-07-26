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
  container: {
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "2%",
    paddingBottom: "2%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-evenly",
  },
  iconlabel: {
    paddingTop: "4%",
  },
  icon: {
    "&:hover": {
      color: "darkgrey",
    },
  },
  googleMapIframe: {
    "@media (min-width:780px)": {
      width: "500px",
      height: "350px",
    },
  },
}));
