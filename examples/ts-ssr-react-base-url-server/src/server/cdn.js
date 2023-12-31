import express from "express";
import { createExpressApp } from "./createExpressApp.js";
import cors from "cors";
import { baseAssets } from "../base.js";
import assert from "assert";

assert(baseAssets === "http://localhost:8080/cdn/");
const { app, startApp } = createExpressApp({ base: "/cdn/", port: 8080 });

const root = process.cwd();

app.use(cors()); // Enable cross-origin requests from our SSR server `http://localhost:3000`
app.use(express.static(`${root}/dist/client`));

startApp();
console.log(`CDN running at ${baseAssets}`);
