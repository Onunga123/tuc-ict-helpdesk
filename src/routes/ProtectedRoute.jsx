import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  // If not logged in, redirect to login
  if (!user) return <Navigate to="/" />;

  // If role is not allowed, show Access Denied
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div className="p-6 text-center text-red-600 font-bold">
        Access Denied. You do not have permission to view this page.
      </div>
    );
  }

  // User is logged in and role is allowed
  return children;
}