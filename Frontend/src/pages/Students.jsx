import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { getStudents } from "../services/studentService";

const Students = () => {
  const [students, setStudents] =
    useState([]);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      console.log("API DATA:", res.data);

      setStudents(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <AdminLayout>
      <Typography
        variant="h4"
        mb={3}
      >
        Student Management
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
      >
        Add Student
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  {student.id}
                </TableCell>

                <TableCell>
                  {student.fullName}
                </TableCell>

                <TableCell>
                  {student.rollNumber}
                </TableCell>

                <TableCell>
                  {student.email}
                </TableCell>

                <TableCell>
                  {student.contactNumber}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default Students;