import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// SIGNUP
export const signupUser = async (formData) => {
  return await API.post("/signup", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// LOGIN
export const loginUser = async (data) => {
  return await API.post("/login", data);
};
