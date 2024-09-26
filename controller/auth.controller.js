const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    password: hashedPassword,
    role,
  });
  await newUser.save();
  res.status(201).json({ message: `${username} registered successfully` });
};

const login = async (req,res) => {
  const { username, password } = req.body;
  const user =await User.findOne({username});
  if(!user){
    res.status(400).json({message:"user not found"})
  }
  const isMatchedPassword=await bcrypt.compare(password,user.password)
  if(!isMatchedPassword){
    res.status(400).json({message:"password not matched"})
  }
  const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,
    {expiresIn:process.env.JWT_EXPIRES_IN}
  )
  res.status(200).json({message:"login successfully",token})
};

module.exports = { register, login };
