const { verify } = require("jsonwebtoken");
const Ques = require("../model/questionBank");

const User = require("../model/user");

verifyAdmin = async function (_id) {
  console.log(`in verifying the question `);
  let user = await User.findById(_id);
  console.log(user);
  if (!user) throw new Error("User not found");
  if (!user.token)
    throw new Error("You are not logged in. Please login to continue");
  if (user.isAdmin === false)
    throw new Error("You are unauthorized to create a question");
};

exports.createQuestion = async (_id, title, option, answer, type) => {
  await verifyAdmin(_id);
  console.log(`in queston creation`);
  const ques = new Ques({ title, option, answer, type });
  await ques.save();
  console.log("question created successfully ");
  return ques;
};

exports.getQuestion = async (_id) => {
  return await Ques.find({}, { _id: 0, __v: 0, type: 0 });
};

exports.getEasy = async () => {
  return await Ques.find({ type: "easy" }, { _id: 0, __v: 0, type: 0 });
};

exports.getMedium = async () => {
  return await Ques.find({ type: "medium" }, { _id: 0, __v: 0, type: 0 });
};

exports.getHard = async () => {
  return await Ques.find({ type: "hard" }, { _id: 0, __v: 0, type: 0 });
};
