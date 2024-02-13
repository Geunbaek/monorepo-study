import { createElement } from "lib/virtualDOM";

import "./index.css";

interface Props {
  title: string;
  subTitle: string;
}

const Post = ({ title, subTitle }: Props) => {
  return createElement({
    tagName: "li",
    props: {
      class: "post__container",
    },
    children: [
      createElement({
        tagName: "div",
        props: {
          class: "post__title",
        },
        children: [title],
      }),
      createElement({
        tagName: "div",
        props: {
          class: "post__sub-title",
        },
        children: [subTitle],
      }),
    ],
  });
};

export default Post;
