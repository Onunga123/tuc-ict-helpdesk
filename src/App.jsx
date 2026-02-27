import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

// Dashboards
import AdminDashboard from "./features/dashboard/Admin/AdminDashboard";
import ICTDashboard from "./features/dashboard/ICTOfficer/ICTDashboard";
import StaffDashboard from "./features/dashboard/Staff/StaffDashboard";
import StudentDashboard from "./features/dashboard/Student/StudentDashboard";

// Pages
import Tickets from "./pages/Tickets/Tickets";
import KnowledgeBase from "./pages/KnowledgeBase/KnowledgeBase";
import Users from "./pages/Admin/Users";

// Role mapping for dashboards
const roleDashboards = {
  ADMIN: AdminDashboard,
  ICT_OFFICER: ICTDashboard,
  STAFF: StaffDashboard,
  STUDENT: StudentDashboard,
};

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Admin routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/tickets"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/knowledge"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <KnowledgeBase />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Users />
          </ProtectedRoute>
        }
      />

      {/* ICT Officer routes */}
      <Route
        path="/ict"
        element={
          <ProtectedRoute allowedRoles={["ICT_OFFICER", "ADMIN"]}>
            <ICTDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ict/tickets"
        element={
          <ProtectedRoute allowedRoles={["ICT_OFFICER", "ADMIN"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ict/knowledge"
        element={
          <ProtectedRoute allowedRoles={["ICT_OFFICER", "ADMIN"]}>
            <KnowledgeBase />
          </ProtectedRoute>
        }
      />

      {/* Staff routes */}
      <Route
        path="/staff"
        element={
          <ProtectedRoute allowedRoles={["STAFF", "ADMIN"]}>
            <StaffDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff/tickets"
        element={
          <ProtectedRoute allowedRoles={["STAFF", "ADMIN"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff/knowledge"
        element={
          <ProtectedRoute allowedRoles={["STAFF", "ADMIN"]}>
            <KnowledgeBase />
          </ProtectedRoute>
        }
      />

      {/* Student routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["STUDENT", "ADMIN"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/tickets"
        element={
          <ProtectedRoute allowedRoles={["STUDENT", "ADMIN"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/knowledge"
        element={
          <ProtectedRoute allowedRoles={["STUDENT", "ADMIN"]}>
            <KnowledgeBase />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;