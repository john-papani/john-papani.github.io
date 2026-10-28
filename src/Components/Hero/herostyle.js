import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  hero: {
    paddingTop: "5rem",
    paddingBottom: "2rem",
    position: "relative",
    "@media (max-width: 900px)": {
      paddingTop: "4.5rem",
    },
  },
  typedContainer: {
    width: "min(92vw, 1100px)",
    margin: "0 auto",
    minHeight: "min(72vh, 600px)",
    alignItems: "center",
  },
  avatarCol: {
    display: "flex",
    justifyContent: "center",
  },
  textCol: {
    textAlign: "left",
    "@media (max-width: 900px)": {
      textAlign: "center",
    },
  },
  avatar: {
    margin: "0 auto",
    border: "1px solid var(--surface-border)",
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.35)",
  },
  eyebrow: {
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
    marginBottom: "0.75rem",
  },
  heading: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.15,
    color: "var(--color-light)",
    margin: "0 0 0.5rem",
  },
  subheading: {
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    fontWeight: 500,
    color: "var(--color-muted)",
    margin: "0 0 1.25rem",
  },
  summary: {
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "var(--color-muted)",
    maxWidth: "36rem",
    margin: "0 0 1.25rem",
    "@media (max-width: 900px)": {
      margin: "0 auto 1.25rem",
    },
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginBottom: "1.1rem",
    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },
  socialRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.25rem",
    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "var(--color-muted)",
    textDecoration: "none",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "var(--color-light)",
    },
  },
}));
