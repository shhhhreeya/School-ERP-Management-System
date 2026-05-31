import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          School ERP Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;