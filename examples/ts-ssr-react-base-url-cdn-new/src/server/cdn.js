import cors from "cors";
import express from "express";
import { createExpressApp } from "./createExpressApp.js";
import { root } from "./root.js";

const { app, startApp } = createExpressApp({ base: "/cdn/", port: 8080 });
app.use(cors()); // Enable cross-origin requests from our server `http://localhost:3000`
app.use(express.static(`${root}/../dist/client`));
startApp();
console.log(`CDN running at http://localhost:8080/cdn`);
