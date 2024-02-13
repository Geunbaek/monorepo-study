import { createElement } from "lib/virtualDOM";

import "./index.css";
import Menu from "./Menu";

const Header = () => {
  return createElement({
    tagName: "header",
    props: {
      class: "header",
    },
    children: [
      createElement({
        tagName: "div",
        props: {
          class: "header__container",
        },
        children: [
          createElement({
            tagName: "div",
            props: {
              class: "header__container__logo",
            },
          }),
          createElement({
            tagName: Menu,
          }),
        ],
      }),
    ],
  });
};

export default Header;
