import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe } from "../service/authService";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe();
        setLoading(false);
      } catch (error) {
        console.error("Authentication failed:", error);
        setLoading(false);
        // Redirect to login page
        navigate("/", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  // No need for the 'ok' state since we're redirecting on failure
  return children;
}