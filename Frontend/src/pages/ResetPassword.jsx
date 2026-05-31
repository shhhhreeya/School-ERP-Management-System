import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

import API from "../services/api";

import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
useState({
  email: "",
  otp: "",
  password: "",
});

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post(
      "/auth/reset-password",
      formData
    );

    alert(res.data.message);

    navigate("/");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
};

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #ff9966, #ff5e62)",
      }}
    >
      <Card
        sx={{
          width: 400,
          borderRadius: 4,
          boxShadow: 10,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            textAlign="center"
            mb={3}
            fontWeight="bold"
          >
            Reset Password
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
  label="Email"
  fullWidth
  margin="normal"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
/>

<TextField
  label="OTP"
  fullWidth
  margin="normal"
  value={formData.otp}
  onChange={(e) =>
    setFormData({
      ...formData,
      otp: e.target.value,
    })
  }
/>

<TextField
  label="New Password"
  type="password"
  fullWidth
  margin="normal"
  value={formData.password}
  onChange={(e) =>
    setFormData({
      ...formData,
      password: e.target.value,
    })
  }
/>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 3,
              }}
            >
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResetPassword;