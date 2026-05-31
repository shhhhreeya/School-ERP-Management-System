import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/register",
        formData
      );

      alert(res.data.message);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration failed"
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
          "linear-gradient(to right, #667eea, #764ba2)",
      }}
    >
      <Card
        sx={{
          width: 450,
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
            Create Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              margin="normal"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="student">
                Student
              </MenuItem>

              <MenuItem value="teacher">
                Teacher
              </MenuItem>

              <MenuItem value="parent">
                Parent
              </MenuItem>

              <MenuItem value="accountant">
                Accountant
              </MenuItem>

              <MenuItem value="admin">
                Admin
              </MenuItem>
            </TextField>

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
              Register
            </Button>
          </form>

          <Typography
            textAlign="center"
            mt={3}
          >
            Already have an account?{" "}
            <Link to="/">
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;