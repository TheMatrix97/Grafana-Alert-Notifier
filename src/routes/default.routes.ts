import { Router } from "express";
import DefaultController from "../controllers/default.controller";

class DefaultRoutes {
  router = Router();
  controller = new DefaultController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.get("/", this.controller.index);
    this.router.get("/notify", this.controller.notify);
  }
}

export default new DefaultRoutes().router;