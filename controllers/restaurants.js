const Restaurant = require("../models/Restaurant");
// const City = require('../models/City');
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.json({
      success: true,
      msg: "Show all restaurants",
      data: restaurants,
    });
  } catch (err) {
    next(err);
  }
};

// const getRestaurant = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const restaurant = await Restaurant.findById(id);
//     res.json({
//       success: true,
//       msg: "Show selected Restaurant",
//       data: restaurant,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const createUser = async (req, res, next) => {
//   try {
//     const { name, surname, age } = req.body;
//     const user = await User.create({ name, surname, age});

//     res.json({ success: true, msg: 'show new user', data: user })
//   } catch(err) {
//     next(err)
//   }
// };

// const deleteUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);
//     res.json({ success: true, msg: `user with id ${id} deleted`, data: user })
//   } catch(err) {
//     next(err)
//   }
// };

// const updateUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name, surname, age } = req.body;

//     const user = await User.findByIdAndUpdate(id, { name, surname, age }, { new: true });
//     res.json({ success: true, msg: `user with id ${id} updated`, data: user })
//   } catch(err) {
//     next(err)
//   }
// };

// const getUserOrders = async (req, res, next) => {
//   // ?price[lte]=2000
//   try {
//     const { id } = req.params;
//     const queryStr = JSON.stringify(req.query).replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

//     const orders = await Order.find({ userId: ObjectId(id), ...JSON.parse(queryStr) })
//     res.json({ success: true, msg: `orders of user with user id ${id} retrieved`, data: orders })
//   } catch(err) {
//     next(err)
//   }
// };

module.exports = {
  getRestaurants,
  //   getRestaurant,
};
