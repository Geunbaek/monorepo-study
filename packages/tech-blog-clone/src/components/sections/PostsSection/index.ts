import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

import Post from "../../Post";

import type { PostDummy } from "../../../mocks/api/dummy";

import "./index.css";

class PostsSection extends Component {
  PostList: Post[] | null;
  state: {
    posts: PostDummy[];
  };

  constructor(render: () => void) {
    super(render);

    this.state = {
      posts: [],
    };
    this.PostList = null;
    this.getAllPosts();
  }

  getAllPosts = async () => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts: PostDummy[]) => {
        posts.reverse();
        this.setState({
          posts,
        });
        this.PostList = posts.map((_) => new Post(this.render));
      });
  };

  getElement = () => {
    return createElement({
      tagName: "section",
      props: {
        class: "posts-section__container",
      },
      children: [
        createElement({
          tagName: "div",
          props: {
            class: "posts-section__title",
          },
          children: [
            createElement({
              tagName: "h1",
              children: ["개발"],
            }),
          ],
        }),
        createElement({
          tagName: "ul",
          props: {
            class: "posts__container",
          },
          children: [
            ...this.state?.posts.map((post, index) =>
              createElement({
                tagName: this.PostList![index],
                props: {
                  post,
                },
              })
            ),
          ],
        }),
      ],
    });
  };
}

export default PostsSection;
