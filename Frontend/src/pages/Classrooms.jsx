import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import AdminLayout from "../layouts/AdminLayout";
import { useNavigate } from "react-router-dom";

const classrooms = [
  {
    id: 1,

    classId: 1,
    sectionId: 1,

    className: "Class 1",
    section: "A",

    students: 32,
    teacher: "Priya Sharma",
  },

  {
    id: 2,

    classId: 1,
    sectionId: 2,

    className: "Class 1",
    section: "B",

    students: 28,
    teacher: "Rahul Verma",
  },

  {
    id: 3,

    classId: 2,
    sectionId: 1,

    className: "Class 2",
    section: "A",

    students: 35,
    teacher: "Anjali Gupta",
  },
];

const Classrooms = () => {
    const navigate = useNavigate();
  return (
    <AdminLayout>
      <Typography
        variant="h4"
        mb={4}
        fontWeight="bold"
      >
        Classrooms
      </Typography>

      <Grid container spacing={5}>
        {classrooms.map((room) => (
          <Grid
            item
            xs={12}
            md={4}
            key={room.id}
          >
            <Card
  onClick={() =>
    navigate(
  `/admin/classroom/${room.classId}/${room.sectionId}`
)
  }
              sx={{
                borderRadius: 4,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform:
                    "translateY(-5px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                >
                  {room.className} -{" "}
                  {room.section}
                </Typography>

                <Typography mt={2}>
                  Students:{" "}
                  {room.students}
                </Typography>

                <Typography>
                  Class Teacher:
                </Typography>

                <Typography
                  color="primary"
                >
                  {room.teacher}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AdminLayout>
  );
};

export default Classrooms;