const express = require("express");
const {
  addMembership,
  updateMembership,
} = require("../controllers/membershipsController");

const router = express.Router();

router.post("/", addMembership);
router.put("/:id", updateMembership);

module.exports = router;
