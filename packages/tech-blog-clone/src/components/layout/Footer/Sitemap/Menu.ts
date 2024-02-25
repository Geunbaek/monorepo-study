import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import type { MenuInfo } from ".";

class Menu extends Component {
  // @ts-ignore
  props!: {
    menuInfo: MenuInfo;
  };

  getElement = () => {
    return createElement({
      tagName: "ul",
      props: {
        class: "sitemap__menu__container",
      },
      children: [
        createElement({
          tagName: "div",
          props: {
            class: "sitemap__menu__title",
          },
          children: [
            createElement({
              tagName: "span",
              children: [this.props?.menuInfo.title],
            }),
          ],
        }),
        ...(this.props?.menuInfo.items).map((menuItem) =>
          createElement({
            tagName: "li",
            props: {
              class: "sitemap__menu__item",
            },
            children: [
              createElement({
                tagName: "a",
                props: {
                  class: "sitemap__menu__item__inner",
                },
                children: [
                  createElement({
                    tagName: "span",
                    children: [menuItem.name],
                  }),
                ],
              }),
            ],
          })
        ),
      ],
    });
  };
}

export default Menu;
