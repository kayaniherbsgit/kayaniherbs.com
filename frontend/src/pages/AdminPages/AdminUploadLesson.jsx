import React, { useState } from "react";
import {
  FaUserShield,
  FaChartPie,
  FaUsers,
  FaBookOpen,
  FaSignOutAlt,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AdminStyles/AdminUploadLesson.css";

export default function AdminUploadLesson() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState(1);
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const [steps, setSteps] = useState([]);

  // Collapsible steps (like Notion)
  const toggleStepOpen = (id) => {
    setSteps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, open: !s.open } : s))
    );
  };

  const addStep = () => {
    setSteps((prev) => [
      ...prev,
      {
        id: Date.now(),
        open: true,
        type: "audio",
        label: "",
        src: "",
        content: "",
        questions: [""],
      },
    ]);
  };

  const updateStep = (id, key, value) => {
    setSteps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [key]: value } : s))
    );
  };

  const updateQuestion = (stepId, qIndex, value) => {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.id !== stepId) return s;
        const qs = [...s.questions];
        qs[qIndex] = value;
        return { ...s, questions: qs };
      })
    );
  };

  const addQuestion = (stepId) => {
    setSteps((prev) =>
      prev.map((s) =>
        s.id === stepId ? { ...s, questions: [...s.questions, ""] } : s
      )
    );
  };

  const removeStep = (id) => {
    setSteps((prev) => prev.filter((s) => s.id !== id));
  };

  const handleUpload = () => {
    if (uploadProgress > 0) return;
    let p = 0;
    const timer = setInterval(() => {
      p += 10;
      setUploadProgress(p);
      if (p >= 100) clearInterval(timer);
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload();
    console.log({
      title,
      description,
      day,
      duration,
      level,
      thumbnail,
      steps,
    });
  };

  return (
    <div className="admin-page">

      {/* HEADER */}
      <header className="upload-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <div className="header-center">
          <h1>Upload Lesson</h1>
          <p>Create & publish new content</p>
        </div>

        <div className="admin-avatar">
          <FaUserShield />
        </div>
      </header>

      {/* CONTENT WRAPPER */}
      <div className="aul-wrap">
        <form className="aul-form" onSubmit={handleSubmit}>

          <label className="label">Lesson Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Hatua Ya Malengo"
          />

          <label className="label">Description</label>
          <textarea
            className="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description..."
          ></textarea>

          <div className="two-col">
            <div>
              <label className="label">Day</label>
              <input
                type="number"
                className="input"
                value={day}
                min={1}
                onChange={(e) => setDay(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="label">Duration</label>
              <input
                className="input"
                value={duration}
                placeholder="15:30"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>

          <label className="label">Level</label>
          <input
            className="input"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="e.g., Beginner / Intermediate / Advanced"
          />

          <label className="label">Thumbnail URL</label>
          <input
            className="input"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />

          {thumbnail && (
            <div className="thumb-preview">
              <img src={thumbnail} alt="" />
            </div>
          )}

          {/* STEPS */}
          <div className="steps-header">
            <h3>Lesson Steps</h3>
            <button type="button" className="btn-add" onClick={addStep}>
              + Add Step
            </button>
          </div>

          <div className="steps-list">
            {steps.length === 0 && (
              <p className="muted">No steps yet. Add one above.</p>
            )}

            {steps.map((st, index) => (
              <div className="step-card" key={st.id}>
                <div className="step-header" onClick={() => toggleStepOpen(st.id)}>
                  <strong>Step {index + 1}</strong>
                  {st.open ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {st.open && (
                  <div className="step-body">

                    <label className="slabel">Step Type</label>
                    <select
                      className="step-type"
                      value={st.type}
                      onChange={(e) =>
                        updateStep(st.id, "type", e.target.value)
                      }
                    >
                      <option value="audio">Audio</option>
                      <option value="text">Text</option>
                      <option value="questions">Questions</option>
                      <option value="pdf">PDF</option>
                    </select>

                    <label className="slabel">Label (optional)</label>
                    <input
                      className="step-label"
                      value={st.label}
                      placeholder="Intro, Start Here, etc."
                      onChange={(e) =>
                        updateStep(st.id, "label", e.target.value)
                      }
                    />

                    {/* AUDIO */}
                    {st.type === "audio" && (
                      <div className="field">
                        <label className="slabel">Upload Audio</label>
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) =>
                            updateStep(st.id, "src", e.target.files[0]?.name)
                          }
                        />
                        {st.src && <div className="file-name">{st.src}</div>}
                      </div>
                    )}

                    {/* TEXT */}
                    {st.type === "text" && (
                      <div className="field">
                        <label className="slabel">Text Content</label>
                        <textarea
                          className="textarea"
                          rows={4}
                          value={st.content}
                          onChange={(e) =>
                            updateStep(st.id, "content", e.target.value)
                          }
                        />
                      </div>
                    )}

                    {/* QUESTIONS */}
                    {st.type === "questions" && (
                      <div className="field">
                        <label className="slabel">Questions</label>
                        {st.questions.map((q, qi) => (
                          <input
                            key={qi}
                            className="input"
                            placeholder={`Question ${qi + 1}`}
                            value={q}
                            onChange={(e) =>
                              updateQuestion(st.id, qi, e.target.value)
                            }
                          />
                        ))}
                        <button
                          className="btn-small"
                          type="button"
                          onClick={() => addQuestion(st.id)}
                        >
                          + Add Question
                        </button>
                      </div>
                    )}

                    {/* PDF */}
                    {st.type === "pdf" && (
                      <div className="field">
                        <label className="slabel">Upload PDF</label>
                        <input
                          type="file"
                          accept="application/pdf"
                          onChange={(e) =>
                            updateStep(st.id, "src", e.target.files[0]?.name)
                          }
                        />
                        {st.src && <div className="file-name">{st.src}</div>}
                      </div>
                    )}

                    <button
                      type="button"
                      className="icon-btn danger"
                      onClick={() => removeStep(st.id)}
                    >
                      ✕ Remove Step
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* PROGRESS BAR */}
          {uploadProgress > 0 && (
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => navigate("/admin")}>
              ✕ Cancel
            </button>

            <button className="btn-submit" type="submit">
              ⇪ Upload Lesson
            </button>
          </div>
        </form>
      </div>

      {/* BOTTOM NAV */}
      <nav className="admin-bottom-nav">
        <div className="nav-item" onClick={() => navigate("/admin")}>
          <FaChartPie />
          <span>Dashboard</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/admin/users")}>
          <FaUsers />
          <span>Users</span>
        </div>

        <div className="nav-item active">
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
}
