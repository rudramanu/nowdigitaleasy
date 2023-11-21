const express = require("express");
const { UserModel } = require("../models/user.model");
const userRouter = express.Router();

userRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const user = new UserModel(payload);
    await user.save();
    res.status(200).send({ message: "User added" });
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.find({ _id: id });
    res.send({ message: user });
  } catch (error) {
    res.send({ message: "Something went wrong while getting employee" });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send({ message: "User deleted from database" });
  } catch (error) {
    res.send({ message: "Something went wrong while deleting user" });
  }
});

userRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ message: "User details updated" });
  } catch (error) {
    res.send({ message: "Something went wrong while updating employee" });
  }
});

module.exports = { userRouter };
