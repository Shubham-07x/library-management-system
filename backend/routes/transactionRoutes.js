const express = require("express");
const {
  issueBook,
  returnBook,
  payFine,
} = require("../controllers/transactionsController");

const router = express.Router();

// Route to issue a book
router.post("/issue", issueBook);

// Route to return a book
router.post("/return", returnBook);

// Route to pay a fine
router.post("/payFine", payFine);

module.exports = router;
