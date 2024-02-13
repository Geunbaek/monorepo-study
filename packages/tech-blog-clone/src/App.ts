import Router from "lib/router";
import { render } from "lib/virtualDOM";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import { worker } from "./mocks/browser";

import "./index.css";

await worker.start();

const root = document.getElementById("app")!;
const app = render(root);
const router = Router(app).add("/", Home).setDefault(Page404).init();

export { router };
