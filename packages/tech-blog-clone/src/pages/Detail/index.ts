import Component from "lib/component";
import { createElement } from "lib/virtualDOM";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CareerSection from "../../components/sections/CareerSection";
import DetailPostSection from "../../components/sections/DetailPostSecion";

import "./index.css";

class Detail extends Component {
  Header: Header;
  DetailPostSection: DetailPostSection;
  CareerSection: CareerSection;
  Footer: Footer;

  constructor(render: () => void) {
    super(render);
    this.Header = new Header(this.render);
    this.DetailPostSection = new DetailPostSection(this.render);
    this.CareerSection = new CareerSection(this.render);
    this.Footer = new Footer(this.render);
  }

  getElement = () => {
    const id = history.state.groups.id;

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
              tagName: this.DetailPostSection,
              props: {
                id,
              },
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

export default Detail;
