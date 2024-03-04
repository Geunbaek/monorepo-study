import Component from "lib/component";
import { createElement } from "lib/virtualDOM";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CareerSection from "../../components/sections/CareerSection";
import PostsSection from "../../components/sections/PostsSection";

import "./index.css";

class Main extends Component {
  Header: Header;
  PostsSection: PostsSection;
  CareerSection: CareerSection;
  Footer: Footer;

  constructor(render: () => void) {
    super(render);
    this.Header = new Header(this.render);
    this.PostsSection = new PostsSection(this.render);
    this.CareerSection = new CareerSection(this.render);
    this.Footer = new Footer(this.render);
  }
  getElement = () => {
    return createElement({
      tagName: "div",
      children: [
        createElement({
          tagName: this.Header,
        }),
        createElement({
          tagName: "main",
          props: {
            class: "main__container",
          },
          children: [
            createElement({
              tagName: this.PostsSection,
            }),
            createElement({
              tagName: this.CareerSection,
            }),
          ],
        }),
        createElement({
          tagName: this.Footer,
        }),
      ],
    });
  };
}

export default Main;
