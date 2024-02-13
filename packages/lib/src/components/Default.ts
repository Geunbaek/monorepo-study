import Component from "../lib/component";

export default class Default extends Component {
  constructor($target: HTMLElement, props?: Record<string, unknown>) {
    super($target, props);
  }
  getTemplate() {
    return "<h1>DEFAULT</h1>";
  }
}
