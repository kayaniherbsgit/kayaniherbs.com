import express from "express";
import { createLesson, getLessons, getLessonById } from "../controllers/lessonController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// public: list & get
router.get("/", getLessons);
router.get("/:id", getLessonById);

// protected: only admin can create
router.post("/", auth, createLesson);

export default router;
