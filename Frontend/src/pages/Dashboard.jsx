import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

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
      <Typography
        variant="h4"
        mb={4}
        fontWeight="bold"
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
              >
                Total Students
              </Typography>

              <Typography
                variant="h3"
                mt={2}
              >
                {studentCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
              >
                Total Teachers
              </Typography>

              <Typography
                variant="h3"
                mt={2}
              >
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
              >
                Attendance
              </Typography>

              <Typography
                variant="h3"
                mt={2}
              >
                0%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
              >
                Fee Collection
              </Typography>

              <Typography
                variant="h4"
                mt={2}
              >
                ₹0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default Dashboard;