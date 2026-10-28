import { makeStyles } from "@mui/styles";
import noise from "./noise.gif";

export const useStyles = makeStyles(() => ({
  wholepage: {
    position: "relative",
  },
  backgif: {
    backgroundImage: `url(${noise})`,
    width: "100vw",
    height: "100vh",
    position: "fixed",
    inset: 0,
    opacity: 0.045,
    pointerEvents: "none",
    zIndex: -2,
  },
  ArrowTop: {
    position: "fixed !important",
    bottom: "20px",
    right: "18px",
    top: "auto !important",
    margin: "0 !important",
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
    },
  },
}));
