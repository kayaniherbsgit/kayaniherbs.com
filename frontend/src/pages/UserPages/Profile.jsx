import React, { useState } from "react";
import {
  FaCog,
  FaCrown,
  FaEdit,
  FaBell,
  FaLock,
  FaWallet,
  FaGlobe,
  FaQuestionCircle,
  FaInfoCircle,
  FaSignOutAlt,
  FaUser,
  FaChevronRight,
} from "react-icons/fa";
import "./userStyles/Profile.css";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <h1>Profile</h1>
        <button className="settings-btn">
          <FaCog />
        </button>
      </header>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-pic">
            <img src="https://i.pravatar.cc/150?img=12" alt="User" />
            <div className="camera-icon">
              <FaUser />
            </div>
          </div>
          <h2>Sarah Johnson</h2>
          <p className="email">sarah.j@email.com</p>
          <div className="premium">
            <FaCrown className="icon" /> Premium Member
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="stats-row">
        <div className="stat-box">
          <h3>24</h3>
          <p>Lessons</p>
        </div>
        <div className="stat-box">
          <h3 className="green">7</h3>
          <p>Day Streak</p>
        </div>
        <div className="stat-box">
          <h3>5</h3>
          <p>Badges</p>
        </div>
      </section>

      {/* Lists */}
      <section className="list-section">
        <div className="list-item">
          <div className="left">
            <div className="icon blue">
              <FaEdit />
            </div>
            <p>Edit Profile</p>
          </div>
          <FaChevronRight className="arrow" />
        </div>

        <div className="list-item">
          <div className="left">
            <div className="icon purple">
              <FaBell />
            </div>
            <p>Notifications</p>
          </div>
          <FaChevronRight className="arrow" />
        </div>

        <div className="list-item">
          <div className="left">
            <div className="icon green">
              <FaLock />
            </div>
            <p>Privacy & Security</p>
          </div>
          <FaChevronRight className="arrow" />
        </div>

        <div className="list-item">
          <div className="left">
            <div className="icon gold">
              <FaWallet />
            </div>
            <p>Subscription</p>
          </div>
          <FaChevronRight className="arrow" />
        </div>
      </section>

      <section className="list-section">
        <div className="list-item">
          <div className="left">
            <div className="icon red">
              <FaGlobe />
            </div>
            <p>Language</p>
          </div>
          <span className="lang">English</span>
        </div>

        <div className="list-item">
          <div className="left">
            <div className="icon gray">
              <FaQuestionCircle />
            </div>
            <p>Help & Support</p>
          </div>
          <FaChevronRight className="arrow" />
        </div>

        <div className="list-item">
          <div className="left">
            <div className="icon dark">
              <FaInfoCircle />
            </div>
            <p>About</p>
          </div>
          <FaChevronRight className="arrow" />
        </div>
      </section>

      {/* Logout Button */}
      <button
        className="logout-btn"
        onClick={() => setShowLogoutPopup(true)}
      >
        <FaSignOutAlt /> Log Out
      </button>

      {/* LOGOUT POPUP */}
      {showLogoutPopup && (
        <div className="logout-overlay">
          <div className="logout-popup">
            <h3>Log Out?</h3>
            <p>You’re about to exit your account.</p>

            <div className="popup-buttons">
              <button
                className="cancel-btn"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>

              <button className="confirm-btn" onClick={handleLogout}>
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bottom-space"></div>
      <BottomNav />
    </div>
  );
};

export default Profile;
