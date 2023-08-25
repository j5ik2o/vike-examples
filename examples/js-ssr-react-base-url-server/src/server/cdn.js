import assert from "assert";
import cors from "cors";
import express from "express";
import { baseAssets } from "../base.js";
import { createExpressApp } from "./createExpressApp.js";

assert(baseAssets === "http://localhost:8080/cdn/");
const { app, startApp } = createExpressApp({ base: "/cdn/", port: 8080 });

const root = process.cwd();

app.use(cors()); // Enable cross-origin requests from our SSR server `http://localhost:3000`
app.use(express.static(`${root}/dist/client`));

startApp();
console.log(`CDN running at ${baseAssets}`);
