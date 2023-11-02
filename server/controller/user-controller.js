import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ userId: request.body.userId });
    if (exist) {
      return response.status(401).json({ message: "userId already exists." });
    }
    const user = request.body;
    const newUser = new User(user);
    console.log(newUser);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const userId = request.body.userId;
    const password = request.body.password;

    let user = await User.findOne({ userId: userId, password: password });
    if (user) {
      return response.status(200).json({ data: user });
    } else {
      return response.status(401).json("Invalid login");
    }
  } catch (error) {
    response.status(500).json("Error", error.message);
  }
};
