import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import "./index.css";

class CareerSection extends Component {
  getElement = () => {
    return createElement({
      tagName: "section",
      props: {
        class: "career-section__container",
      },
      children: [
        createElement({
          tagName: "div",
          props: {
            class: "career-section__container__inner",
          },
          children: [
            createElement({
              tagName: "img",
              props: {
                class: "career-section__image",
                src: "/assets/images/website_code_blue_alpha.png",
              },
            }),
            createElement({
              tagName: "div",
              props: {
                class: "career-section__info-box",
              },
              children: [
                createElement({
                  tagName: "div",
                  props: {
                    class: "career-section__info-title",
                  },
                  children: [
                    createElement({
                      tagName: "span",
                      children: ["토스팀이 만드는 수많은 혁신의 순간들"],
                    }),
                  ],
                }),
                createElement({
                  tagName: "div",
                  props: {
                    class: "career-section__info-description",
                  },
                  children: [
                    createElement({
                      tagName: "span",
                      children: [
                        "당신과 함께 만들고 싶습니다.\n지금 토스팀에 합류하세요.",
                      ],
                    }),
                  ],
                }),
                createElement({
                  tagName: "div",
                  props: {
                    class: "career-section__info-button",
                  },
                  children: [
                    createElement({
                      tagName: "span",
                      children: ["채용 중인 공고 보기"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
}

export default CareerSection;
