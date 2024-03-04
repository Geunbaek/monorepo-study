import { createElement } from "lib/virtualDOM";
import Menu from "./Menu";
import Component from "lib/component";

import "./index.css";

class Header extends Component {
  Menu: Menu;

  constructor(render: () => void) {
    super(render);
    this.Menu = new Menu(this.render);
  }

  getElement = () => {
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
                class: "header__container__inner",
              },
              children: [
                createElement({
                  tagName: "div",
                  props: {
                    class: "header__container__logo",
                  },
                }),
                createElement({
                  tagName: this.Menu,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
}

export default Header;
