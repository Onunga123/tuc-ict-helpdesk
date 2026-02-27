import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the Auth context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Login function
  const login = (email) => {
    if (!email) return;

    // Normalize email
    const cleaned = email.replace(/^mailto:/i, "").trim().toLowerCase();

    if (!cleaned.endsWith("@tuc.ac.ke")) {
      alert("Please use your institutional email (@tuc.ac.ke)");
      return;
    }

    // Determine role
    let role = "STUDENT";
    let roleLabel = "Student";

    if (cleaned.includes("admin")) {
      role = "ADMIN";
      roleLabel = "Admin";
    } else if (cleaned.includes("ict")) {
      role = "ICT_OFFICER";
      roleLabel = "ICT Officer";
    } else if (cleaned.includes("staff")) {
      role = "STAFF";
      roleLabel = "Staff";
    }

    // Set user
    const newUser = { email: cleaned, role, roleLabel, name: "" };
    setUser(newUser);

    // Navigate based on role
    switch (role) {
      case "ADMIN":
        navigate("/admin");
        break;
      case "ICT_OFFICER":
        navigate("/ict");
        break;
      case "STAFF":
        navigate("/staff");
        break;
      default:
        navigate("/student");
        break;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  // Update user (for profile management)
  const updateUser = (updated) => {
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export const useAuth = () => useContext(AuthContext);