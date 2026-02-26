import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useAuth } from "../../contexts/AuthContext";

function Tickets() {
  const { user } = useAuth();

  // Mock role-specific tickets
  const allTickets = [
    { id: 1, title: "Can't access portal", role: "STUDENT" },
    { id: 2, title: "Printer not working", role: "STAFF" },
    { id: 3, title: "Network outage", role: "ICT_OFFICER" },
  ];

  const visible = allTickets.filter((t) => t.role === user.role || user.role === "ADMIN");

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold">Tickets</h2>
      <ul className="mt-4 space-y-2">
        {visible.map((t) => (
          <li key={t.id} className="bg-white p-4 rounded shadow">
            #{t.id} - {t.title}
          </li>
        ))}
        {visible.length === 0 && <li>No tickets available for your role.</li>}
      </ul>
    </DashboardLayout>
  );
}

export default Tickets;