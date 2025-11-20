import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";
import { updateUser } from "../controllers/userController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.patch("/update", auth, upload.single("profileImage"), updateUser);

export default router;
