import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaBookOpen, FaChartLine, FaUser } from "react-icons/fa";
import "../styles/BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { path: "/home", label: "Home", icon: <FaHome /> },   // ✅ FIXED
    { path: "/lessons", label: "Lessons", icon: <FaBookOpen /> },
    { path: "/progress", label: "Progress", icon: <FaChartLine /> },
    { path: "/profile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const isActive =
          location.pathname === tab.path ||
          (tab.path === "/home" && location.pathname === "/");

        return (
          <motion.button
            key={tab.path}
            className={`nav-item ${isActive ? "active" : ""}`}
            onClick={() => navigate(tab.path)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={isActive ? { y: [0, -4, 0] } : { y: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              {tab.icon}
            </motion.div>
            <span>{tab.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
