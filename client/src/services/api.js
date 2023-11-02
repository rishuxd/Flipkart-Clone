import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling SignUp API ", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling Login API ", error);
    return error.response;
  }
};

export const getProducts = async () => {
  try {
    return await axios.get(`${URL}/products`);
  } catch (error) {
    console.log("Error while calling getProducts API ", error);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${URL}/product/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const addItemToCart = async (data) => {
  try {
    return await axios.post(`${URL}/cart`, data);
  } catch (error) {
    console.log("Error while adding item to cart", error);
  }
};

export const removeFromCart = async ({ userId, productId }) => {
  try {
    return await axios.delete(`${URL}/cart/${userId}/${productId}`);
  } catch (error) {
    console.log("Error while calling removeFromCart", error);
  }
};

export const getCartData = async (userId) => {
  try {
    return await axios.get(`${URL}/cart/${userId}`);
  } catch (error) {
    console.log("Error while getting cart data", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    console.log("PAYTM DATA", data);
    let response = await axios.post(`${URL}/payment`, data);
    console.log("PAYTM RES", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling payUsingPaytm", error);
  }
};
