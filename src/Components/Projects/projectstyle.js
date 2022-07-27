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
    textAlign:"center"

  },
  container: {
    paddingTop: "1%",
    width: "80%",
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingBottom:"2%"

  },
  card: {
    variant:"outlined",
    elevation:"24",
    "&:hover":{
      border:"1px solid red",
      background:"#c7c7c7"
    }
  },
}));
