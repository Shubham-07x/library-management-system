const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const query = "SELECT * FROM users WHERE user_id = $1";
    const values = [req.user.id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const query = `
      UPDATE users
      SET username = $1, password_hash = $2, role = $3
      WHERE user_id = $4
      RETURNING *;
    `;
    const values = [username, hashedPassword, role, req.user.id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
