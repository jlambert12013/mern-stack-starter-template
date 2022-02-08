const express = require("express");
const router = express.Router();

// Importing Controller Functions
const {
  setGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Controllers
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
