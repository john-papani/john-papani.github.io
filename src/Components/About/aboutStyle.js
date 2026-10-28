import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  aboutcontainer: {
    padding: "2.75rem 0 2.25rem",
    "@media (max-width: 768px)": {
      padding: "2.25rem 0 1.75rem",
    },
  },
  maintext: {
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    lineHeight: 1.75,
    color: "#c5cad8",
    "& b": {
      color: "#ffffff",
      fontWeight: 600,
    },
  },
  languageTools: {
    padding: "2.75rem 0 2rem",
  },
}));
