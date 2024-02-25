import { createElement } from "lib/virtualDOM";
import Component from "lib/component";
import { to } from "lib/router";
import { PostDummy } from "../../mocks/api/dummy";

import "./index.css";

class Post extends Component {
  // @ts-ignore
  props: {
    post: PostDummy;
  };

  constructor(render: () => void) {
    super(render);
  }

  setEvent = () => {
    const postContainer = document.querySelector(
      `.containter-${this.props.post.id}`
    );
    const anchor = postContainer?.querySelector(`.post__container__inner`);

    anchor?.removeEventListener("click", this.handleClickLink);
    anchor?.addEventListener("click", this.handleClickLink);
  };

  handleClickLink = (event: Event) => {
    event.preventDefault();
    to(`/${this.props.post.id}`);
  };

  getElement = () => {
    return createElement({
      tagName: "li",
      props: {
        class: `post__container containter-${this.props.post.id}`,
      },
      children: [
        createElement({
          tagName: "a",
          props: {
            class: "post__container__inner",
          },
          children: [
            createElement({
              tagName: "div",
              props: {
                class: "post__thumbnail__box",
              },
              children: [
                createElement({
                  tagName: "img",
                  props: {
                    class: "post__thumbnail__image",
                    src: this.props.post.thumbnail,
                  },
                }),
              ],
            }),
            createElement({
              tagName: "div",
              props: {
                class: "post__information__box",
              },
              children: [
                createElement({
                  tagName: "div",
                  props: {
                    class: "post__title",
                  },
                  children: [
                    createElement({
                      tagName: "span",
                      children: [this.props?.post.title],
                    }),
                  ],
                }),
                createElement({
                  tagName: "div",
                  props: {
                    class: "post__sub-title",
                  },
                  children: [
                    createElement({
                      tagName: "span",
                      children: [this.props?.post.subTitle],
                    }),
                  ],
                }),
                createElement({
                  tagName: "div",
                  props: {
                    class: "post__create-at",
                  },
                  children: [
                    createElement({
                      tagName: "span",
                      children: [this.props?.post.createdAt],
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

export default Post;
