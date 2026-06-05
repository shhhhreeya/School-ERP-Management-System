import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

import ForgotPassword from "./pages/ForgotPassword";

import ResetPassword from "./pages/ResetPassword";

import Register from "./pages/Register";

import Students from "./pages/Students";

import Attendance from "./pages/Attendance";

import StudentDashboard from "./pages/StudentDashboard";

import Classrooms from "./pages/Classrooms";

import ClassroomDetails from "./pages/ClassroomDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/admin/students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />
        <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />
        <Route
  path="/admin/attendance"
  element={
    <ProtectedRoute>
      <Attendance />
    </ProtectedRoute>
  }
/>
<Route
  path="/student/dashboard"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/classrooms"
  element={<Classrooms />}
/>

<Route
  path="/admin/classroom/:classId/:sectionId"
  element={<ClassroomDetails />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;