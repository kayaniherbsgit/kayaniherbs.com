import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaBell,
  FaPlay,
  FaHeart,
  FaBrain,
  FaCheck,
  FaClock,
} from "react-icons/fa";
import "../styles/Home.css";
import BottomNav from "../components/BottomNav";

const Home = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 40) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Header */}
        <header id="header" className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className={`header-left ${isScrolled ? "centered" : ""}`}>
            <div className="header-logo">
              <FaGraduationCap className="logo-icon" />
            </div>
            <h1
              id="header-title"
              className={`app-title ${isScrolled ? "slide-out" : "slide-in"}`}
            >
              Kayani Men
            </h1>
          </div>
          <button className="bell-btn">
            <FaBell />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="content-scroll">
          <section className="hero">
            <div className="hero-box">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4c72ffb329-26f1bcba6708bbae6864.png"
                alt="hero"
                className="hero-img"
              />
              <div className="hero-overlay" />
              <div className="hero-text">
                <h2>Welcome Back!</h2>
                <p>Continue your learning journey</p>
              </div>
            </div>
          </section>

          <section className="stats">
            <div className="stat completed">
              <h3>12</h3>
              <p>Completed</p>
            </div>
            <div className="stat progress">
              <h3>5</h3>
              <p>In Progress</p>
            </div>
            <div className="stat total">
              <h3>27</h3>
              <p>Total Lessons</p>
            </div>
          </section>

          <section className="section">
            <h4>Continue Learning</h4>
            <div className="lesson-card">
              <div className="thumb">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d4a327f2c5-758f2a39e0923c6ee1cf.png"
                  alt="lesson"
                />
              </div>
              <div className="lesson-info">
                <h5>Hatua Ya Malengo</h5>
                <p>Lesson 2 of 27</p>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "35%" }} />
                </div>
                <span className="progress-text">35% Complete</span>
              </div>
            </div>
            <button className="btn-primary" onClick={() => navigate("/lessons")}>
              <FaPlay /> Continue Lesson
            </button>
          </section>

          <section className="section">
            <h4>Categories</h4>
            <div className="categories">
              <div className="category green">
                <FaHeart className="icon" />
                <h5>Relationships</h5>
                <p>15 Lessons</p>
              </div>
              <div className="category white">
                <FaBrain className="icon green-icon" />
                <h5>Mindset</h5>
                <p>12 Lessons</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h4>Recent Lessons</h4>
            <div className="recent">
              <div className="recent-card">
                <div className="icon-bg green-bg">
                  <FaCheck className="green" />
                </div>
                <div>
                  <h5>Mtie Wazimu Mkeo</h5>
                  <p>Completed yesterday</p>
                </div>
              </div>

              <div className="recent-card">
                <div className="icon-bg amber-bg">
                  <FaClock className="amber" />
                </div>
                <div>
                  <h5>Alpha Man Mindset</h5>
                  <p>Started 2 days ago</p>
                </div>
              </div>
            </div>
          </section>

          <div className="bottom-space" />
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
