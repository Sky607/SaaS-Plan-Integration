const jwt = require('jsonwebtoken');
const secretKey="3e5c7e9484f33a8cfc5a4e1b1e556f47a2f8b8a7f7b7a6d91c8d9a4e7b8c2d7b"
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Access denied.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token. Access denied.' });
  }
};
