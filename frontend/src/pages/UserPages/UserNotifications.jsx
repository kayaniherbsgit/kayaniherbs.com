import React, { useState } from "react";
import {
  FaArrowLeft,
  FaBookOpen,
  FaTrophy,
  FaClock,
  FaStar,
  FaFire,
  FaCheckCircle,
  FaBell,
  FaMedal,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./userStyles/UserNotifications.css";

const UserNotifications = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      type: "new lessons",
      title: "New Lesson Available",
      text: "Uchawi wa Mapenzi is now ready for you",
      time: "2 minutes ago",
      icon: <FaBookOpen />,
      color: "green",
      dot: true,
    },
    {
      type: "new achievements",
      title: "Achievement Unlocked!",
      text: "You've completed 10 lessons. Keep going!",
      time: "1 hour ago",
      icon: <FaTrophy />,
      color: "amber",
      dot: true,
    },
    {
      type: "lessons",
      title: "Reminder: Continue Learning",
      text: "You have 5 lessons in progress",
      time: "3 hours ago",
      icon: <FaClock />,
      color: "blue",
    },
    {
      type: "new lessons",
      title: "Featured Content",
      text: "Check out our new featured lesson series",
      time: "5 hours ago",
      icon: <FaStar />,
      color: "green",
      dot: true,
    },
    {
      type: "achievements",
      title: "7 Day Streak!",
      text: "You're on fire! Keep your learning streak alive",
      time: "Yesterday",
      icon: <FaFire />,
      color: "purple",
    },
    {
      type: "lessons",
      title: "Lesson Completed",
      text: 'Great job on completing "Mtie Wazimu Mkeo"',
      time: "2 days ago",
      icon: <FaCheckCircle />,
      color: "green",
    },
    {
      type: "lessons",
      title: "Daily Reminder",
      text: "Don't forget your daily lesson!",
      time: "3 days ago",
      icon: <FaBell />,
      color: "gray",
    },
    {
      type: "achievements",
      title: "First Lesson Complete!",
      text: "Congratulations on your first completed lesson",
      time: "1 week ago",
      icon: <FaMedal />,
      color: "indigo",
    },
  ];

  return (
    <div className="notif-wrapper">
      
      {/* HEADER */}
      <header className="notif-header">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h2>Notifications</h2>
        <button className="mark-btn">Mark all</button>
      </header>

      {/* FILTER TABS */}
      <div className="notif-tabs">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All <span>8</span>
        </button>

        <button
          className={filter === "new" ? "active" : ""}
          onClick={() => setFilter("new")}
        >
          New <span className="red">3</span>
        </button>

        <button
          className={filter === "lessons" ? "active" : ""}
          onClick={() => setFilter("lessons")}
        >
          Lessons
        </button>

        <button
          className={filter === "achievements" ? "active" : ""}
          onClick={() => setFilter("achievements")}
        >
          Achievements
        </button>
      </div>

      {/* LIST */}
{/* LIST */}
<div className="notif-list">
  {notifications
    .filter((n) => {
      if (filter === "all") return true;
      if (filter === "new") return n.type.includes("new");
      return n.type.includes(filter);
    })
    .map((n, i) => (
      <div
        key={i}
        className={`notif-item ${n.color}`}
        onClick={() => {
          if (n.title === "New Lesson Available") {
            navigate("/notification/new-lesson");
          }
        }}
      >
        {n.dot && <div className="dot"></div>}
        <div className={`notif-icon ${n.color}`}>{n.icon}</div>

        <div className="notif-text">
          <h4>{n.title}</h4>
          <p>{n.text}</p>
          <span>{n.time}</span>
        </div>
      </div>
    ))}
</div>

    </div>
  );
};

export default UserNotifications;