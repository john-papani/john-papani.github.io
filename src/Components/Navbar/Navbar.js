import React, { useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import {
  Typography,
  Button,
  Toolbar,
  Box,
  AppBar,
  Container,
  Chip,
  useScrollTrigger,
  FormControlLabel,
  Switch,
  Tooltip,
} from "@mui/material";
import { useStyles } from "./navbarstyle";
import LiveTime from "../Helpers/autoreloadTime";

// const pages = ["About", "Projects", "Contact"];
// const pages = ["Projects","CV and Information",  "Contact"];
//  const pages = ["Short Bio","CV and Information",  "Contact"];
const pages = ["MONO KOULIS 🤡"];

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 15 : 0,
    color: trigger ? "inherit" : "transparent",
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
  const handleCloseNavMenu = () => {
    // const koulis = () => {
    //   window.open("https://nd.gr", "_blank");
    // };
    // for (let i = 0; i < 10; i++) {
    //   koulis();
    // }
    // document.getElementById("about").scrollIntoView({behavior: "smooth",  block: "center", inline: "start"});
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
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              onClick={() => handleCloseNavMenu()}
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ioannis Papanikolaou
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  color="warning"
                  onChange={() => handleBusinessSwitch()}
                />
              }
              label="Bussiness"
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Tooltip title="DON'T PRESS !" arrow>
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu({ page })}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page}
                  </Button>
                </Tooltip>
              ))}
              <Chip
                label={<LiveTime />}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: "bold",
                  position: "absolute",
                  right: "0",
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
