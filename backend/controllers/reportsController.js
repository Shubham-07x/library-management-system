const pool = require("../config/db");

// Get all reports
const getReports = async (req, res) => {
  try {
    const query = "SELECT * FROM reports"; // Adjust the query as needed
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get master list of books
const getMasterListOfBooks = async (req, res) => {
  try {
    const query = "SELECT * FROM books"; // Adjust the query as needed
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching master list of books:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get master list of memberships
const getMasterListOfMemberships = async (req, res) => {
  try {
    const query = "SELECT * FROM memberships"; // Adjust the query as needed
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching master list of memberships:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get active issues
const getActiveIssues = async (req, res) => {
  try {
    const query = "SELECT * FROM transactions WHERE actual_return_date IS NULL"; // Adjust the query as needed
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching active issues:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get overdue returns
const getOverdueReturns = async (req, res) => {
  try {
    const query =
      "SELECT * FROM transactions WHERE return_date < NOW() AND actual_return_date IS NULL"; // Adjust the query as needed
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching overdue returns:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get issue requests
const getIssueRequests = async (req, res) => {
  try {
    const query = "SELECT * FROM issue_requests"; // Adjust the query as needed
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching issue requests:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getReports,
  getMasterListOfBooks,
  getMasterListOfMemberships,
  getActiveIssues,
  getOverdueReturns,
  getIssueRequests,
};
