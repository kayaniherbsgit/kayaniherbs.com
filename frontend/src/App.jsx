import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/UserPages/Home";
import Lessons from "./pages/UserPages/Lessons";
import Progress from "./pages/UserPages/Progress";
import Profile from "./pages/UserPages/Profile";
import UserNotifications from "./pages/UserPages/UserNotifications";
import NewLessonNotification from "./pages/UserNotificationDetails/NewLessonNotification";

import AdminHome from "./pages/AdminPages/AdminHome";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protect user routes */}
        <Route path="/home" element={isLoggedIn() ? <Home /> : <Login />} />
        <Route path="/lessons" element={isLoggedIn() ? <Lessons /> : <Login />} />
        <Route path="/progress" element={isLoggedIn() ? <Progress /> : <Login />} />
        <Route path="/profile" element={isLoggedIn() ? <Profile /> : <Login />} />
        <Route path="/notifications" element={isLoggedIn() ? <UserNotifications /> : <Login />} />
        <Route path="/notification/new-lesson" element={<NewLessonNotification />} />

        <Route path="/admin" element={<AdminHome />} />

      </Routes>
    </BrowserRouter>
  );
}
