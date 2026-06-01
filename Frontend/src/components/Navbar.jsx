import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(135deg,#1e3c72,#2a5298)",
        boxShadow: 3,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          School ERP
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography
          sx={{ mr: 2 }}
        >
          Admin
        </Typography>

        <Avatar>
          A
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;