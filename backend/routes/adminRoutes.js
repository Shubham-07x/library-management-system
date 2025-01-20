const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const validateMiddleware = require("../middlewares/validateMiddleware");

// Middleware to check if the user is an admin
router.use(authMiddleware.verifyToken, authMiddleware.isAdmin);

// Route to add a new book
router.post(
  "/addBook",
  validateMiddleware.validateBook,
  adminController.addBook
);

// Route to update book details
router.put(
  "/updateBook/:book_id",
  validateMiddleware.validateBook,
  adminController.updateBook
);

// Route to add a new membership
router.post("/addMembership", adminController.addMembership);

// Route to update membership details
router.put(
  "/updateMembership/:membership_id",
  adminController.updateMembership
);

// Route to manage users (add/update)
router.post(
  "/addUser",
  validateMiddleware.validateUser,
  adminController.addUser
);
router.put(
  "/updateUser/:user_id",
  validateMiddleware.validateUser,
  adminController.updateUser
);

module.exports = router;
