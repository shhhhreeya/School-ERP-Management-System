const prisma = require("../config/prisma");

// GET SUBJECTS
const getSubjects = async (
  req,
  res
) => {
  try {
    const subjects =
      await prisma.subject.findMany();

    res.status(200).json({
      success: true,
      data: subjects,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// CREATE SUBJECT
const createSubject =
  async (req, res) => {
    try {
      const { name } =
        req.body;

      const subject =
        await prisma.subject.create({
          data: {
            name,
          },
        });

      res.status(201).json({
        success: true,
        data: subject,
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
  getSubjects,
  createSubject,
};