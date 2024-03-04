import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import "./index.css";

class Menu extends Component {
  setEvent = () => {
    const button = document.querySelector(".header__container__nav__item");
    button?.removeEventListener("click", this.handleClick);
    button?.addEventListener("click", this.handleClick);
  };

  handleClick = () => {
    this.setState({
      name: "asd",
    });
  };

  getElement = () => {
    return createElement({
      tagName: "nav",
      props: {
        class: "header__container__nav",
      },
      children: [
        createElement({
          tagName: "button",
          props: {
            class: "header__container__nav__item",
          },
          children: [
            createElement({
              tagName: "span",
              children: ["개발"],
            }),
          ],
        }),
        createElement({
          tagName: "a",
          props: {
            class:
              "header__container__nav__item header__container__nav__item--active",
          },
          children: [
            createElement({
              tagName: "span",
              children: ["채용 바로가기"],
            }),
          ],
        }),
      ],
    });
  };
}

export default Menu;
