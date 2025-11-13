
import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if Bearer token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Set userId from token to request body
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
