import {
  Button,
  MenuItem,
  Paper,
  Select,
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

import {
  markAttendance,
} from "../services/attendanceService";

const Attendance = () => {
  const [students, setStudents] = useState([]);

  const [attendanceData, setAttendanceData] =
  useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSaveAttendance =
  async () => {
    try {
      for (const student of students) {
        await markAttendance({
          studentId:
            student.id,

          status:
            attendanceData[
              student.id
            ] || "PRESENT",

          date:
            new Date(),
        });
      }

      alert(
        "Attendance saved successfully"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <Typography variant="h4" mb={3}>
        Attendance Management
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  {student.fullName}
                </TableCell>

                <TableCell>
                  {student.rollNumber}
                </TableCell>

                <TableCell>
  <Select
    size="small"
    value={
      attendanceData[
        student.id
      ] || "PRESENT"
    }
    onChange={(e) =>
      setAttendanceData({
        ...attendanceData,
        [student.id]:
          e.target.value,
      })
    }
  >
    <MenuItem value="PRESENT">
      Present
    </MenuItem>

    <MenuItem value="ABSENT">
      Absent
    </MenuItem>

    <MenuItem value="LATE">
      Late
    </MenuItem>
  </Select>
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleSaveAttendance}
        >
  Save Attendance
</Button>
      </TableContainer>
    </AdminLayout>
  );
};

export default Attendance;