import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminStyles/AdminAllUsers.css";

import {
  FaArrowLeft,
  FaFilter,
  FaSearch,
  FaClock,
  FaEllipsisV,
  FaUsers,
  FaBookOpen as FaBookIcon,
  FaChartPie,
  FaSignOutAlt,
} from "react-icons/fa";

import { fetchAllUsers, approveUser, rejectUser } from "../../api/admin";
import { useAuth } from "../../context/AuthContext";

const AdminAllUsers = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(null);

  // FETCH REAL USERS
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetchAllUsers(token);
        setUsers(res.data.users);
        setFiltered(res.data.users);
        setLoading(false);
      } catch (err) {
        console.error("Fetch users error:", err);
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // SCROLL SHRINK HEADER
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".users-header");
      if (window.scrollY > 20) header.classList.add("shrink");
      else header.classList.remove("shrink");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LIVE SEARCH
  useEffect(() => {
    const filteredUsers = users.filter((u) =>
      u.fullName.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredUsers);
  }, [search, users]);

  // APPROVE
  const handleApprove = async (id) => {
    try {
      const res = await approveUser(id, token);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? res.data.user : u))
      );
      setShowMenu(null);
    } catch (err) {
      console.error("Approve error", err);
    }
  };

  const loadUsers = async () => {
  try {
    setLoading(true);
    const res = await fetchAllUsers(token);
    
    if (res.data.success) {
      setUsers(res.data.users);
      setFiltered(res.data.users);
    } else {
      console.error("API returned error:", res.data.message);
    }
  } catch (err) {
    console.error("Fetch users error:", err);
    // Check if it's a 404
    if (err.response?.status === 404) {
      console.error("Route not found - check backend routes");
    }
  } finally {
    setLoading(false);
  }
};

  // REJECT
  const handleReject = async (id) => {
    try {
      const res = await rejectUser(id, token);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? res.data.user : u))
      );
      setShowMenu(null);
    } catch (err) {
      console.error("Reject error", err);
    }
  };

  return (
    <div className="admin-users-container">

      {/* HEADER */}
      <header className="users-header">
        <div className="users-header-top">
          <div className="users-left">
            <button className="header-btn" onClick={() => navigate("/admin")}>
              <FaArrowLeft />
            </button>

            <div>
              <h1>Users</h1>
              <p>{users.length} total users</p>
            </div>
          </div>

          <button className="header-btn filter-btn">
            <FaFilter />
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="header-search-box">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </header>

      {/* USERS LIST */}
      <section className="users-list">

        {/* SKELETON */}
        {loading &&
          [...Array(5)].map((_, i) => (
            <div key={i} className="user-card skeleton-card">
              <div className="skeleton avatar-skel"></div>
              <div className="skeleton line-skel w-60"></div>
              <div className="skeleton line-skel w-40"></div>
            </div>
          ))}

        {/* REAL USERS */}
        {!loading &&
          filtered.map((u, index) => (
            <div key={u._id} className="user-card">
              <img
                src={u.profileImage || "https://i.ibb.co/2ypYg0s/default.jpg"}
                className={`user-avatar ${u.isApproved ? "border-green" : ""}`}
                alt="user"
              />

              <div className="user-info">
                <div className="user-name-row">
                  <h3>{u.fullName}</h3>

                  <span className={`user-type ${u.isApproved ? "premium" : "free"}`}>
                    {u.isApproved ? "Approved" : "Not Approved"}
                  </span>
                </div>

                <p className="user-email">{u.email}</p>

                <div className="user-meta">
                  <span className="meta-item">
                    <FaClock className="meta-icon clock" /> Joined{" "}
                    {new Date(u.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <button
                className="user-menu-btn"
                onClick={() => setShowMenu(showMenu === index ? null : index)}
              >
                <FaEllipsisV />
              </button>

              {/* MODAL MENU */}
              {showMenu === index && (
                <div className="user-menu">
                  <button onClick={() => handleApprove(u._id)}>Approve</button>
                  <button onClick={() => handleReject(u._id)} className="warn">
                    Unapprove
                  </button>
                  <button className="danger">Delete User</button>
                </div>
              )}
            </div>
          ))}
      </section>

      {/* BOTTOM NAV */}
      <nav className="admin-bottom-nav">
        <div className="nav-item" onClick={() => navigate("/admin")}>
          <FaChartPie />
          <span>Dashboard</span>
        </div>

        <div className="nav-item active">
          <FaUsers />
          <span>Users</span>
        </div>

        <div className="nav-item">
          <FaBookIcon />
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

export default AdminAllUsers;
