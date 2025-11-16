import React, { useState, useRef } from "react";
import { FaArrowLeft, FaCamera, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { updateUser } from "../../api/users";

import "./userStyles/Profile.css"; 
import "./userStyles/EditProfile.css";  // <-- IMPORTANT

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    fullName: user?.fullName || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    whatsapp: user?.whatsapp || "",
    region: user?.region || "",
  });

  const [profileImage, setProfileImage] = useState(user?.profileImage || "");
  const [imageFile, setImageFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const fileInput = useRef();

  const handleChange = (field, val) => {
    setForm({ ...form, [field]: val });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setProfileImage(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    const data = new FormData();

    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (imageFile) data.append("profileImage", imageFile);

    try {
      const res = await updateUser(data, token);

      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);

        setTimeout(() => navigate("/profile"), 800);
      }
    } catch (err) {
      console.log("Update failed:", err);
    }
  };

  return (
    <div className="profile-page">

      {/* HEADER */}
      <header className="profile-header">
        <button
          onClick={() => navigate("/profile")}
          style={{ background: "transparent", border: "none", color: "white" }}
        >
          <FaArrowLeft size={22} />
        </button>

        <h1>Edit Profile</h1>

        <div style={{ width: 22 }}></div>
      </header>

      {/* PROFILE IMAGE */}
      <div className="edit-profile-photo-wrapper">
        <div className="edit-photo-container">
          <img src={profileImage} alt="pfp" />

          <div
            className="camera-button"
            onClick={() => fileInput.current.click()}
          >
            <FaCamera />
          </div>

          <input
            type="file"
            hidden
            ref={fileInput}
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        <p className="tap-note">Tap to change photo</p>
      </div>

      {/* FORM */}
      <div className="form-section">

        {[
          ["Full Name", "fullName"],
          ["Username", "username"],
          ["Email", "email"],
          ["Phone Number", "phone"],
          ["WhatsApp Number", "whatsapp"],
        ].map(([label, key]) => (
          <div className="field-group" key={key}>
            <label>{label}</label>

            <div className="input-wrapper">
              <input
                value={form[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />

              <FaPen className="edit-icon" />
            </div>
          </div>
        ))}

        {/* REGION */}
        <div className="field-group">
          <label>Region</label>

          <div className="input-wrapper">
            <select
              value={form.region}
              onChange={(e) => handleChange("region", e.target.value)}
            >
              <option>Africa</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>North America</option>
              <option>South America</option>
              <option>Oceania</option>
            </select>

            <FaPen className="edit-icon" />
          </div>
        </div>

        {/* BUTTONS */}
        <button onClick={handleSave} className="save-btn">
          Save Changes
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="cancel-btn"
        >
          Cancel
        </button>
      </div>

      {/* SUCCESS TOAST */}
      {showSuccess && <div className="success-toast">✓ Profile Saved!</div>}

    </div>
  );
};

export default EditProfile;
