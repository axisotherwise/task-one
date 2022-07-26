import express from "express";
import morgan from "morgan";
import nunjucks from "nunjucks";

import connect from "./schemas/index.js";

import indexRoutes from "./routes/index.js";
import articleRoutes from "./routes/article.js";
import commentRoutes from "./routes/comment.js";

import { error404, error } from "./middlewares/error.js";

class App {
  constructor() {
    this.app = express();
    this.setViewEngine();
    this.setDatabase();
    this.setMiddleWare();
    this.setRouter();
    this.setErrorHandler();
  }

  setViewEngine() {
    this.app.set("view engine", "html");
    nunjucks.configure("views", {
      express: this.app,
      watch: true,
    });
  }
  setDatabase() {
    connect();
  }
  setMiddleWare() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  setRouter() {
    this.app.use("/", indexRoutes);
    this.app.use("/article", articleRoutes);
    this.app.use("/comment", commentRoutes);
  }
  setErrorHandler() {
    this.app.use(error404);
    this.app.use(error);
  }
}

export default new App().app;