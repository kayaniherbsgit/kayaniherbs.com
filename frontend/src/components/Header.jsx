import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaBell } from "react-icons/fa";
import "../styles/Header.css";

const Header = ({ title = "Kayani Men" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className={`header-left ${isScrolled ? "centered" : ""}`}>
        <div className="header-logo">
          <FaGraduationCap className="logo-icon" />
        </div>
        <h1
          id="header-title"
          className={`app-title ${isScrolled ? "slide-out" : "slide-in"}`}
        >
          {title}
        </h1>
      </div>
      <button className="bell-btn">
        <FaBell />
      </button>
    </header>
  );
};

export default Header;
