import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">ICT Helpdesk System</h1>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-600">Welcome, {user.roleLabel}</span>
            <button
              onClick={logout}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Logout
            </button>
          </>
        ) : (
          <span className="text-gray-600">Welcome, Guest</span>
        )}
      </div>
    </div>
  );
}

export default Navbar;