import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  appbar: {
    color: "var(--color-light) !important",
    boxShadow: "none",
  },
  brandButton: {
    display: "inline-flex",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    color: "var(--color-light)",
    font: "inherit",
  },
  brandName: {
    color: "var(--color-light)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.9375rem",
    letterSpacing: "-0.02em",
    fontStyle: "normal",
  },
}));
