import React, { useState } from "react";
import BackHandIcon from "@mui/icons-material/BackHand";
import {
  Typography,
  Button,
  Toolbar,
  Box,
  AppBar,
  Container,
  Chip,
  useScrollTrigger,
} from "@mui/material";
import { useStyles } from "./navbarstyle";
import LiveTime from "../Helpers/autoreloadTime";

// const pages = ["About", "Projects", "Contact"];
// const pages = ["Projects","CV and Information",  "Contact"];
//  const pages = ["Short Bio","CV and Information",  "Contact"];
// const pages = ["MONO KOULIS 🤡"];
const pages = ["about", "diploma","work experience", "volunteering","projects"];

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 15 : 0,
    style: {
      zIndex: trigger ? 30 : 0, // Adjust the value based on your needs
      backgroundColor: trigger ? "transparent" : "transparent",
      transition: "background-color 0.3s ease-out", // Add a transition for a smooth effect
      backdropFilter: trigger ? "blur(500px)" : "none",
    },
    // color: trigger ? "inherit" : "transparent",
    position: trigger ? "fixed" : "absolute",
  });
}

const Navbar = (props) => {
  const {
    // openAlert,
    // setOpenAlert,
    // setMessageAlert,
    // setSeverityAlert,
    setBusinessProfile,
  } = props;
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (page) => {
    // const koulis = () => {
    //   window.open("https://nd.gr", "_blank");
    // };
    // for (let i = 0; i < 10; i++) {
    //   koulis();
    // }
    document
      .getElementById(page.page)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };
  const handleBusinessSwitch = () => {
    // setSeverityAlert(openAlert ? "success" : "error");
    // setMessageAlert(
    //   openAlert
    //     ? "Show Projects and Business Components"
    //     : "Hide Projects and Businnes Components"
    // );
    // setOpenAlert(true);
    setBusinessProfile((profile) => !profile);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.appbar}>
        <Container maxWidth="xl" sx={{ alignItems: "center" }}>
          <Toolbar disableGutters>
            {/* <BackHandIcon sx={{ mr: 1 }} /> */}
            <p className="text-2xl lg:mr-4 mr-6 px-[4px] py-[1px] text-[#eb0028]  border  rounded-full bg-black font-black tracking-tighter">
              IP
            </p>

            <p
              className="mr-10 font-[agustina] font-bold tracking-wider cursor-pointer italic text-xl no-underline"
              onClick={() => handleCloseNavMenu()}
            >
              Ioannis Papanikolaou
            </p>

            {/* <FormControlLabel
              sx={{
                background: "#d9d9d9",
                borderRadius: "12px",
                paddingRight: "5px",
              }}
              control={
                <Switch
                  defaultChecked
                  color="warning"
                  onChange={() => handleBusinessSwitch()}
                />
              }
              label="Bussiness"
            /> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu({ page })}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                  }}
                  className="hover:text-[#eb0028] font-bold"
                >
                  {page}
                </Button>
              ))}
              <Chip
                label={<LiveTime />}
                sx={{
                  color: "inherit",
                  fontWeight: "bold",
                  position: "absolute",
                  right: "0px",
                  top: "30%",
                }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
