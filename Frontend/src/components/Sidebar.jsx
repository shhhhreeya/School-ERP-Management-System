import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton
          component={Link}
          to="/admin/dashboard"
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/admin/students"
        >
          <ListItemText primary="Students" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/admin/attendance"
        >
          <ListItemText primary="Attendance" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/admin/exams"
        >
          <ListItemText primary="Examinations" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/admin/fees"
        >
          <ListItemText primary="Fees" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;