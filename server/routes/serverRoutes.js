const router = require("express").Router();
const ToDo = require("../models/todoModel");

// add a ToDo
router.post("/todos", async (req, res) => {
  try {
    const todo = new ToDo(req.body);
    await todo.save();
    return res.send({ success: true, message: "ToDo added successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// update a ToDo
router.put("/todos/:id", async (req, res) => {
  try {
    await ToDo.findByIdAndUpdate(req.params.id, req.body);
    return res.send({ success: true, message: "ToDo updated successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// delete a ToDo
router.delete("/todos/:id", async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);
    return res.send({ success: true, message: "ToDo deleted successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// delete all ToDo
router.delete("/todos", async (req, res) => {
  try {
    await ToDo.deleteMany();
    return res.send({ success: true, message: "ToDo deleted successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// get all ToDos
router.get("/todos", async (req, res) => {
  try {
    const todos = await ToDo.find().sort({ createdAt: -1 });
    return res.send({ success: true, data: todos });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});


module.exports = router;
