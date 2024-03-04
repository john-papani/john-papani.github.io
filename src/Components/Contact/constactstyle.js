import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  contact:{
    width: "100vw",
    // height: "100vh",
    // minHeight:"50vh",
    // textAlign: "center",
    // paddingBottom: "1%",
    // paddingTop: "1%",
  },
  
  container: {
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "2%",
    paddingBottom: "2%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-evenly",
  },
  iconlabel: {
    paddingTop: "4%",
  },
  icon: {
    "&:hover": {
      color: "darkgrey",
    },
  },
  googleMapIframe: {
    "@media (min-width:780px)": {
      width: "500px",
      height: "350px",
    },
  },
}));
