import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import "./index.css";

class Author extends Component {
  // @ts-ignore
  props!: {
    author: {
      thumbnail: string;
      name: string;
      job: string;
    };
    createdAt: string;
  };

  getElement = () => {
    const name = this.props.author.name;
    const job = this.props.author.job;
    const authorNameJob = job ? `${name}ㆍ${job}` : name;

    return createElement({
      tagName: "div",
      props: {
        class: "author__container",
      },
      children: [
        createElement({
          tagName: "img",
          props: {
            class: "author__thumbnail",
            src: this.props?.author.thumbnail,
          },
        }),
        createElement({
          tagName: "div",
          props: {
            class: "author__info-box",
          },
          children: [
            createElement({
              tagName: "div",
              props: {
                class: "author__info-name-job",
              },
              children: [
                createElement({
                  tagName: "span",
                  children: [authorNameJob],
                }),
              ],
            }),
            createElement({
              tagName: "div",
              props: {
                class: "author__info-created-at",
              },
              children: [
                createElement({
                  tagName: "span",
                  children: [this.props?.createdAt],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
}

export default Author;
