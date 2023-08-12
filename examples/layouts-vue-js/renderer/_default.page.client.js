import { createApp } from "./app";
import "./app.css";

let app;

const render = async (pageContext) => {
  if (!app) {
    app = createApp(pageContext);
    app.mount("#app");
  } else {
    app.changePage(pageContext);
  }
};

const clientRouting = true;

export { render, clientRouting };
