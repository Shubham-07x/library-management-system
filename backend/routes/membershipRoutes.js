const express = require("express");
const {
  addMembership,
  updateMembership,
  getMemberships,
  getMembershipById,
  deleteMembership,
} = require("../controllers/membershipsController");

const router = express.Router();

// Route to add a new membership
router.post("/", addMembership);

// Route to update an existing membership
router.put("/:id", updateMembership);

// Route to get all memberships
router.get("/", getMemberships);

// Route to get a membership by ID
router.get("/:id", getMembershipById);

// Route to delete a membership
router.delete("/:id", deleteMembership);

module.exports = router;
