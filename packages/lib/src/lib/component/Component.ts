import { CustomNode } from "../virtualDOM";

class Component {
  state?: Record<string, unknown>;

  render: () => void;
  props?: unknown;

  constructor(render: () => void) {
    this.render = render;
  }

  set _props(props: unknown) {
    this.props = props;
  }

  setState = (newState: Record<string, unknown>) => {
    this.state = newState;
    this.render?.();
  };
  setEvent = () => {};
  getElement = (): CustomNode => {
    throw new Error("Method not implemented.");
  };
}

export { Component };
