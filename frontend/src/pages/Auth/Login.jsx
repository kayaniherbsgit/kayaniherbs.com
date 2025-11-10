import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaApple,
  FaHeadphones,
} from "react-icons/fa";
import "./AuthStyles/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();        // prevents page reload
    navigate("/home");         // redirects to Home page
  };

  return (
    <div className="login-page">

      {/* Header */}
      <div className="login-header">
        <div className="icon-circle">
          <FaHeadphones className="header-icon" />
        </div>
        <h1>Welcome Back</h1>
        <p>Sign in to continue learning</p>
      </div>

      {/* Card */}
      <div className="login-card">
        <form className="login-form" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label>Email Address</label>
            <div className="input-wrap">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="you@example.com" required />
            </div>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <div className="input-wrap">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="eye-icon" />
                ) : (
                  <FaEye className="eye-icon" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="remember-row">
            <label className="remember-check">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button className="forgot-btn" type="button">
              Forgot?
            </button>
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>Or continue with</span>
        </div>

        {/* Social Login */}
        <div className="social-row">
          <button className="social-btn"><FaGoogle className="google" /></button>
          <button className="social-btn"><FaFacebook className="facebook" /></button>
          <button className="social-btn"><FaApple className="apple" /></button>
        </div>

<p className="signup-text">
  Don’t have an account? 
  <span onClick={() => navigate("/signup")} style={{cursor:"pointer"}}>
    Sign Up
  </span>
</p>

      </div>

      <p className="footer-note">
        Protected by reCAPTCHA and subject to the Privacy Policy
      </p>
    </div>
  );
};

export default Login;