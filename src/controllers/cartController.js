import Cart from "../models/Cart.js";

// CREATE CART
export const createCart = async (req, res) => {
  try {
    const existingCart = await Cart.findOne({ userId: req.user.id });

    if (existingCart) {
      return res.status(400).json("User already has a cart");
    }

    const newCart = new Cart({
      userId: req.user.id,
      products: req.body.products,
    });

    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE CART
export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: req.params.userId },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE CART
export const deleteCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.params.userId });
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET USER CART
export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      return res.status(404).json("Cart not found");
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL CARTS (ADMIN)
export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};