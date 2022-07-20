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
  },
  iconlabel: {
    paddingTop: "4%",
  },
  icon: {
    "&:hover": {
      color: "darkgrey",
    },
  },
}));
