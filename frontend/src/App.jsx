import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/UserPages/Home";
import Lessons from "./pages/UserPages/Lessons";
import Progress from "./pages/UserPages/Progress";
import Profile from "./pages/UserPages/Profile";
import UserNotifications from "./pages/UserPages/UserNotifications";
import NewLessonNotification from "./pages/UserNotificationDetails/NewLessonNotification";
import EditProfile from "./pages/UserPages/EditProfile";

import AdminHome from "./pages/AdminPages/AdminHome";
import AdminAllUsers from "./pages/AdminPages/AdminAllUsers";
import AdminUploadLesson from "./pages/AdminPages/AdminUploadLesson";


import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Login />;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected */}
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/lessons" element={<ProtectedRoute element={<Lessons />} />} />
          <Route path="/progress" element={<ProtectedRoute element={<Progress />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/notifications" element={<ProtectedRoute element={<UserNotifications />} />} />
          <Route path="/profile/edit" element={<ProtectedRoute element={<EditProfile />} />} />
          <Route path="/notification/new-lesson" element={<NewLessonNotification />} />

          {/* ADMIN */}
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/users" element={<AdminAllUsers />} />
          <Route path="/admin/lessons/upload" element={<AdminUploadLesson />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
