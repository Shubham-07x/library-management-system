const { verifyToken } = require("../utils/helperFunctions");
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Token required" });

  try {
    const decoded = verifyToken(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

const isAdmin = async (req, res, next) => {
  const query = "SELECT role FROM users WHERE user_id = $1";
  const values = [req.user.id];
  const result = await pool.query(query, values);
  if (result.rows.length === 0 || result.rows[0].role !== "Admin") {
    return res.status(403).json({ message: "Require Admin Role!" });
  }
  next();
};

module.exports = {
  verifyToken: verifyTokenMiddleware,
  isAdmin,
};
