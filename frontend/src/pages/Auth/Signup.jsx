import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaUser,
  FaAt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCamera,
  FaChevronDown,
} from "react-icons/fa6";

import "./AuthStyles/Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);

  // ✅ Navigation Hook
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="signup-page">
      {/* Header */}
      <header className="signup-header">
        <div className="header-icon-wrap">
          <FaUserPlus className="header-icon" />
        </div>
        <h1>Create Account</h1>
        <p>Join us today</p>
      </header>

      {/* Card */}
      <div className="signup-card">
        <form className="signup-form">
          
          {/* Profile Picture */}
          <div className="profile-upload">
            <div className="upload-circle">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {!image ? (
                <FaCamera className="camera-icon" />
              ) : (
                <img src={image} alt="Profile" className="uploaded-img" />
              )}
            </div>
            <p>Upload Profile Picture</p>
          </div>

          {/* Full Name */}
          <div>
            <label>Full Name</label>
            <div className="input-wrap">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Enter full name" />
            </div>
          </div>

          {/* Username */}
          <div>
            <label>Username</label>
            <div className="input-wrap">
              <FaAt className="input-icon" />
              <input type="text" placeholder="Choose username" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <div className="input-wrap">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label>Phone Number</label>
            <div className="input-wrap">
              <FaPhone className="input-icon" />
              <input type="tel" placeholder="+255 712 345 678" />
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label>WhatsApp Number</label>
            <div className="input-wrap">
              <FaWhatsapp className="input-icon" />
              <input type="tel" placeholder="+255 712 345 678" />
            </div>
          </div>

          {/* Region */}
          <div>
            <label>Select Region</label>
            <div className="input-wrap">
              <FaLocationDot className="input-icon" />
              <select>
                <option>Choose your region</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
                <option>Oceania</option>
              </select>
              <FaChevronDown className="select-arrow" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <div className="input-wrap">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button className="signup-btn">Sign Up</button>

          {/* Login Link */}
          <p className="footer-text">
            Already have an account?
            <span
              className="login-link"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Signup;
