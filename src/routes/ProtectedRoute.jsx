import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  if (!allowedRoles.includes(user.role))
    return <Navigate to="/dashboard" />;

  return children;
}

export default ProtectedRoute;