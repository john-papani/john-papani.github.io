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
} from "@mui/material";
import { useStyles } from "./navbarstyle";
import LiveTime from "../Helpers/autoreloadTime";

const pages = ["About", "Projects", "Contact"];

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
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (id) => {
    console.log(id);
    // document.getElementById(id).scrollIntoView();
    setAnchorElNav(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.appbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu({ page })}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
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
