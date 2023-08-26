import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { renderPage } from "vite-plugin-ssr/server";
import NextAuthHandler from "./auth/next.js";

import fetch, { Headers, Request, Response } from "cross-fetch";

if (!global.fetch) {
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;
}

const root = process.cwd();
const isProduction = process.env.NODE_ENV === "production";

async function startServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  // Vite integration
  if (isProduction) {
    // In production, we need to serve our static assets ourselves.
    // (In dev, Vite's middleware serves our static assets.)
    const sirv = (await import("sirv")).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our production server.)
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // const renderPage = renderPage({ viteDevServer, isProduction, root });

  app.get("/api/auth/*", (req, res) => {
    const nextauth = req.path.split("/");
    nextauth.splice(0, 3);
    req.query.nextauth = nextauth;

    NextAuthHandler(req, res);
  });

  app.post("/api/auth/*", (req, res) => {
    console.log("POST: req.path", req.path);
    const nextauth = req.path.split("/");
    nextauth.splice(0, 3);
    console.log("POST: nextauth", nextauth);
    req.query.nextauth = nextauth;

    NextAuthHandler(req, res);
  });

  app.get("*", async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) {
      return next();
    } else {
      const { body, statusCode, headers, earlyHints } = httpResponse;
      if (res.writeEarlyHints)
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      headers.forEach(([name, value]) => res.setHeader(name, value));
      res.status(statusCode);
      // For HTTP streams use httpResponse.pipe() instead, see https://vite-plugin-ssr.com/stream
      res.send(body);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

startServer();
