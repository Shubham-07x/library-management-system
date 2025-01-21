const pool = require("../config/db");

// Add a new book
const addBook = async (req, res) => {
  const { title, author, category, status, cost, procurement_date, quantity } =
    req.body;

  try {
    const query = `
      INSERT INTO books (title, author, category, status, cost, procurement_date, quantity)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [
      title,
      author,
      category,
      status,
      cost,
      procurement_date,
      quantity,
    ];

    const result = await pool.query(query, values);
    res
      .status(201)
      .json({ message: "Book added successfully", book: result.rows[0] });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing book
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, category, status, cost, procurement_date, quantity } =
    req.body;

  try {
    const query = `
      UPDATE books
      SET title = $1, author = $2, category = $3, status = $4, cost = $5, procurement_date = $6, quantity = $7
      WHERE book_id = $8
      RETURNING *;
    `;
    const values = [
      title,
      author,
      category,
      status,
      cost,
      procurement_date,
      quantity,
      id,
    ];

    const result = await pool.query(query, values);
    res
      .status(200)
      .json({ message: "Book updated successfully", book: result.rows[0] });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const query = "SELECT * FROM books";
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM books WHERE book_id = $1";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM books WHERE book_id = $1 RETURNING *";
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res
      .status(200)
      .json({ message: "Book deleted successfully", book: result.rows[0] });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addBook,
  updateBook,
  getBooks,
  getBookById,
  deleteBook,
};
