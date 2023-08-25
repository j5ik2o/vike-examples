import express from "express";
import { telefunc } from "telefunc";
import { renderPage } from "vite-plugin-ssr/server";

const root = process.cwd();
const isProduction = process.env.NODE_ENV === "production";

const startServer = async () => {
  const app = express();

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

  app.use(express.text()); // Parse & make HTTP request body available at `req.body`
  app.all("/_telefunc", async (req, res) => {
    const context = {};
    const httpResponse = await telefunc({
      url: req.originalUrl,
      method: req.method,
      body: req.body,
      context,
    });
    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
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
      const { statusCode, headers } = httpResponse;
      headers.forEach(([name, value]) => res.setHeader(name, value));
      res.status(statusCode);
      httpResponse.pipe(res);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
};

startServer();
