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

import AddStudentDialog from "../components/AddStudentDialog";

import { deleteStudent } from "../services/studentService";

import EditStudentDialog from "../components/EditStudentDialog";


const Students = () => {
    const [students, setStudents] =
    useState([]);
const [open, setOpen] = useState(false);
const [editOpen, setEditOpen] =
  useState(false);

const [selectedStudent,
setSelectedStudent] =
  useState(null);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      console.log("API DATA:", res.data);

      setStudents(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmDelete) return;

  try {
    await deleteStudent(id);

    alert("Student deleted successfully");

    fetchStudents();
  } catch (error) {
    console.log(error);
  }
};

    const handleEdit = (
  student
) => {
  setSelectedStudent(student);

  setEditOpen(true);
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
        onClick={() => setOpen(true)}
        >
        ADD STUDENT
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
            <TableCell>Actions</TableCell>
        </TableRow>
        </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.fullName}</TableCell>
            <TableCell>{student.rollNumber}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.contactNumber}</TableCell>

  <TableCell>
    <Button
  size="small"
  variant="contained"
  onClick={() =>
    handleEdit(student)
  }
>
  Edit
</Button>

    <Button
  size="small"
  color="error"
  variant="contained"
  sx={{ ml: 1 }}
  onClick={() =>
    handleDelete(student.id)
  }
>
  Delete
</Button>
  </TableCell>
</TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddStudentDialog
  open={open}
  handleClose={() =>
    setOpen(false)
  }
  refreshStudents={
    fetchStudents
  }
/>
<EditStudentDialog
  open={editOpen}
  handleClose={() =>
    setEditOpen(false)
  }
  student={selectedStudent}
  refreshStudents={
    fetchStudents
  }
/>
    </AdminLayout>
  );
};

export default Students;
