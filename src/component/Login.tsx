import { useState, FormEvent, useEffect } from "react";
import { login, getMe } from "../service/authService";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe();
        navigate("/netflix"); // Redirect to /netflix if authenticated
      } catch (error) {
        console.log("User not authenticated, showing login page");
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/netflix"); // Redirect after successful login
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
          Login
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
        </p>
      </form>
    </div>
  );
}