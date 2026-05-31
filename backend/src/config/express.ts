import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server Started");
});

export {app, Request, Response, express, NextFunction };
