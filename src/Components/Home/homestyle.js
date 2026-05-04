import { makeStyles } from "@mui/styles";
import noise from "./noise.gif";


export const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "inherit",
    width: "100%",
  },
  backgif: {
    backgroundImage: `url(${noise})`,
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.045,
    zIndex: -999,

    // background: "#403B4A" /* fallback for old browsers */,
    // background:
    //   "-webkit-linear-gradient(to bottom, #403b4a, #e7e9bb); " /* Chrome 10-25, Safari 5.1-6 */,
    // background:
    //   "linear-gradient(to bottom, #403b4a, #e7e9bb)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    // background: "#bdc3c7",
    // background:
    //   "-webkit-linear-gradient(to bottom, #2c3e50, #bdc3c7)" /* Chrome 10-25, Safari 5.1-6 */,
    // background:
    //   "linear-gradient(to bottom, #2c3e50, #bdc3c7)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  wholepage:{
    position: "relative",
  },

  ArrowTop: {
    position: "fixed !important",
    bottom: "20px",
    animation: "fadeIn 0.3s",
    opacity: "0.86",
    margin: "0",
    top: "auto",
    right: "18px",
    marginRight: "0 !important",
    boxShadow: "0 16px 42px rgba(255, 61, 85, 0.28) !important",
    "&:hover": {
      opacity: "1",
      backgroundColor: "#ff5f70 !important",
      transform: "translateY(-2px)",
    },
  },
}));
