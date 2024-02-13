import Component from "../lib/component";
import Router from "../lib/router";

export default class Path extends Component {
  constructor($target: HTMLElement, props?: Record<string, unknown>) {
    super($target, props);
  }

  setEvent(): void {
    document.querySelector(".link")?.addEventListener("click", (event) => {
      event.preventDefault();
      // Router.to("/test");
    });
  }

  getTemplate() {
    return `<h1>PATH</h1><a class="link">test</a>`;
  }
}
