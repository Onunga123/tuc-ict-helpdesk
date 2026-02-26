import DashboardLayout from "../../../components/layouts/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <p className="mt-4">Manage users, roles, departments, SLAs.</p>
    </DashboardLayout>
  );
}

export default AdminDashboard;