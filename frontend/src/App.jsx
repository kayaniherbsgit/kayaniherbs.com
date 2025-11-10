import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* USER PAGES */
import Home from "./pages/UserPages/Home";
import Lessons from "./pages/UserPages/Lessons";
import Progress from "./pages/UserPages/Progress";
import Profile from "./pages/UserPages/Profile";
import UserNotifications from "./pages/UserPages/UserNotifications";
import NewLessonNotification from "./pages/UserNotificationDetails/NewLessonNotification";



/* ADMIN PAGES */
import AdminHome from "./pages/AdminPages/AdminHome";

/* AUTH PAGES */
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* DEFAULT → LOGIN */}
        <Route path="/" element={<Login />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* USER ROUTES */}
        <Route path="/home" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<UserNotifications />} />
        <Route path="/notification/new-lesson" element={<NewLessonNotification />} />



        {/* ADMIN */}
        <Route path="/admin" element={<AdminHome />} />

      </Routes>
    </BrowserRouter>
  );
}
