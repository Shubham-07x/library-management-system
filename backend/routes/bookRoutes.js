const express = require("express");
const {
  addBook,
  updateBook,
  getBooks,
  getBookById,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

// Route to add a new book
router.post("/", addBook);

// Route to update an existing book
router.put("/:id", updateBook);

// Route to get all books
router.get("/", getBooks);

// Route to get a book by ID
router.get("/:id", getBookById);

// Route to delete a book
router.delete("/:id", deleteBook);

module.exports = router;
