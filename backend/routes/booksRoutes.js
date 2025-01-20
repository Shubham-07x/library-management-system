const express = require("express");
const { addBook, updateBook } = require("../controllers/booksController");

const router = express.Router();

router.post("/", addBook);
router.put("/:id", updateBook);

module.exports = router;
