import Component from "lib/component";
import { createElement } from "lib/virtualDOM";
import { PostDummy } from "../../../mocks/api/dummy";
import Author from "../../../components/Author";

import "./index.css";

class DetailPostSection extends Component {
  state: {
    post: PostDummy[];
  };
  Author: Author;

  constructor(render: () => void) {
    super(render);
    this.state = {
      post: [],
    };

    this.Author = new Author(this.render);
    this.init();
  }

  init = () => {
    const id = history.state.groups.id;
    this.getPost(id);
  };

  getPost = (id: string) => {
    fetch(`/posts/${id}`)
      .then((res) => res.json())
      .then((post) => this.setState({ post }));
  };

  getElement = () => {
    return createElement({
      tagName: "section",
      props: {
        class: "detail-post-section__container",
      },
      children: [
        createElement({
          tagName: "div",
          props: {
            class: "detail-post-section__container__inner",
          },
          children: [
            ...this.state.post
              .map((post) => [
                createElement({
                  tagName: "img",
                  props: {
                    src: post.thumbnail,
                    class: "detail-post-section__thumbnail",
                  },
                }),
                createElement({
                  tagName: "div",
                  props: {
                    class: "detail-post-section__title",
                  },
                  children: [
                    createElement({
                      tagName: "h1",
                      children: [post.title],
                    }),
                  ],
                }),
                createElement({
                  tagName: this.Author,
                  props: {
                    author: post.author,
                    createdAt: post.createdAt,
                  },
                }),
              ])
              .flat(),
          ],
        }),
      ],
    });
  };
}

export default DetailPostSection;
