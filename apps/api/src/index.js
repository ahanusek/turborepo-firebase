import express from "express";
const { onRequest } = require('firebase-functions/v2/https');
import { sumValues, fibonacci } from "@shared/core";

const app = express();

app.get("*", (req, res) => {
  res.send({
    sum: sumValues([5, 8, 9, 3, 87, 656]),
    fibo: fibonacci(req.query.fibo ?? 10),
    time: Date.now(),
    origin: req.hostname,
  });
});

export const server = onRequest(app);
