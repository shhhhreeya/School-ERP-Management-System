import {
  Box,
  Typography,
  Paper,
} from "@mui/material";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4">
          Welcome to School ERP Dashboard
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;