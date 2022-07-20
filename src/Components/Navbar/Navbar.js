import React from "react";
import { useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  SwipeableDrawer,
  Box,
  Toolbar,
} from "@mui/material";

function Navbar() {
  let navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const listItems = () => (
    <Box
      sx={{ width: "200px" }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List aria-label="portofolio folders">
        <ListItem button onClick={() => navigate("/home")}>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button divider onClick={() => navigate("/resume")}>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button onClick={() => navigate("#")}>
          <ListItemText primary="Portofolio" />
        </ListItem>
        <Divider light />
        <ListItem button onClick={() => navigate("/home")}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setNavbarOpen(open);
  };
  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(true)} >
          <h1>Navbar</h1>
        </Button> */}
        <Toolbar >
          <FormatListBulletedIcon
            fontSize="large"
            onClick={toggleDrawer(true)}
          />
          <SwipeableDrawer
            anchor={"right"}
            open={navbarOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {listItems()}
          </SwipeableDrawer>
        </Toolbar>
      </React.Fragment>
    </div>
  );
}

export default Navbar;
