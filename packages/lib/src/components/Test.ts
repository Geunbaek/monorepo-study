import Component from "../lib/component";

export default class Test extends Component {
  constructor($target: HTMLElement, props?: Record<string, unknown>) {
    super($target, props);
  }
  getTemplate() {
    return "<h1>Test</h1>";
  }
}
