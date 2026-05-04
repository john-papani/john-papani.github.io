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
  hero: {
    paddingTop: "5%",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "min(36vw, 440px)",
      height: "min(36vw, 440px)",
      right: "8%",
      top: "16%",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255, 61, 85, 0.18), rgba(255, 61, 85, 0) 68%)",
      filter: "blur(4px)",
      zIndex: 0,
    },
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
    position: "relative",
    zIndex: "10",
  },
  avatar: {
    marginBottom: "4%",
    margin: "auto",
    border: "1px solid rgba(255, 255, 255, 0.22)",
    boxShadow:
      "0 0 0 12px rgba(255, 255, 255, 0.035), 0 32px 90px rgba(255, 61, 85, 0.2)",
    background:
      "linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
    transition: "transform 300ms ease, box-shadow 300ms ease",
    "&:hover": {
      transform: "translateY(-6px) scale(1.015)",
      boxShadow:
        "0 0 0 12px rgba(255, 61, 85, 0.07), 0 38px 110px rgba(255, 61, 85, 0.28)",
    },
  },
  particles: {
    height: "100vh",
  },
  timeBox: {
    border: "1px solid #ff3d55",
    padding: "20px",
    width: "fit-content",
    borderRadius: "15px",
    textAlign: "center",
    margin: "auto",
    fontSize: "40px",
    // position: "absolute",
    left: "0",
    right: "0",
    backgroundColor: "#ff6374",
    "&:hover": {
      backgroundColor: "darkcyan",
      cursor: "not-allowed",
    },
  },
}));
