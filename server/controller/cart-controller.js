import User from "../model/userSchema.js";

export const addToCart = async (req, res) => {
  const { userId, product, quantity } = req.body;

  try {
    const user = await User.findOne({ userId: userId });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Check if the product already exists in the cart
    const existingCartItemIndex = user.cartItems.findIndex((item) => {
      return item.product.id === product.id;
    });

    if (existingCartItemIndex !== -1) {
      user.cartItems[existingCartItemIndex].product.quantity += quantity;
      user.markModified("cartItems");
    } else {
      const cartItem = { product };
      user.cartItems.push(cartItem);
    }

    await user.save();

    res.send("Item added to cart");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while adding item to cart");
  }
};

export const getCart = async (req, res) => {
  console.log("==========================", req.params);
  const { userId } = req.params;

  try {
    const user = await User.findOne({ userId: userId });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user.cartItems);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;
  console.log(userId, productId);

  try {
    const user = await User.findOne({ userId: userId });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const item = user.cartItems.find((item) => item.product.id === productId);

    if (!item) {
      return res.status(404).send("Item not found in cart");
    }

    user.cartItems.pull(item);
    await user.save();

    res.send("Item removed from cart");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
