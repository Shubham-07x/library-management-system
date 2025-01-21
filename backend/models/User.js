const pool = require("../config/db");

const createUserTable = async () => {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role VARCHAR(10) CHECK (role IN ('Admin', 'User')) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(query);
    console.log("Users table created or already exists.");
  } catch (err) {
    console.error("Error creating users table:", err);
    throw err;
  }
};

const addUser = async (username, password_hash, role) => {
  try {
    const query = `
      INSERT INTO users (username, password_hash, role)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [username, password_hash, role];
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error("Error adding user:", err);
    throw err;
  }
};

const getUserById = async (user_id) => {
  try {
    const query = `SELECT * FROM users WHERE user_id = $1;`;
    const res = await pool.query(query, [user_id]);
    return res.rows[0];
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    throw err;
  }
};

module.exports = { createUserTable, addUser, getUserById };
