import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import { useEffect, useState } from "react";

import { updateStudent } from "../services/studentService";

const EditStudentDialog = ({
  open,
  handleClose,
  student,
  refreshStudents,
}) => {
  const [formData, setFormData] =
    useState({});

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await updateStudent(
        student.id,
        formData
      );

      alert(
        "Student updated successfully"
      );

      refreshStudents();

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <DialogTitle>
        Edit Student
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          name="fullName"
          value={
            formData.fullName || ""
          }
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Roll Number"
          name="rollNumber"
          value={
            formData.rollNumber || ""
          }
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={
            formData.email || ""
          }
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Contact Number"
          name="contactNumber"
          value={
            formData.contactNumber ||
            ""
          }
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditStudentDialog;