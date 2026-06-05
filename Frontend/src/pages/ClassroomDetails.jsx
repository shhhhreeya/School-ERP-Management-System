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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";


const ClassroomDetails = () => {
    const {
  classId,
  sectionId,
} = useParams();

const [students, setStudents] =
  useState([]);
  const fetchStudents =
  async () => {
    try {
      const res =
        await getStudents();

      const filteredStudents =
  res.data.data.filter(
    (student) =>
      student.classId ===
        Number(classId) &&
      student.sectionId ===
        Number(sectionId)
  );

      setStudents(
        filteredStudents
      );
    } catch (error) {
      console.log(error);
    }
  };
   useEffect(() => {
  fetchStudents();
}, [classId, sectionId]);
  return (
    <AdminLayout>
      <Typography
  variant="h4"
  mb={3}
>
  Class {classId} - Section {sectionId}
</Typography>
        <Typography
  mb={2}
  color="text.secondary"
>
  Total Students:
  {" "}
  {students.length}
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