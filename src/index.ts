import express, { Application } from "express";
import dotenv from "dotenv"
import { Routes } from "./routes";

const app: Application = express();

//parse dotenv
dotenv.config();

const port: number = Number(process.env.PORT) || 3000

// Add general middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add Routes
Routes.appendTo(app);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});