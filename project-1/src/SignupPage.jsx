import React from "react";
import { Link } from "react-router-dom";   // ✅ Import Link
import "./SignupPage.css";
import logo from "./assets/LOGO2.png";

const SignupPage = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <img src={logo} alt="SeaSBee Logo" className="logo" />  {/* ✅ use imported logo */}
        <h1>
          Access data and grow with <br /> SeaSBee APIs
        </h1>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">⏱</div>
            <span>Integrate in 15 minutes</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🗺</div>
            <span>Explore SeaSBee APIs</span>
          </div>
          <div className="feature">
            <div className="feature-icon">☏</div>
            <span>24 × 7 technical support</span>
          </div>
        </div>
      </div>

      {/* Signup Box */}
      <div className="signup-container">
        <img src={logo} alt="SeaSBee" />   {/* ✅ use imported logo */}

        <h2>Create your account</h2>

        <div className="form-group">
          <input type="text" placeholder="First name *" required />
          <input type="text" placeholder="Last name *" required />
        </div>

        <input type="text" placeholder="Company *" required />
        <input type="email" placeholder="Email *" required />
        <input type="password" placeholder="Password *" required />

        <div className="checkbox">
          <label>
            <input type="checkbox" required />
            I understand and agree to the{" "}
            <a href="#">terms of usage</a> and <a href="#">privacy policy</a>. I
            agree to receive email communication (can customize it later).
          </label>
        </div>

        <button>Register</button>

        <div className="signin">
          Have an account?{" "}
          <Link to="/login">Sign in</Link>   {/* ✅ This opens Login page */}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
