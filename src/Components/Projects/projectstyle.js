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
    paddingTop: "1%",
    // width: "80%",
    width: "100vw",
    // height: "100vh",
    padding: "0 10% 2% 10%",
    // paddingRight: "10%",
    // paddingLeft: "10%",
    // paddingBottom:"2%"
  },

  // cardimage: {
  //   width:"100vw",
  //   height:"min(max-content, max(min-content, stretch))"
  // },
  card: {
    variant: "outlined",
    elevation: "24",
    // maxHeight: "300px",

    "&:hover": {
      border: "1px solid red",
      background: "#c7c7c7",
    },
  },
  cardtext: {
    display: "none",
  },
  // cardbutton: {
  // position:"inhe"
  // },
}));
