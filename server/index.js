import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.use(
  cors({
    origin: ["https://flipkart-clone-frontend-blond.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = 8000;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`Server running successfully on PORT ${PORT}`)
);

// DefaultData();
