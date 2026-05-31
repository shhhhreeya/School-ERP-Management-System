import {
  Box,
  Toolbar,
} from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: "240px",
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </>
  );
};

export default AdminLayout;