import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import "./index.css";

const TEXT = {
  company: "(주)비바퍼블리카",
  copyright: "Copyright © Viva Republica, Inc. All Rights Reserved.",
};

class Copyright extends Component {
  getElement = () => {
    return createElement({
      tagName: "div",
      props: {
        class: "copyright__container",
      },
      children: [
        createElement({
          tagName: "div",
          props: {
            class: "copyright__title",
          },
          children: [
            createElement({
              tagName: "span",
              children: [TEXT.company],
            }),
          ],
        }),
        createElement({
          tagName: "div",
          props: {
            class: "copyright__description",
          },
          children: [
            createElement({
              tagName: "span",
              children: [TEXT.copyright],
            }),
          ],
        }),
      ],
    });
  };
}

export default Copyright;
