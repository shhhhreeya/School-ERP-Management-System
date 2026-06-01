const prisma = require("../config/prisma");

// MARK ATTENDANCE
const markAttendance = async (req, res) => {
  try {
    const {
      studentId,
      status,
      date,
    } = req.body;

    const attendance =
      await prisma.attendance.create({
        data: {
          studentId: Number(studentId),
          status,
          date: new Date(date),
        },
      });

    res.status(201).json({
      success: true,
      message:
        "Attendance marked successfully",
      data: attendance,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET ALL ATTENDANCE
const getAttendance =
  async (req, res) => {
    try {
      const attendance =
        await prisma.attendance.findMany({
          include: {
            student: true,
          },
        });

      res.status(200).json({
        success: true,
        data: attendance,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };

// GET STUDENT ATTENDANCE
const getStudentAttendance =
  async (req, res) => {
    try {
      const attendance =
        await prisma.attendance.findMany({
          where: {
            studentId: Number(
              req.params.id
            ),
          },
        });

      res.status(200).json({
        success: true,
        data: attendance,
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
  markAttendance,
  getAttendance,
  getStudentAttendance,
};