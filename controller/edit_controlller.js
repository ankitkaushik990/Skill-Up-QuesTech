const questionService = require("../service/edit_service");

exports.questionCreate = async (req, res) => {
  console.log("question created here");
  try {
    const { title, option, answer, type } = req.body;
    const { _id } = req.query;
    await questionService.createQuestion(_id, title, option, answer, type);
    res.status(200).send({ msg: "question Added in question bank" });
  } catch (error) {
    console.log("error during question Creation :", error);
    res.status(400).send({ message: error.message });
  }
};

exports.getquestion = async (req, res) => {
  console.log("here we get all the question");
  try {
    let allques = await questionService.getQuestion();
    res.status(200).send(allques);
  } catch (error) {
    console.log("error during question execution:", error);
    res.status(400).send({ message: error.message });
  }
};

exports.geteasy = async (req, res) => {
  try {
    let easyques = await questionService.getEasy();
    res.status(200).send(easyques);
  } catch (error) {
    console.log("error during question execution:", error);
    res.status(400).send({ message: error.message });
  }
};

exports.getMedium = async (req, res) => {
  try {
    let mediumques = await questionService.getMedium();
    res.status(200).send(mediumques);
  } catch (error) {
    console.log("error during question execution:", error);
    res.status(400).send({ message: error.message });
  }
};

exports.getHard = async (req, res) => {
  try {
    let hardques = await questionService.getHard();
    res.status(200).send(hardques);
  } catch (error) {
    console.log("error during question execution:", error);
    res.status(400).send({ message: error.message });
  }
};
