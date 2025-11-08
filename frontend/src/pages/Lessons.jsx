import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBell,
  FaMicrophone,
  FaHeart,
  FaBackward,
  FaForward,
  FaPause,
  FaUndoAlt,
  FaTachometerAlt,
  FaRedoAlt,
  FaPlay,
  FaLock,
  FaFilePdf,
  FaLink,
  FaDownload,
  FaExternalLinkAlt,
  FaStickyNote,
  FaPlus,
} from "react-icons/fa";
import "../styles/Lessons.css";
import BottomNav from "../components/BottomNav";

const Lessons = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lesson-wrapper">
      <div className="lesson-container">
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
        <main className="lesson-scroll">
          {/* === Hero === */}
          <section className="lesson-hero">
            <div className="hero-box">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3b270be038-1e7dda7af6c42de323e5.png"
                alt="Lesson"
              />
              <div className="hero-overlay"></div>
              <div className="hero-text">
                <div className="hero-tags">
                  <span>Lesson 2 of 27</span>
                  <span>10 min</span>
                </div>
                <h2>Hatua Ya Malengo</h2>
              </div>
            </div>
          </section>

          {/* === Audio Player === */}
          <section className="audio-player">
            <div className="player-box">
              <div className="player-top">
                <div className="player-info">
                  <div className="mic-icon">
                    <FaMicrophone />
                  </div>
                  <div>
                    <p className="player-name">Dr. Kayani</p>
                    <p className="player-role">Instructor</p>
                  </div>
                </div>
                <button className="fav-btn">
                  <FaHeart />
                </button>
              </div>

              <div className="player-progress">
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "35%" }}></div>
                </div>
                <div className="player-time">
                  <span>9:45</span>
                  <span>28:00</span>
                </div>
              </div>

              <div className="player-controls">
                <button className="control-btn small">
                  <FaBackward />
                </button>
                <button className="control-btn main">
                  <FaPause />
                </button>
                <button className="control-btn small">
                  <FaForward />
                </button>
              </div>

              <div className="player-options">
                <button>
                  <FaUndoAlt />
                  <span>-15s</span>
                </button>
                <button>
                  <FaTachometerAlt />
                  <span>1.0x</span>
                </button>
                <button>
                  <FaRedoAlt />
                  <span>+15s</span>
                </button>
              </div>
            </div>
          </section>

          {/* === Lesson Overview === */}
          <section className="lesson-section">
            <h3>Lesson Overview</h3>
            <div className="overview-box">
              <p>
                Jinsi Ya Kuset Malengo Yenye Uhalisia Kwenye Tendo La Ndoa Na
                Jinsi Ya Kuyatimiza Malengo Hayo. Jibu Maswali [Hapo Chini👇]
                Baada Ya Kusikiliza Audio Hiyo Hapo Juu.
              </p>
            </div>
          </section>

          {/* === Lessons List === */}
          <section className="lesson-section">
            <h3>Lessons</h3>
            <div className="lesson-list">
              <div className="lesson-item">
                <div className="icon green-bg">
                  <FaPlay />
                </div>
                <div className="lesson-info">
                  <h4>Mtie Wazimu Mkeo</h4>
                  <p>Lesson 1</p>
                </div>
                <span className="status green">Completed</span>
              </div>

              <div className="lesson-item active">
                <div className="icon filled">
                  <FaPause />
                </div>
                <div className="lesson-info">
                  <h4>Hatua Ya Malengo</h4>
                  <p>Lesson 2</p>
                </div>
                <span className="status green">Playing</span>
              </div>

              <div className="lesson-item locked">
                <div className="icon gray-bg">
                  <FaLock />
                </div>
                <div className="lesson-info">
                  <h4>Mindset Ya Alpha Man</h4>
                  <p>Lesson 3</p>
                </div>
                <span className="status red">Pending</span>
              </div>
            </div>
          </section>

          <section className="lesson-section">
            <h3>Resources</h3>
            <div className="resource-box">
              <div className="resource-item">
                <div className="icon red-bg">
                  <FaFilePdf />
                </div>
                <div className="resource-info">
                  <h4>Research Methods Guide.pdf</h4>
                  <p>2.4 MB</p>
                </div>
                <button className="action-btn">
                  <FaDownload />
                </button>
              </div>

              <div className="resource-item">
                <div className="icon blue-bg">
                  <FaLink />
                </div>
                <div className="resource-info">
                  <h4>Additional Reading</h4>
                  <p>External link</p>
                </div>
                <button className="action-btn">
                  <FaExternalLinkAlt />
                </button>
              </div>
            </div>
          </section>

          <section className="lesson-section mb-80">
            <h3>My Notes</h3>
            <div className="note-card">
              <FaStickyNote className="note-icon" />
              <div>
                <p>Kumbuka kupitia darasa la 10 maana ni la motoo🔥🔥🔥🔥</p>
                <span>Added at 8:32</span>
              </div>
            </div>
            <button className="add-note-btn">
              <FaPlus /> Add Note
            </button>
          </section>
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Lessons;
