import mongoose from "mongoose";

const lessonStepSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["text", "audio", "video", "youtube", "file", "reflection"],
    required: true
  },
  title: String,
  content: String, // could be text, URL, or question
  duration: Number // in seconds (optional)
});

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  order: { type: Number, required: true },
  category: String,
  steps: [lessonStepSchema],
  isPublished: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Lesson", lessonSchema);
