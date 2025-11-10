import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";

// CLOUDINARY CONFIG
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// SIGNUP
export const signup = async (req, res) => {
  try {
    const {
      fullName,
      username,
      email,
      phone,
      whatsapp,
      region,
      password,
    } = req.body;

    // Basic presence checks
    if (!fullName || !username || !email || !phone || !region || !password) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Uniqueness checks (email + username)
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      const which = existing.email === email ? "Email" : "Username";
      return res.status(409).json({ success: false, message: `${which} already exists` });
    }

    // Upload image if exists
    let profileImage = "";
    if (req.file) {
      const uploaded = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "kayani_users",
      });
      profileImage = uploaded.secure_url;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      username,
      email,
      phone,
      whatsapp,
      region,
      profileImage,
      password: hashedPassword,
    });

    // Hide password before sending out
    const { password: _pw, ...safeUser } = user.toObject();

    return res
      .status(201)
      .json({ success: true, message: "Account created successfully", user: safeUser });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ success: false, message: "Signup error" });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Normalize
    const normalizedEmail = (email || "").trim().toLowerCase();
    if (!normalizedEmail || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "dev-fallback-secret",
      { expiresIn: "7d" }
    );

    const { password: _pw, ...safeUser } = user.toObject();

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Login error" });
  }
};
