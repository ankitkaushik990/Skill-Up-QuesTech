const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxlength: 500,
  },
  option: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length === 4;
      },
      msg: "Array must have a lenght of 4",
    },
  },
  answer: {
    type: String,
    validate: {
      validator: function (v) {
        return this.option.includes(v);
      },
      message: "Answer must be one of the options",
    },
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    validate: {
      validator: function (type) {
        const allowedType = ["easy", "medium", "hard"];
        if (allowedType.includes(type)) {
          return;
        } else {
          throw new Error(`Question can only be easy medium or hard `);
        }
      },
      message: "type of string can only be easy medium or hard",
    },
  },
});
module.exports = mongoose.model("Question", questionSchema);
