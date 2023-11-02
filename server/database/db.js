import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-cmxezqk-shard-00-00.jamfwb4.mongodb.net:27017,ac-cmxezqk-shard-00-01.jamfwb4.mongodb.net:27017,ac-cmxezqk-shard-00-02.jamfwb4.mongodb.net:27017/?ssl=true&replicaSet=atlas-h7eou1-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    // create connection with mongoDB
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting with database ", error.message);
  }
};

export default Connection;
