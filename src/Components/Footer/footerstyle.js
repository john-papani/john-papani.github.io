import { makeStyles } from "@mui/styles";

import { createTheme } from "@mui/material/styles";
const main_theme = createTheme({
  palette: {
    primary: {
      light: "#5CDB95",
      main: "#379683",
      dark: "#05386B",
    },
    secondary: {
      light: "#fff",
      main: "#EDF5E1",
      dark: "#8EE4AF",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  boxfooter: {
    textAlign: "center",
    padding: "1%",
    "@media(max-width:780px)": {
      padding: "3%",
    },
  },
  cardquotes: {
    backgroundColor:"#EEEDE7 !important",
    padding: "2%",
    "@media (max-width:780px)": {
      padding: "4%",
      marginRight: "4%",
      marginLeft: "4% ",
    },
  },
}));
