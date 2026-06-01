import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

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
    const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = () => {
  dispatch(logout());

  navigate("/");
};
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
    to="/admin/teachers"
  >
    <ListItemIcon sx={{ color: "white" }}>
      <PeopleIcon />
    </ListItemIcon>

    <ListItemText
      primary="Teachers"
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
  <Divider
  sx={{
    bgcolor: "rgba(255,255,255,0.2)",
    my: 2,
  }}
/>
  <ListItemButton
  onClick={handleLogout}
>
  <ListItemIcon sx={{ color: "white" }}>
    <LogoutIcon />
  </ListItemIcon>
      
  <ListItemText
    primary="Logout"
  />
</ListItemButton>

</List>
    </Drawer>
  );
};

export default Sidebar;