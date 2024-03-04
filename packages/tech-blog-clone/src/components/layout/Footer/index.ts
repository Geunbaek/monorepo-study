import Component from "lib/component";
import { createElement } from "lib/virtualDOM";
import Sitemap from "./Sitemap";

import "./index.css";
import Copyright from "./Copyright";
import SocialList from "./SocialList";

class Footer extends Component {
  Sitemap: Sitemap;
  Copyright: Copyright;
  SocialList: SocialList;

  constructor(render: () => void) {
    super(render);

    this.Sitemap = new Sitemap(this.render);
    this.Copyright = new Copyright(this.render);
    this.SocialList = new SocialList(this.render);
  }

  getElement = () => {
    return createElement({
      tagName: "footer",
      props: {
        class: "footer__container",
      },
      children: [
        createElement({
          tagName: "div",
          props: {
            class: "footer__container__inner",
          },
          children: [
            createElement({
              tagName: this.Sitemap,
            }),
            createElement({
              tagName: this.Copyright,
            }),
            createElement({
              tagName: this.SocialList,
            }),
          ],
        }),
      ],
    });
  };
}

export default Footer;
