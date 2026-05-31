const prisma = require("../config/prisma");

// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        class: true,
        section: true,
      },
    });

    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET STUDENT BY ID
const getStudentById = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: Number(req.params.id),
      },

      include: {
        class: true,
        section: true,
      },
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// CREATE STUDENT
const createStudent = async (req, res) => {
  try {
    const {
      fullName,
      rollNumber,
      dob,
      gender,
      address,
      parentDetails,
      contactNumber,
      email,
      bloodGroup,
      admissionDate,
      classId,
      sectionId,
    } = req.body;

    const student = await prisma.student.create({
      data: {
        fullName,
        rollNumber,
        dob: new Date(dob),
        gender,
        address,
        parentDetails,
        contactNumber,
        email,
        bloodGroup,
        admissionDate: new Date(admissionDate),
        classId: Number(classId),
        sectionId: Number(sectionId),
      },
    });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const student = await prisma.student.update({
      where: {
        id: Number(req.params.id),
      },

      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    await prisma.student.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};