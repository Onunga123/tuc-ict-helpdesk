import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useAuth } from "../../contexts/AuthContext"; // get logged-in user

export default function DashboardLayout({ children }) {
  const { user } = useAuth(); // current logged-in user

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Body */}
        <main className="p-6 flex-1">
          {/* Render the page content */}
          {children}
        </main>
      </div>
    </div>
  );
}