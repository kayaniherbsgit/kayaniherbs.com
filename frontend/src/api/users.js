// src/api/users.js
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/users`,
});

// UPDATE USER PROFILE
export const updateUser = (formData, token) =>
  API.patch("/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
