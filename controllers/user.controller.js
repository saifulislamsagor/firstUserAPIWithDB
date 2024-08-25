const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//create a new user
const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = new user({
      id: uuidv4(),
      name,
      age: Number(age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


//update a user
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({id:req.params.id});
    const { name, age } = req.body;
    user.name = name;
    user.age = Number(age);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ id: req.params.id });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User successfully deleted", user: deletedUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
