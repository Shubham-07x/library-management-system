const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Hash a password using bcrypt
 * @param {string} password - The plain text password
 * @returns {Promise<string>} - The hashed password
 */
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

/**
 * Compare a plain text password with a hashed password
 * @param {string} password - The plain text password
 * @param {string} hashedPassword - The hashed password
 * @returns {Promise<boolean>} - True if the passwords match, false otherwise
 */
const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

/**
 * Generate a JWT token
 * @param {Object} payload - The payload to include in the token
 * @param {string} secret - The secret key to sign the token
 * @param {Object} options - Additional options for the token
 * @returns {string} - The generated JWT token
 */
const generateToken = (payload, secret, options) => {
  const token = jwt.sign(payload, secret, options);
  return token;
};

/**
 * Verify a JWT token
 * @param {string} token - The JWT token to verify
 * @param {string} secret - The secret key to verify the token
 * @returns {Object} - The decoded token payload
 */
const verifyToken = (token, secret) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
