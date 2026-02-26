import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useAuth } from "../../contexts/AuthContext";

export default function Users() {
  const { user } = useAuth();

  if (!user || user.role !== "ADMIN") {
    return (
      <DashboardLayout>
        <p>Access denied. Admins only.</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold">User Management</h2>
      <p className="mt-2">Manage application users (placeholder).</p>
    </DashboardLayout>
  );
}
