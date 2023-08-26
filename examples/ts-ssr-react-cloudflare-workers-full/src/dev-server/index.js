// We use a Express.js server for development
import express from "express";
import vite from "vite";
import { renderPage } from "vite-plugin-ssr/server";

const startServer = async () => {
  const app = express();
  const fetch = await import("node-fetch");
  const compression = await import("compression");

  // We don't need gzip compression for dev. We use compression just to show
  // that it's properly handled by vite-plugin-ssr and react-streaming.
  app.use(compression());

  const viteDevMiddleware = (
    await vite.createServer({
      server: { middlewareMode: true },
    })
  ).middlewares;
  app.use(viteDevMiddleware);

  app.get("*", async (req, res, next) => {
    const userAgent = req.headers["user-agent"];
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      fetch,
      userAgent,
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

  const port = 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
};

startServer();
