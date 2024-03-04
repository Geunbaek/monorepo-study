import Component from "lib/component";
import { createElement } from "lib/virtualDOM";

class Page404 extends Component {
  getElement = () => {
    return createElement({ tagName: "div", children: ["404 Error"] });
  };
}

export default Page404;
