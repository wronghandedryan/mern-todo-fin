const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todoItem: { type: String, required: true },
  toDetail: { type: String, required: true }
});



const User = mongoose.model("todo", todoSchema);

module.exports = Todo;
