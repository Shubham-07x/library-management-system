const pool = require("../config/db");

// Get user profile
const getUserProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const query = "SELECT * FROM users WHERE user_id = $1";
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const userId = req.user.userId;
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      UPDATE users
      SET username = $1, password_hash = $2
      WHERE user_id = $3
      RETURNING *;
    `;
    const values = [username, hashedPassword, userId];

    const result = await pool.query(query, values);
    res.status(200).json({
      message: "User profile updated successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
