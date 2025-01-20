const pool = require("../config/db");

// Issue a book
const issueBook = async (req, res) => {
  const { book_id, membership_id, issue_date, return_date } = req.body;

  try {
    const query = `
      INSERT INTO transactions (book_id, membership_id, issue_date, return_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [book_id, membership_id, issue_date, return_date];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "Book issued successfully",
      transaction: result.rows[0],
    });
  } catch (error) {
    console.error("Error issuing book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Return a book
const returnBook = async (req, res) => {
  const { transaction_id, actual_return_date, fine_calculated, fine_paid } =
    req.body;

  try {
    const query = `
      UPDATE transactions
      SET actual_return_date = $1, fine_calculated = $2, fine_paid = $3
      WHERE transaction_id = $4
      RETURNING *;
    `;
    const values = [
      actual_return_date,
      fine_calculated,
      fine_paid,
      transaction_id,
    ];

    const result = await pool.query(query, values);
    res.status(200).json({
      message: "Book returned successfully",
      transaction: result.rows[0],
    });
  } catch (error) {
    console.error("Error returning book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Pay a fine
const payFine = async (req, res) => {
  const { transaction_id, fine_paid } = req.body;

  try {
    const query = `
      UPDATE transactions
      SET fine_paid = $1
      WHERE transaction_id = $2
      RETURNING *;
    `;
    const values = [fine_paid, transaction_id];

    const result = await pool.query(query, values);
    res
      .status(200)
      .json({ message: "Fine paid successfully", transaction: result.rows[0] });
  } catch (error) {
    console.error("Error paying fine:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { issueBook, returnBook, payFine };
