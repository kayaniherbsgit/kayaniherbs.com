import Lesson from "../models/Lesson.js";

// Create Lesson (Admin only)
export const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create lesson", error: err.message });
  }
};

// Get all lessons
export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({ isPublished: true }).sort({ order: 1 });
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch lessons" });
  }
};

// Get single lesson
export const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ msg: "Lesson not found" });
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching lesson" });
  }
};
