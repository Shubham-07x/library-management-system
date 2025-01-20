const { Pool } = require("pg");
const pool = new Pool({
  user: "your_db_user",
  host: "your_db_host",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432,
});

const createUserTable = async () => {
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
};

const addUser = async (username, password_hash, role) => {
  const query = `
    INSERT INTO users (username, password_hash, role)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [username, password_hash, role];
  const res = await pool.query(query, values);
  return res.rows[0];
};

const getUserById = async (user_id) => {
  const query = `
    SELECT * FROM users WHERE user_id = $1;
  `;
  const values = [user_id];
  const res = await pool.query(query, values);
  return res.rows[0];
};

module.exports = {
  createUserTable,
  addUser,
  getUserById,
};
