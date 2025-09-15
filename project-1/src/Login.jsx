import React from "react";
import "./Login.css";
import logo from "./assets/LOGO2.png";

const Login = () => {
  return (
    <div className="container">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Seasbee Logo" height="40" />
      </div>

      {/* Card */}
      <div className="card">
        <h2>Sign in to your account</h2>
        <form>
          <input type="email" placeholder="Enter your registered email" required />
          <input type="password" placeholder="Enter your password" required />
          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Sign in</button>
        </form>

        <div className="register">
          Don’t have an account? <a href="#">Register</a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <a href="#">Pricing</a> | 
        <a href="#">Developer Docs</a> | 
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};

export default Login;
