const User = require('../models/User');

exports.getAll = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

exports.register = async (req, res) => {
  console.log('did i arrive here?', req.body)
  const user = new User({ name: req.body.name, email: req.body.email });
  const result = await user.save();
  res.json(result);
};

exports.getOneById = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.json(user);
};

exports.getOneAndUpdate = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).exec();
  res.json(user);
};

exports.removeOne = async (req, res) => {
  const user = await User.findOneAndRemove({ _id: req.params.id });
  res.json(user);
};
