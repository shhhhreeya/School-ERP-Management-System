const prisma = require("../config/prisma");

// GET ALL TEACHERS
const getTeachers = async (req, res) => {
  try {
    const teachers =
      await prisma.teacher.findMany();

    res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// CREATE TEACHER
const createTeacher = async (
  req,
  res
) => {
  try {
    const {
      fullName,
      email,
      phone,
    } = req.body;

    const teacher =
      await prisma.teacher.create({
        data: {
          fullName,
          email,
          phone,
        },
      });

    res.status(201).json({
      success: true,
      data: teacher,
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
  getTeachers,
  createTeacher,
};