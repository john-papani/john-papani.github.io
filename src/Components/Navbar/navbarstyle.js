import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  appbar: {
    color: "var(--color-light)",
    boxShadow: "none",
  },
  brandButton: {
    display: "inline-flex",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    color: "inherit",
    font: "inherit",
  },
  brandName: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.9375rem",
    letterSpacing: "-0.02em",
    fontStyle: "normal",
  },
}));
