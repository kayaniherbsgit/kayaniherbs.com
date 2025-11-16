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
import { loginUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";  // ⭐ NEW
import "./AuthStyles/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorPopup, setErrorPopup] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();   // ⭐ AUTH CONTEXT FUNCTION

  // 🔔 Error modal logic
  const showError = (msg) => {
    setErrorPopup(msg || "Incorrect email or password");
    setTimeout(() => setErrorPopup(""), 3000);
  };

  // 🔐 Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      showError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      const res = await loginUser({ email, password });

      if (res?.data?.success && res?.data?.token) {
        // ⭐ Use context login to trigger re-render
        login(res.data.token, res.data.user);

        // ⭐ Navigate IMMEDIATELY after state updates
        navigate("/home");
      } else {
        showError(res?.data?.message || "Incorrect email or password");
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        (err?.response?.status === 401
          ? "Incorrect email or password"
          : "Login failed");
      showError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mobile-wrapper">
      {/* 🌫️ Blur overlay */}
      {errorPopup && <div className="login-error-overlay"></div>}

      {/* ⚠️ Error modal */}
      {errorPopup && (
        <div className="login-error-popup">
          <p>{errorPopup}</p>
        </div>
      )}

      <div className={`login-page ${errorPopup ? "blurred" : ""}`}>
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
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label>Password</label>
              <div className="input-wrap">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
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

            {/* Remember */}
            <div className="remember-row">
              <label className="remember-check">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <button className="forgot-btn" type="button">
                Forgot?
              </button>
            </div>

            <button type="submit" className="signin-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>Or continue with</span>
          </div>

          {/* Social login */}
          <div className="social-row">
            <button className="social-btn">
              <FaGoogle className="google" />
            </button>
            <button className="social-btn">
              <FaFacebook className="facebook" />
            </button>
            <button className="social-btn">
              <FaApple className="apple" />
            </button>
          </div>

          <p className="signup-text">
            Don’t have an account?
            <span onClick={() => navigate("/signup")}> Sign Up</span>
          </p>
        </div>

        <p className="footer-note">
          Protected by reCAPTCHA and subject to the Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
