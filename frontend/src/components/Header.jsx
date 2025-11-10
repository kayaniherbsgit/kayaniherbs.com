import React from "react";
import "../styles/Header.css";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import your logo
import MyLogo from "../assets/MyLogoWeb.jpg";

const Header = ({ title = "Kayani Men" }) => {
  const navigate = useNavigate();

  return (
    <header className="clean-header">
      <div className="left-side">
        
        {/* ✅ Logo container */}
        <div className="header-logo-img">
          <img src={MyLogo} alt="Logo" className="logo-img" />
        </div>

        <h1 className="header-title">{title}</h1>
      </div>

      <button
        className="bell-btn"
        onClick={() => navigate("/notifications")}
      >
        <FaBell />
      </button>
    </header>
  );
};

export default Header;
