import cookieParser from "cookie-parser";
import express from "express";
import { renderPage } from "vite-plugin-ssr/server";
import { root } from "./root.js";
import { checkCredentials, getUser } from "./users.js";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

const startServer = async () => {
  const app = express();
  auth(app);
  await assets(app);
  ssr(app);
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
};

const auth = (app) => {
  app.use(cookieParser());
  app.use((req, _res, next) => {
    const { username } = req.cookies;
    const user = !username ? null : getUser(username);
    req.user = user;
    next();
  });
  app.use(express.json()); // Parse & make HTTP request body available at `req.body`
  app.post("/_auth/login", (req, res) => {
    const { username, password } = req.body;
    const user = checkCredentials(username, password);
    if (user) {
      res.cookie("username", username, {
        maxAge: 24 * 60 * 60 * 1000, // One day
        httpOnly: true, // Only the server can read the cookie
      });
    }
    const success = !!user;
    res.end(JSON.stringify({ success }));
  });
  app.post("/_auth/logout", (_req, res) => {
    res.clearCookie("username");
    res.end();
  });
};

const assets = async (app) => {
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }
};

const ssr = (app) => {
  app.get("*", async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      user: req.user,
      userFullName: req.user?.fullName,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) {
      return next();
    } else {
      const { body, statusCode, headers } = httpResponse;
      headers.forEach(([name, value]) => res.setHeader(name, value));
      res.status(statusCode).send(body);
    }
  });
};

startServer();
