import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

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
  background:
    "#0f172a",
  color: "white",
},
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
  <Typography
    variant="h6"
    fontWeight="bold"
  >
    Admin Panel
  </Typography>
</Box>

<List>

  <ListItemButton
    component={Link}
    to="/admin/dashboard"
  >
    <ListItemIcon sx={{ color: "white" }}>
      <DashboardIcon />
    </ListItemIcon>

    <ListItemText
      primary="Dashboard"
    />
  </ListItemButton>

  <ListItemButton
    component={Link}
    to="/admin/students"
  >
    <ListItemIcon sx={{ color: "white" }}>
      <PeopleIcon />
    </ListItemIcon>

    <ListItemText
      primary="Students"
    />
  </ListItemButton>

  <ListItemButton
    component={Link}
    to="/admin/attendance"
  >
    <ListItemIcon sx={{ color: "white" }}>
      <EventAvailableIcon />
    </ListItemIcon>

    <ListItemText
      primary="Attendance"
    />
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon sx={{ color: "white" }}>
      <PaymentsIcon />
    </ListItemIcon>

    <ListItemText
      primary="Fees"
    />
  </ListItemButton>

</List>
    </Drawer>
  );
};

export default Sidebar;