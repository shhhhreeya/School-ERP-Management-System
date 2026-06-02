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
  const [loading, setLoading] = useState(false);

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
    // Validation
    if (!formData.fullName?.trim()) {
      alert("Full Name is required");
      return;
    }
    if (!formData.rollNumber?.trim()) {
      alert("Roll Number is required");
      return;
    }
    if (!formData.email?.trim()) {
      alert("Email is required");
      return;
    }
    if (!formData.contactNumber?.trim()) {
      alert("Contact Number is required");
      return;
    }

    setLoading(true);
    try {
      const updateData = {
  fullName: formData.fullName,
  rollNumber: formData.rollNumber,
  email: formData.email,
  contactNumber: formData.contactNumber,
};

await updateStudent(
  student.id,
  updateData
);

      alert(
        "Student updated successfully"
      );

      refreshStudents();

      handleClose();
    } catch (error) {
  console.log(error);
  console.log(error.response);

  alert(
    JSON.stringify(error.response?.data)
  );
} finally {
      setLoading(false);
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
        <Button 
          onClick={handleClose}
          disabled={loading}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditStudentDialog;