import { Application } from "express";
import defaultRoutes from "./default.routes";

export abstract class Routes {
    public static appendTo(app: Application) {
        app.use("/api", defaultRoutes);
    }
}