import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Auth/Login";

import AdminDashboard from "./features/dashboard/Admin/AdminDashboard";
import ICTDashboard from "./features/dashboard/ICTOfficer/ICTDashboard";
import StaffDashboard from "./features/dashboard/Staff/StaffDashboard";
import StudentDashboard from "./features/dashboard/Student/StudentDashboard";
import Tickets from "./pages/Tickets/Tickets";
import KnowledgeBase from "./pages/KnowledgeBase/KnowledgeBase";
import Users from "./pages/Admin/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ict"
        element={
          <ProtectedRoute allowedRoles={["ICT_OFFICER"]}>
            <ICTDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ict/tickets"
        element={
          <ProtectedRoute allowedRoles={["ICT_OFFICER"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ict/knowledge"
        element={
          <ProtectedRoute allowedRoles={["ICT_OFFICER"]}>
            <KnowledgeBase />
          </ProtectedRoute>
        }
      />

      <Route
        path="/staff"
        element={
          <ProtectedRoute allowedRoles={["STAFF"]}>
            <StaffDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/staff/tickets"
        element={
          <ProtectedRoute allowedRoles={["STAFF"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/staff/knowledge"
        element={
          <ProtectedRoute allowedRoles={["STAFF"]}>
            <KnowledgeBase />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["STUDENT"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/tickets"
        element={
          <ProtectedRoute allowedRoles={["STUDENT"]}>
            <Tickets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/knowledge"
        element={
          <ProtectedRoute allowedRoles={["STUDENT"]}>
            <KnowledgeBase />
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
    </Routes>
  );
}

export default App;