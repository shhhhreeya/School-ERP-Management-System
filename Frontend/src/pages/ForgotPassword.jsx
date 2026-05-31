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

const ForgotPassword = () => {
  const navigate = useNavigate();
const [email, setEmail] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await API.post(
      "/auth/forgot-password",
      { email }
    );

    alert("OTP sent successfully!");

    navigate("/reset-password");
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
          "linear-gradient(to right, #43cea2, #185a9d)",
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
            Forgot Password
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Enter Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
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
              Send Reset Link
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgotPassword;