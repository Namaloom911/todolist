const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    string: true,
    trim: true,
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("task", TaskSchema);
