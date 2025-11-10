import React from "react";
import {
  FaArrowLeft,
  FaBookmark,
  FaEllipsisV,
  FaBookOpen,
  FaHeadphones,
  FaSignal,
  FaStar,
  FaMagic,
  FaLightbulb,
  FaCheck,
  FaHeart,
  FaGem,
  FaChevronRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import "./UserNotificationDetails.css";

const NewLessonNotification = () => {
  const navigate = useNavigate();

  return (
    <div className="notif-wrapper">
      {/* HEADER */}
      <header className="notif-header">
        <div className="header-row">
          <button className="icon-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>

          <div className="right-icons">
            <button className="icon-btn">
              <FaBookmark />
            </button>
            <button className="icon-btn">
              <FaEllipsisV />
            </button>
          </div>
        </div>

        <div className="header-info">
          <div className="header-logo">
            <FaBookOpen />
          </div>

          <div>
            <h1>New Lesson Available</h1>
            <p>2 minutes ago</p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="notif-content">
        {/* TOP CARD */}
        <div className="top-card">
          <div className="card-head">
            <div className="card-icon">
              <FaMagic /> {/* Using FaMagic instead of FaSparkles */}
            </div>

            <div>
              <h2>Uchawi wa Mapenzi</h2>
              <p>New audio lesson ready for you</p>
            </div>
          </div>

          <div className="lesson-box">
            <div className="lesson-row">
              <div className="lesson-icon">
                <FaHeadphones />
              </div>

              <div className="lesson-info">
                <h3>Audio Lesson</h3>
                <p>Duration: 15 minutes</p>
              </div>
            </div>

            <div className="lesson-meta">
              <span className="meta-item">
                <FaSignal className="green" />
                Intermediate
              </span>

              <span className="dot">•</span>

              <span className="meta-item">
                <FaStar className="yellow" />
                4.8 Rating
              </span>
            </div>

            <button className="start-btn">
              <FaHeadphones />
              Start Lesson Now
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="section">
          <h3>Lesson Description</h3>

          <p className="desc">
            Discover the enchanting world of love and relationships in this
            captivating audio lesson. Learn traditional wisdom and modern
            insights that will transform your understanding.
          </p>

          <div className="tip-box">
            <FaLightbulb className="tip-icon" />
            <p>
              <strong>Pro Tip:</strong> Listen with headphones for the best
              experience and take notes as you go.
            </p>
          </div>
        </div>

        {/* WHAT YOU'LL LEARN */}
        <div className="section">
          <h3>What You'll Learn</h3>

          <div className="learn-list">
            <div className="learn-item">
              <div className="check-icon">
                <FaCheck />
              </div>
              <p>Understanding emotional connections</p>
            </div>

            <div className="learn-item">
              <div className="check-icon">
                <FaCheck />
              </div>
              <p>Building lasting relationships</p>
            </div>

            <div className="learn-item">
              <div className="check-icon">
                <FaCheck />
              </div>
              <p>Traditional wisdom for modern times</p>
            </div>
          </div>
        </div>

        {/* RELATED LESSONS */}
        <div className="section bottom-space">
          <h3>Related Lessons</h3>

          <div className="related-box">
            <div className="related-item">
              <div className="related-icon purple">
                <FaHeart />
              </div>

              <div className="related-info">
                <h4>Mtie Wazimu Mkeo</h4>
                <p>12 min • Beginner</p>
              </div>

              <FaChevronRight className="arrow" />
            </div>

            <div className="related-item">
              <div className="related-icon pink">
                <FaGem />
              </div>

              <div className="related-info">
                <h4>Siri za Mahusiano</h4>
                <p>18 min • Advanced</p>
              </div>

              <FaChevronRight className="arrow" />
            </div>
          </div>
        </div>

        <div className="bottom-gap"></div>
      </main>
    </div>
  );
};

export default NewLessonNotification;
