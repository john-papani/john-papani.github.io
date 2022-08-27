import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import SchoolIcon from '@mui/icons-material/School';
import courses from "../../myCourses_ece.json";
import { Container } from "@mui/system";

const Courses = () => {
  return (
    <Container>
      <Typography>My Courses</Typography>
      <List
        style={{
          height: "200px",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {courses.map((course) => (
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary={course.COURSE}
              secondary={course["CORE/FLOW"]}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Courses;
