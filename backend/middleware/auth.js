import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader)
    return res.status(401).json({ msg: "No token, authorization denied" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token invalid or expired" });
  }
};

export default auth;
