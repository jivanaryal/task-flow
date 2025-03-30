import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";

const app = express();
const port = process.env.PORT;

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully 🚀");

    app.listen(port, () => {
      console.log(`Server is running at port:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

startServer();
