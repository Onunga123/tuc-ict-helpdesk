import { createContext, useContext, useState } from "react";

// Create the Auth context
const AuthContext = createContext();

// Provider component to wrap the app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Login function with mock role assignment based on email
  const login = (email) => {
    if (!email) return;

    // normalize and sanitize email (remove mailto: if user pasted a link)
    const cleaned = email.replace(/^mailto:/i, "").trim().toLowerCase();

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

    setUser({ email: cleaned, role, roleLabel });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Provide user, login, and logout to children
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access Auth context easily
export const useAuth = () => useContext(AuthContext);