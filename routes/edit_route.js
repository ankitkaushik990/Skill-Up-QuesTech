const express = require("express");
const router = express.Router();
const {
  questionCreate,
  getquestion,
  geteasy,
  getMedium,
  getHard,
} = require("../controller/edit_controlller");

router.route("/create").post(questionCreate);
router.route("/get").get(getquestion);
router.route("/get/easy").get(geteasy);
router.route("/get/medium").get(getMedium);
router.route("/get/hard").get(getHard);

module.exports = router;
