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
    borderBottom:"1px solid white",
    color: "white",
  },
  toolbar: {
    backgroundColor: main_theme.palette.primary.main,
    position: "fixed",
  },
}));
