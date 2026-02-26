import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) return; // prevent empty login

    const lowerEmail = email.toLowerCase(); // normalize email
    login(lowerEmail); // pass lowercase to AuthContext

    // Navigate based on role inferred from email
    if (lowerEmail.includes("admin")) navigate("/admin");
    else if (lowerEmail.includes("ict")) navigate("/ict");
    else if (lowerEmail.includes("staff")) navigate("/staff");
    else navigate("/student");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ICT Help Desk Login
        </h2>

        <input
          type="email"
          placeholder="Enter institutional email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;