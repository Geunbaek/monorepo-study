import { createElement } from "lib/virtualDOM";

const Menu = () => {
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
        children: ["개발"],
      }),
      createElement({
        tagName: "button",
        props: {
          class:
            "header__container__nav__item header__container__nav__item--active",
        },
        children: ["채용 바로가기"],
      }),
    ],
  });
};

export default Menu;
