import React from 'react';
import { Link } from 'react-router-dom'; 
import './ForgotP.css';

const ForgotP = () => {
  return (
    <div className="forgot-container">
      <div className="card">
        {/* ✅ Back arrow links to login */}
        <Link to="/login" className="back-arrow">
          &#8592;
        </Link>

        <h2>Reset password</h2>
        <p>
          Enter your email and we’ll send a reset password link if the email is
          registered with us.
        </p>
        <input type="email" placeholder="Enter your registered email" />
        <button>Proceed</button>
      </div>
    </div>
  );
};

export default ForgotP;
