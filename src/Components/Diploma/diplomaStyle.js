import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  diplomacontainer: {
    paddingTop: "4%",
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingBottom: "2%",
    "@media (max-width:600px)": {
      paddingRight: "0%",
      paddingLeft: "3%",
    },
    minHeight: "95vh",
  },

  maintext: {
    fontSize: "0.92vw",
    lineHeight: 1.9,
    color: "#dfe4f2",
    "@media (max-width:600px)": {
      fontSize: "3.25vw",
    },
  },
}));
