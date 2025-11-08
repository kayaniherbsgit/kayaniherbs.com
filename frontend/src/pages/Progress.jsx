import React, { useEffect } from "react";
import Plotly from "plotly.js-dist-min";
import {
  FaEllipsisV,
  FaTrophy,
  FaHeart,
  FaBrain,
  FaFire,
  FaStar,
  FaMedal,
} from "react-icons/fa";
import "../styles/Progress.css";
import BottomNav from "../components/BottomNav";

const Progress = () => {
  useEffect(() => {
    try {
      const data = [
        {
          type: "bar",
          x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          y: [2.5, 3.2, 1.8, 4.1, 3.5, 2.0, 4.5],
          marker: {
            color: [
              "#e5e7eb",
              "#e5e7eb",
              "#e5e7eb",
              "#e5e7eb",
              "#e5e7eb",
              "#e5e7eb",
              "#009641",
            ],
          },
        },
      ];

      const layout = {
        margin: { t: 10, r: 10, b: 30, l: 35 },
        plot_bgcolor: "#ffffff",
        paper_bgcolor: "#ffffff",
        xaxis: { showgrid: false },
        yaxis: { showgrid: true, gridcolor: "#f3f4f6", title: "Hours" },
        showlegend: false,
      };

      const config = {
        responsive: true,
        displayModeBar: false,
      };

      Plotly.newPlot("weekly-chart", data, layout, config);
    } catch (e) {
      document.getElementById("weekly-chart").innerHTML =
        '<div class="chart-error">Chart unavailable</div>';
    }
  }, []);

  return (
    <div className="progress-wrapper">
      <div className="progress-container">
        {/* Header */}
        <header className="progress-header">
          <h1>My Progress</h1>
          <button className="menu-btn">
            <FaEllipsisV />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="progress-scroll">
          <section className="overview-section">
            <div className="overview-card">
              <div className="overview-top">
                <div>
                  <p className="overview-sub">Total Learning Time</p>
                  <h2>24.5 hrs</h2>
                </div>
                <div className="trophy-circle">
                  <FaTrophy />
                </div>
              </div>
              <div className="overview-stats">
                <div>
                  <p className="stat-label">Streak</p>
                  <p className="stat-value">7 days</p>
                </div>
                <div>
                  <p className="stat-label">Completed</p>
                  <p className="stat-value">12</p>
                </div>
                <div>
                  <p className="stat-label">Badges</p>
                  <p className="stat-value">5</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h3>Weekly Activity</h3>
            <div id="weekly-chart" className="chart-box"></div>
          </section>

          <section className="section">
            <h3>Category Progress</h3>

            <div className="category-card">
              <div className="category-top">
                <div className="left">
                  <div className="icon-circle red-bg">
                    <FaHeart />
                  </div>
                  <div>
                    <h4>Relationships</h4>
                    <p>8 of 15 lessons</p>
                  </div>
                </div>
                <span className="percent">53%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "53%" }}></div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-top">
                <div className="left">
                  <div className="icon-circle purple-bg">
                    <FaBrain />
                  </div>
                  <div>
                    <h4>Mindset</h4>
                    <p>4 of 12 lessons</p>
                  </div>
                </div>
                <span className="percent">33%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "33%" }}></div>
              </div>
            </div>
          </section>

          <section className="section achievements">
            <h3>Recent Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement active">
                <div className="ach-icon green-bg">
                  <FaFire />
                </div>
                <p className="title">7 Day Streak</p>
              </div>
              <div className="achievement">
                <div className="ach-icon amber-bg">
                  <FaStar />
                </div>
                <p className="title">Fast Learner</p>
              </div>
              <div className="achievement">
                <div className="ach-icon blue-bg">
                  <FaMedal />
                </div>
                <p className="title">First 10</p>
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

export default Progress;
