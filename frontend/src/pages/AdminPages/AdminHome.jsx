import React from "react";
import {
  FaUsers,
  FaBookOpen,
  FaChartLine,
  FaChevronRight,
  FaChartPie,
  FaUpload,
  FaHeadphones,
  FaClipboardList,
  FaPaperPlane,
  FaUserPlus,
  FaBook,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

import "./AdminStyles/AdminHome.css";
const Admin = () => {
  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div>
          <h1>Admin Panel</h1>
          <p>Control & Manage</p>
        </div>

        <div className="admin-avatar">
          <FaUserShield />
        </div>
      </header>

      {/* STATS */}
      <section className="admin-stats">
        <div className="stat-card">
          <div className="stat-icon green-bg">
            <FaUsers />
          </div>
          <h3>1,247</h3>
          <p>Users</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue-bg">
            <FaBookOpen />
          </div>
          <h3>127</h3>
          <p>Lessons</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon amber-bg">
            <FaChartLine />
          </div>
          <h3>89%</h3>
          <p>Active</p>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="section-block">
        <h2>Quick Actions</h2>

        <div className="action-list">

          <div className="action-item">
            <div className="action-icon main-bg">
              <FaChartPie />
            </div>
            <div className="action-info">
              <h3>Overview</h3>
              <p>Dashboard statistics</p>
            </div>
            <FaChevronRight className="arrow" />
          </div>

          <div className="action-item">
            <div className="action-icon blue-light">
              <FaUsers />
            </div>
            <div className="action-info">
              <h3>Users</h3>
              <p>Manage all users</p>
            </div>
            <FaChevronRight className="arrow" />
          </div>

          <div className="action-item">
            <div className="action-icon amber-light">
              <FaUpload />
            </div>
            <div className="action-info">
              <h3>Upload Lesson</h3>
              <p>Add new content</p>
            </div>
            <FaChevronRight className="arrow" />
          </div>

          <div className="action-item">
            <div className="action-icon purple-light">
              <FaHeadphones />
            </div>
            <div className="action-info">
              <h3>All Lessons</h3>
              <p>View & edit lessons</p>
            </div>
            <FaChevronRight className="arrow" />
          </div>

          <div className="action-item">
            <div className="action-icon gray-light">
              <FaClipboardList />
            </div>
            <div className="action-info">
              <h3>Activity Logs</h3>
              <p>System activity</p>
            </div>
            <FaChevronRight className="arrow" />
          </div>

          <div className="action-item">
            <div className="action-icon green-light">
              <FaPaperPlane />
            </div>
            <div className="action-info">
              <h3>Send Notification</h3>
              <p>Push to users</p>
            </div>
            <FaChevronRight className="arrow" />
          </div>

        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="section-block">
        <h2>Recent Activity</h2>

        <div className="activity-box">

          <div className="activity-item">
            <div className="activity-icon green-bg">
              <FaUserPlus />
            </div>
            <div className="activity-info">
              <h4>New user registered</h4>
              <p>John Doe joined • 5 min ago</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon blue-bg">
              <FaBook />
            </div>
            <div className="activity-info">
              <h4>Lesson completed</h4>
              <p>Maria finished Lesson 5 • 12 min ago</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon amber-bg">
              <FaUpload />
            </div>
            <div className="activity-info">
              <h4>New lesson uploaded</h4>
              <p>Lesson 28 added • 1 hour ago</p>
            </div>
          </div>

        </div>
      </section>

      <div className="admin-bottom-space"></div>

      {/* Admin Bottom Nav */}
<nav className="admin-bottom-nav">
  <div className="nav-item active">
    <FaChartPie />
    <span>Dashboard</span>
  </div>

  <div className="nav-item">
    <FaUsers />
    <span>Users</span>
  </div>

  <div className="nav-item">
    <FaBookOpen />
    <span>Lessons</span>
  </div>

  <div className="nav-item logout">
    <FaSignOutAlt />
    <span>Logout</span>
  </div>
</nav>
    </div>
  );
};

export default Admin;
