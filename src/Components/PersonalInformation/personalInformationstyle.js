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
  personalInformation: {
    paddingTop: "5%",
    "@media (max-width:780px)": {
      paddingTop: "20%",
    },
  },
  typedContainer: {
    // backgroundColor: main_theme.palette.primary.main,
    width: "100vw",
    minHeight:"97vh",
    textAlign: "center",
    paddingBottom: "1%",
    paddingTop: "1%",
    zIndex: "10",
  },
  avatar: {
    marginBottom: "4%",
    margin: "auto",
  },
  particles: {
    height: "100vh",
  },
  timeBox: {
    border: "1px solid red",
    padding: "20px",
    width: "fit-content",
    borderRadius: "15px",
    textAlign: "center",
    margin: "auto",
    fontSize: "40px",
    // position: "absolute",
    left: "0",
    right: "0",
    backgroundColor: "salmon",
    "&:hover": {
      backgroundColor: "darkcyan",
      cursor: "not-allowed",
    },
  },
}));
