const db = require("../config/db");

exports.addBook = async (req, res) => {
  const { type, name, procurementDate, quantity } = req.body;
  if (!type || !name || !procurementDate || !quantity) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    await db.query(
      "INSERT INTO books (type, name, procurement_date, quantity) VALUES ($1, $2, $3, $4)",
      [type, name, procurementDate, quantity]
    );
    res.status(201).json({ message: "Book/Movie added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding book/movie.", error });
  }
};

// Update book/movie details
exports.updateBook = async (req, res) => {
  const { id, status, name, serialNumber } = req.body;
  if (!id || !status || !name || !serialNumber) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    await db.query(
      "UPDATE books SET status = $1, name = $2, serial_number = $3 WHERE id = $4",
      [status, name, serialNumber, id]
    );
    res.status(200).json({ message: "Book/Movie updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating book/movie.", error });
  }
};

// Add a new membership
exports.addMembership = async (req, res) => {
  const {
    firstName,
    lastName,
    contact,
    address,
    aadhar,
    startDate,
    endDate,
    duration,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !contact ||
    !address ||
    !aadhar ||
    !startDate ||
    !endDate ||
    !duration
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    await db.query(
      "INSERT INTO memberships (first_name, last_name, contact, address, aadhar_card, start_date, end_date, duration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        firstName,
        lastName,
        contact,
        address,
        aadhar,
        startDate,
        endDate,
        duration,
      ]
    );
    res.status(201).json({ message: "Membership added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding membership.", error });
  }
};

// Update membership details
exports.updateMembership = async (req, res) => {
  const { membershipId, endDate, duration } = req.body;
  if (!membershipId || !endDate || !duration) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    await db.query(
      "UPDATE memberships SET end_date = $1, duration = $2 WHERE id = $3",
      [endDate, duration, membershipId]
    );
    res.status(200).json({ message: "Membership updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating membership.", error });
  }
};

// Add a new user
exports.addUser = async (req, res) => {
  const { name, isActive, isAdmin } = req.body;
  if (!name || isActive === undefined || isAdmin === undefined) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    await db.query(
      "INSERT INTO users (name, is_active, is_admin) VALUES ($1, $2, $3)",
      [name, isActive, isAdmin]
    );
    res.status(201).json({ message: "User added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding user.", error });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  const { userId, name, isActive, isAdmin } = req.body;
  if (!userId || !name || isActive === undefined || isAdmin === undefined) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    await db.query(
      "UPDATE users SET name = $1, is_active = $2, is_admin = $3 WHERE id = $4",
      [name, isActive, isAdmin, userId]
    );
    res.status(200).json({ message: "User updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user.", error });
  }
};
