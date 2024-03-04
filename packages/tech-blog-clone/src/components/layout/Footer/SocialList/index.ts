import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import "./index.css";

class SocialList extends Component {
  getElement = () => {
    return createElement({
      tagName: "div",
      props: {
        class: "social-list__container",
      },
      children: [
        createElement({
          tagName: "img",
          props: {
            class: "social-list__icon",
            src: "/assets/svgs/icn-facebook.svg",
          },
        }),
        createElement({
          tagName: "img",
          props: {
            class: "social-list__icon",
            src: "/assets/svgs/icn-blog.svg",
          },
        }),
        createElement({
          tagName: "img",
          props: {
            class: "social-list__icon",
            src: "/assets/svgs/icn-naver.svg",
          },
        }),
        createElement({
          tagName: "img",
          props: {
            class: "social-list__icon",
            src: "/assets/svgs/icn-twitter.svg",
          },
        }),
        createElement({
          tagName: "img",
          props: {
            class: "social-list__icon",
            src: "/assets/svgs/icn-instagram.svg",
          },
        }),
      ],
    });
  };
}

export default SocialList;
