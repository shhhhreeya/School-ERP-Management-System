import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AdminLayout from "../layouts/AdminLayout";

const students = [
  {
    id: 1,
    rollNumber: "101",
    fullName: "Shreeya Jaiswal",
  },

  {
    id: 2,
    rollNumber: "102",
    fullName: "Aryan Gupta",
  },

  {
    id: 3,
    rollNumber: "103",
    fullName: "Priya Sharma",
  },
];

const ClassroomDetails = () => {
  return (
    <AdminLayout>
      <Typography
        variant="h4"
        mb={3}
      >
        Class 1 - A
      </Typography>

      <Typography mb={1}>
        Class Teacher:
        Priya Sharma
      </Typography>

      <Typography mb={3}>
        Subjects:
        Maths, Science, English
      </Typography>

      <TableContainer
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Roll No
              </TableCell>

              <TableCell>
                Student Name
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map(
              (student) => (
                <TableRow
                  key={student.id}
                >
                  <TableCell>
                    {
                      student.rollNumber
                    }
                  </TableCell>

                  <TableCell>
                    {
                      student.fullName
                    }
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default ClassroomDetails;