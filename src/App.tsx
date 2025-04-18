import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Netflix from "./component/netflix";
import Player from "./component/Palyer"; // Fixed typo: Palyer -> Player
import Befor from "./component/Befor";
import bg from "./assets/login.jpg";
import { getMe } from "./service/authService";
import logo from "./assets/logo.webp";
import ProtectedRoute from "./component/ProtectedRoute";
import Register from "./component/Register";
import Login from "./component/Login";

function App() {
  const [showNav, setShowNav] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe();
        setShowNav(false); // Hide nav if authenticated
      } catch (error) {
        setShowNav(true); // Show nav if not authenticated
      }
    };
    checkAuth();
  }, []);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <Router>
      {showNav && (
        <div
          className="h-screen flex flex-col bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="bg-black h-screen bg-opacity-65">
            <img src={logo} className="h-[100px] px-11" alt="Logo" />
            <div className="flex flex-col items-center justify-center">
              <nav className="mt-[100px] flex items-center flex-col gap-6">
                <p className="text-white text-6xl font-bold">Unlimited movies, TV</p>
                <p className="text-white text-6xl font-bold -mt-6">shows and more</p>
                <ul>
                  <li className="text-black mx-20 bg-red-600 px-4 hover:bg-black hover:text-white hover:border-red-600 border-2">
                    <Link to="/login" onClick={toggleNav}>
                      SignUp/Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/player"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
        <Route
          path="/before"
          element={
            <ProtectedRoute>
              <Befor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/netflix"
          element={
            <ProtectedRoute>
              <Netflix />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} /> {/* Redirect to login for root */}
      </Routes>
    </Router>
  );
}

export default App;