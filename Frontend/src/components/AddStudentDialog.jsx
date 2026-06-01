import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import { useState } from "react";

import { createStudent } from "../services/studentService";

const AddStudentDialog = ({
  open,
  handleClose,
  refreshStudents,
}) => {
  const [formData, setFormData] =
    useState({
      fullName: "",
      rollNumber: "",
      gender: "",
      email: "",
      contactNumber: "",
      classId: 1,
      sectionId: 1,

      dob: "2006-01-01",
      address: "",
      parentDetails: "",
      bloodGroup: "",
      admissionDate: "2025-01-01",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await createStudent(formData);

      alert(
        "Student added successfully"
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
        Add Student
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          name="fullName"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Roll Number"
          name="rollNumber"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Gender"
          name="gender"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Contact Number"
          name="contactNumber"
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
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStudentDialog;