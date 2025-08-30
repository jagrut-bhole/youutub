import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";

import app from "./app.js";

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });

    app.on("error", (error) => {
      console.log("Server errr!!", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MONGO db connection FAILED !!!!", error);
  });

/*
//another method pf connecting to db

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
const app = express();
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8080
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Errrrr !!!", error);
      throw error;
    });

    app.listen(PORT, ()=> [
        console.log(`Server is running on port http://localhost/${PORT}`)
    ])
  } catch (error) {
    console.log("MONGODB connection FAILED !!!!", error);
  }
})();

*/
