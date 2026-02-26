import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useAuth } from "../../contexts/AuthContext";

function KnowledgeBase() {
  const { user } = useAuth();

  const articles = [
    { id: 1, title: "Student: How to reset password", role: "STUDENT" },
    { id: 2, title: "Staff: Connecting to printer", role: "STAFF" },
    { id: 3, title: "ICT: Troubleshooting network", role: "ICT_OFFICER" },
  ];

  const visible = articles.filter((a) => a.role === user.role || user.role === "ADMIN");

  return (
    <DashboardLayout>
  <ul className="mt-4 space-y-2">
        {visible.map((a) => (
          <li key={a.id} className="bg-white p-4 rounded shadow">
            {a.title}
          </li>
        ))}
        {visible.length === 0 && <li>No articles available for your role.</li>}
      </ul>
    </DashboardLayout>
  );
}

export default KnowledgeBase;