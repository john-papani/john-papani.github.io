import zIndex from "@mui/material/styles/zIndex";
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
  typedContainer: {
    // backgroundColor: main_theme.palette.primary.main,
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    paddingBottom: "1%",
    paddingTop:"1%",
    zIndex:"10"
  },
  avatar: {
    marginBottom:"8%",
    margin: "auto",
  },
  particles:{
    height:"100vh"
  }
}));
