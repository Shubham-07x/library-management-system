const pool = require("../config/db");

// Add a new membership
const addMembership = async (req, res) => {
  const {
    first_name,
    last_name,
    contact_number,
    contact_address,
    aadhar_card_no,
    start_date,
    end_date,
    status,
    fine_amount,
  } = req.body;

  try {
    const query = `
      INSERT INTO memberships (first_name, last_name, contact_number, contact_address, aadhar_card_no, start_date, end_date, status, fine_amount)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;
    const values = [
      first_name,
      last_name,
      contact_number,
      contact_address,
      aadhar_card_no,
      start_date,
      end_date,
      status,
      fine_amount,
    ];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "Membership added successfully",
      membership: result.rows[0],
    });
  } catch (error) {
    console.error("Error adding membership:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing membership
const updateMembership = async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    contact_number,
    contact_address,
    aadhar_card_no,
    start_date,
    end_date,
    status,
    fine_amount,
  } = req.body;

  try {
    const query = `
      UPDATE memberships
      SET first_name = $1, last_name = $2, contact_number = $3, contact_address = $4, aadhar_card_no = $5, start_date = $6, end_date = $7, status = $8, fine_amount = $9
      WHERE membership_id = $10
      RETURNING *;
    `;
    const values = [
      first_name,
      last_name,
      contact_number,
      contact_address,
      aadhar_card_no,
      start_date,
      end_date,
      status,
      fine_amount,
      id,
    ];

    const result = await pool.query(query, values);
    res.status(200).json({
      message: "Membership updated successfully",
      membership: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating membership:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all memberships
const getMemberships = async (req, res) => {
  try {
    const query = "SELECT * FROM memberships";
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching memberships:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a membership by ID
const getMembershipById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM memberships WHERE membership_id = $1";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Membership not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching membership:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a membership
const deleteMembership = async (req, res) => {
  const { id } = req.params;

  try {
    const query =
      "DELETE FROM memberships WHERE membership_id = $1 RETURNING *";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Membership not found" });
    }

    res.status(200).json({
      message: "Membership deleted successfully",
      membership: result.rows[0],
    });
  } catch (error) {
    console.error("Error deleting membership:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addMembership,
  updateMembership,
  getMemberships,
  getMembershipById,
  deleteMembership,
};
