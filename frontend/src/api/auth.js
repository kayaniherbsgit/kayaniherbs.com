import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/auth`,
});


// SIGNUP
export const signupUser = async (formData) => {
  return await API.post("/signup", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// LOGIN
export const loginUser = (data) => 
  API.post("/login", data, {
    headers: { "Content-Type": "application/json" }
  });
