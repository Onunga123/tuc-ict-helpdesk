import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { user } = useAuth();

  // Define links per role
  const links = [];

  if (!user) return null; // in case no user is logged in

  switch (user.role) {
    case "ADMIN":
      links.push(
        { name: "Dashboard", path: "/admin" },
        { name: "Tickets", path: "/admin/tickets" },
        { name: "Knowledge Base", path: "/admin/knowledge" },
        { name: "User Management", path: "/admin/users" }
      );
      break;

    case "ICT_OFFICER":
      links.push(
        { name: "Dashboard", path: "/ict" },
        { name: "Tickets", path: "/ict/tickets" },
        { name: "Knowledge Base", path: "/ict/knowledge" }
      );
      break;

    case "STAFF":
      links.push(
        { name: "Dashboard", path: "/staff" },
        { name: "Tickets", path: "/staff/tickets" },
        { name: "Knowledge Base", path: "/staff/knowledge" }
      );
      break;

    case "STUDENT":
      links.push(
        { name: "Dashboard", path: "/student" },
        { name: "Tickets", path: "/student/tickets" },
        { name: "Knowledge Base", path: "/student/knowledge" }
      );
      break;

    default:
      break;
  }

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <h1 className="text-xl font-bold mb-6">TUC ICT</h1>

      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}