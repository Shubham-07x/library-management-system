const express = require("express");
const {
  issueBook,
  returnBook,
  payFine,
} = require("../controllers/transactionsController");

const router = express.Router();

router.post("/issue", issueBook);
router.post("/return", returnBook);
router.post("/pay-fine", payFine);

module.exports = router;
