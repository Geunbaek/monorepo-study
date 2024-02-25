import Router from "lib/router";
import { createVirtualDOM } from "lib/virtualDOM";

import { worker } from "./mocks/browser";

import "./index.css";
import Main from "./pages/Main";
import Page404 from "./pages/404";
import Detail from "./pages/Detail";

await worker.start();

const root = document.getElementById("app")!;
const { render } = createVirtualDOM(root);

const router = Router(render)
  .add("/", Main)
  .add("/:id", Detail)
  .setDefault(Page404)
  .init();

export { router };
