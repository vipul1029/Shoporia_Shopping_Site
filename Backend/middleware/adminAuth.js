import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    const validAdmin = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;
    if (token_decode !== validAdmin) {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;