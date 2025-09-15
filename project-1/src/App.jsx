import { Routes, Route, Link, useLocation } from "react-router-dom";
import logo from "./assets/LOGO.png";
import "./App.css";

// import your pages
import SignupPage from "./SignupPage";
import Login from "./Login"; 

function App() {
  const location = useLocation();

  // Show navbar only on home page
  const showNavbar = location.pathname === "/";

  return (
    <div className="app">
      {/* Top Navbar - only on home */}
      {showNavbar && (
        <header className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span>SeaSBee</span>
          </div>

          <div className="cta">
            <Link to="/signup">
              <button>Sign up for Free</button>
            </Link>
            <Link to="/login">
              <button>Account</button>
            </Link>
          </div>
        </header>
      )}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome to SeaSBee</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
