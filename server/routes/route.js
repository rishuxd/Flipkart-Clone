import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { addPaymentGateway } from "../controller/payment-controller.js";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controller/cart-controller.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.get("/products", getProducts);
Router.get("/product/:id", getProductById);
Router.post("/cart", addToCart);
Router.get("/cart/:userId", getCart);
Router.delete("/cart/:userId/:productId", removeFromCart);
Router.post("/payment", addPaymentGateway);

export default Router;
