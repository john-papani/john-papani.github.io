import React, { useState } from "react";
import faviconfornav from "../../img/2.png";
import {
  Button,
  Toolbar,
  Box,
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useStyles } from "./navbarstyle";
import { useTheme } from "../../basic_hooks/useTheme";

const pages = [
  { label: "Experience", id: "work-experience" },
  { label: "Research", id: "research" },
  { label: "Projects", id: "projects" },
  { label: "Volunteering", id: "volunteering" },
  { label: "Contact", id: "contact" },
];

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      zIndex: trigger ? 30 : 10,
      backgroundColor: trigger ? "var(--nav-background)" : "transparent",
      transition: "background-color 0.25s ease",
      borderBottom: trigger ? "1px solid var(--divider-color)" : "none",
    },
    position: "fixed",
  });
}

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id) => {
    handleCloseNavMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ElevationScroll>
      <AppBar className={classes.appbar} component="nav" aria-label="Main navigation">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
            <button
              type="button"
              onClick={scrollToTop}
              className={classes.brandButton}
              aria-label="Back to top"
            >
              <img
                src={faviconfornav}
                alt=""
                className="w-8 h-8 mr-2 rounded-full"
              />
              <span className={classes.brandName}>Ioannis Papanikolaou</span>
            </button>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => scrollToSection(page.id)}
                  sx={{
                    color: "var(--color-muted)",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    "&:hover": { color: "var(--color-light)" },
                  }}
                >
                  {page.label}
                </Button>
              ))}
              
            <IconButton
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              sx={{ color: "var(--color-light)", mr: 0.5 }}
            >
              {theme === "dark" ? (
                <LightModeOutlinedIcon fontSize="small" />
              ) : (
                <DarkModeOutlinedIcon fontSize="small" />
              )}
            </IconButton>
            </Box>

            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ display: { xs: "flex", md: "none" }, color: "var(--color-light)" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "var(--color-dark-soft)",
                  border: "1px solid var(--surface-border)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => scrollToSection(page.id)}
                  sx={{ color: "var(--color-light)", fontSize: "0.9375rem" }}
                >
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
