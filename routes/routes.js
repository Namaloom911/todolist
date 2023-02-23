const asyncWrapper = require("../asyncwrapper");
//const { findOneAndUpdate } = require("../models/task");
const task = require("../models/task");

const getAllTasks = asyncWrapper(async (req, res) => {
  const Tasks = await task.find();
  res.status(200).json({ Tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const Task = await task.create(req.body);
  res.status(200).json({ Task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const tasks = await task.findOne({ _id: taskID });
  if (!tasks) {
    return res.status(404).json({ msg: "No task found with : " + taskID });
  } else res.status(200).json({ tasks });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const tasks = await task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!tasks) {
    return res.status(404).json({ msg: "No task found with : " + taskID });
  } else res.status(200).json(tasks);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const tasks = await task.findOne({ _id: taskID });
  if (!tasks) {
    return res.status(404).json({ msg: "No task found with : " + taskID });
  } else res.status(200).json(true);
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
