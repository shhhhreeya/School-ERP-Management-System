import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";

import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { getStudents } from "../services/studentService";

const Dashboard = () => {
  const [studentCount, setStudentCount] =
    useState(0);

  const fetchDashboardData =
    async () => {
      try {
        const res =
          await getStudents();

        setStudentCount(
          res.data.data.length
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
  <AdminLayout>

    <Card
      sx={{
        mb: 4,
        borderRadius: 4,
        background:
          "linear-gradient(135deg,#1e3c72,#2a5298)",
        color: "white",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          Welcome Back, Admin 👋
        </Typography>

        <Typography>
          School ERP Management System
        </Typography>
      </CardContent>
    </Card>

    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Card
          sx={{
            borderRadius: 4,
            background:
              "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white",
          }}
        >
          <CardContent>
            <PeopleIcon fontSize="large" />

            <Typography variant="h6">
              Students
            </Typography>

            <Typography variant="h3">
              {studentCount}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card
          sx={{
            borderRadius: 4,
            background:
              "linear-gradient(135deg,#11998e,#38ef7d)",
            color: "white",
          }}
        >
          <CardContent>
            <SchoolIcon fontSize="large" />

            <Typography variant="h6">
              Teachers
            </Typography>

            <Typography variant="h3">
              8
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card
          sx={{
            borderRadius: 4,
            background:
              "linear-gradient(135deg,#f7971e,#ffd200)",
            color: "white",
          }}
        >
          <CardContent>
            <EventAvailableIcon fontSize="large" />

            <Typography variant="h6">
              Attendance
            </Typography>

            <Typography variant="h3">
              92%
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card
          sx={{
            borderRadius: 4,
            background:
              "linear-gradient(135deg,#fc4a1a,#f7b733)",
            color: "white",
          }}
        >
          <CardContent>
            <PaymentsIcon fontSize="large" />

            <Typography variant="h6">
              Fee Collection
            </Typography>

            <Typography variant="h3">
              ₹50K
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  </AdminLayout>
);
};

export default Dashboard;