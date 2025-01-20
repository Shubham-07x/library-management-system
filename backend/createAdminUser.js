const bcrypt = require("bcrypt");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createAdminUser = async () => {
  const username = "admin";
  const password = "password123"; // Change this to a secure password
  const role = "Admin";

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO users (username, password_hash, role)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [username, hashedPassword, role];

  try {
    const res = await pool.query(query, values);
    console.log("Admin user created:", res.rows[0]);
  } catch (err) {
    console.error("Error creating admin user:", err);
  } finally {
    pool.end();
  }
};

createAdminUser();
