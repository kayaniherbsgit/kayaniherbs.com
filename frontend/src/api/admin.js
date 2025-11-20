// src/api/admin.js
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/admin`,
});

// GET ALL USERS
export const fetchAllUsers = (token) =>
  API.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// APPROVE USER
export const approveUser = (id, token) =>
  API.patch(`/approve/${id}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// REJECT USER
export const rejectUser = (id, token) =>
  API.patch(`/reject/${id}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
