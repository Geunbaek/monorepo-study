import Component from "lib/component";
import { createElement } from "lib/virtualDOM";
import Menu from "./Menu";

import "./index.css";

export type MenuInfo = {
  title: string;
  items: MenuItem[];
};

export type MenuItem = {
  name: string;
  url?: string;
};

const SITEMAP: MenuInfo[] = [
  { title: "토크테크", items: [{ name: "의견 보내기", url: "" }] },
  {
    title: "토스",
    items: [
      {
        name: "홈페이지",
        url: "",
      },
      {
        name: "회사 소개",
        url: "",
      },
      {
        name: "채용",
        url: "",
      },
    ],
  },
  {
    title: "고객센터",
    items: [
      {
        name: "전화: 1599-4905 (24시간 연중무휴)",
        url: "",
      },
      {
        name: "이메일: support@toss.im",
        url: "",
      },
      {
        name: "카카오톡: @toss",
        url: "",
      },
    ],
  },
];

class Sitemap extends Component {
  Menus: Menu[];
  constructor(render: () => void) {
    super(render);

    this.Menus = SITEMAP.map(() => new Menu(this.render));
  }

  getElement = () => {
    return createElement({
      tagName: "nav",
      props: {
        class: "sitemap__container",
      },
      children: SITEMAP.map((menuInfo, index) =>
        createElement({
          tagName: this.Menus[index],
          props: { menuInfo },
        })
      ),
    });
  };
}

export default Sitemap;
