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

import { useDispatch } from "react-redux";

import { loginSuccess } from "../redux/authSlice";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "/auth/login",
        formData
      );

      dispatch(
        loginSuccess({
          user: res.data.data,
          token: res.data.token,
        })
      );

      const role =
  res.data.data.role.toLowerCase();

if (role === "admin") {
  navigate("/admin/dashboard");
}

else if (role === "student") {
  navigate("/student/dashboard");
}

else if (role === "teacher") {
  navigate("/teacher/dashboard");
}

else {
  navigate("/");
}
    } catch (error) {
      alert(error.response.data.message);
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
            School ERP Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
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

            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 3,
              }}
            >
              Login
            </Button>
            <Typography
  textAlign="center"
  mt={2}
>
  Don't have an account?{" "}
  <Link to="/register">
    Register
  </Link>
</Typography>
            <Typography
  textAlign="center"
  mt={2}
>
  <Link
    to="/forgot-password"
    style={{
      textDecoration: "none",
      color: "#1976d2",
      fontWeight: "bold",
    }}
  >
    Forgot Password?
  </Link>
</Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};



export default Login;