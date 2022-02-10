import jwt from 'jsonwebtoken';
const dotenv = require('dotenv');
dotenv.config();

/* eslint consistent-return: off */
const verifyToken = async (req, res, next) => {
  const token = req.header('x-auth-token');
  try {
    if (!token) {
      return res.status(403).json('Access Denied');
    }
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    // res.send(decoded.id);
    req.user = decoded;
    next();
  } catch (error) {
    return error;
  }
};
export default verifyToken;
