// controllers/userController.js
import { v2 as cloudinary } from "cloudinary";
import User from "../models/User.js";

// cloudinary should already be configured in your authController or a common config file.
// If not, configure it here (same as authController).
// cloudinary.config({ cloud_name:..., api_key:..., api_secret:... });

export const updateUser = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware
    if (!userId) return res.status(401).json({ success:false, message: "Unauthorized" });

    const updatable = ["fullName", "username", "email", "phone", "whatsapp", "region"];
    const updatePayload = {};

    // only copy allowed fields (prevents accidental overwrite)
    updatable.forEach((k) => {
      if (req.body[k] !== undefined && req.body[k] !== "") updatePayload[k] = req.body[k];
    });

    // if an image file is provided, upload to Cloudinary
    if (req.file) {
      const uploaded = await cloudinary.uploader.upload(req.file.path, {
        folder: "kayani_users",
      });
      updatePayload.profileImage = uploaded.secure_url;
    }

    // find and update
    const updated = await User.findByIdAndUpdate(
      userId,
      { $set: updatePayload },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updated) return res.status(404).json({ success:false, message: "User not found" });

    return res.status(200).json({ success: true, user: updated });
  } catch (err) {
    console.error("Update user error:", err);
    return res.status(500).json({ success:false, message: "Could not update profile" });
  }
};
