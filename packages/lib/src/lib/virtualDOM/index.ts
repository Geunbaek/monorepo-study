import Component from "../component";

export type CustomNode = {
  tagName: string;
  props?: Record<string, unknown>;
  children?: (CustomNode | string | number)[];
  component?: InstanceType<typeof Component>;
};

const createDOM = (
  node: CustomNode | string | number,
  eventFuncSet: Set<Function>
) => {
  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(node.toString());
  }

  const tagName = node.tagName;
  const props = node.props || {};
  const children = node.children || [];
  const component = node.component;

  const el = document.createElement(tagName);

  if (component) {
    eventFuncSet.add(component.setEvent);
  }

  for (const key in props) {
    const value = props[key];

    if (typeof value === "string") {
      el.setAttribute(key, value);
    }
  }

  for (const child of children) {
    const childNode = createDOM(child, eventFuncSet);
    el.appendChild(childNode);
  }

  return el;
};

export type CustomElement = {
  tagName: InstanceType<typeof Component> | string;
  props?: Record<string, unknown>;
  children?: (CustomElement | string | number)[];
};

const createElement = (node: CustomElement): CustomNode => {
  if (node.tagName instanceof Component) {
    node.tagName._props = node.props;
    return { ...node.tagName.getElement(), component: node.tagName };
  }

  const tagName = node.tagName || "";
  const props = node.props || {};
  const children = (node.children || []) as (CustomNode | string | number)[];

  return { tagName, props, children };
};

const isChangedDOM = (
  virtualDOM: Element | HTMLElement | Text,
  newVirtualDOM: DocumentFragment | HTMLElement | Text
) => {
  if (virtualDOM instanceof Text && newVirtualDOM instanceof HTMLElement) {
    return true;
  }

  if (virtualDOM instanceof HTMLElement && newVirtualDOM instanceof Text) {
    return true;
  }

  if (virtualDOM.textContent !== newVirtualDOM.textContent) {
    return true;
  }

  const attributes = (virtualDOM as HTMLElement).attributes;
  const newAttributes = (newVirtualDOM as HTMLElement).attributes;

  if (attributes.length !== newAttributes.length) {
    return true;
  }

  const isChangedAttribute = Array.from(attributes).some((attribute) => {
    const { name } = attribute;
    const virtualDOMAttribute = (virtualDOM as HTMLElement).getAttribute(name);
    const newVirtualDOMAttribute = (newVirtualDOM as HTMLElement).getAttribute(
      name
    );
    return virtualDOMAttribute !== newVirtualDOMAttribute;
  });

  if (isChangedAttribute) {
    return true;
  }

  return false;
};

const hasEqualKey = (
  virtualDOM: Element | HTMLElement | Text,
  newVirtualDOM: DocumentFragment | HTMLElement | Text
) => {
  const virtualDOMKey = (virtualDOM as HTMLElement).getAttribute("key");
  const newVirtualDOMKey = (newVirtualDOM as HTMLElement).getAttribute("key");

  if (virtualDOMKey === null) {
    return false;
  }

  if (newVirtualDOMKey === null) {
    return false;
  }

  return virtualDOMKey === newVirtualDOMKey;
};

const reconsile = (
  parentDOM: DocumentFragment | Element | HTMLElement,
  virtualDOM: Element | HTMLElement | Text | undefined,
  newVirtualDOM: DocumentFragment | HTMLElement | Text | undefined
) => {
  if (!virtualDOM && !newVirtualDOM) {
    return;
  }

  if (!virtualDOM && newVirtualDOM) {
    parentDOM.appendChild(newVirtualDOM);
    return;
  }

  if (virtualDOM && !newVirtualDOM) {
    virtualDOM.remove();
    return;
  }

  if (!virtualDOM || !newVirtualDOM) {
    return;
  }

  if (hasEqualKey(virtualDOM, newVirtualDOM)) {
    return;
  }

  if (isChangedDOM(virtualDOM, newVirtualDOM)) {
    parentDOM.replaceChild(newVirtualDOM, virtualDOM);
    return;
  }

  if (virtualDOM instanceof Text || newVirtualDOM instanceof Text) {
    return;
  }

  const virtualDOMChildren = Array.from(virtualDOM.children);
  const newVirtualDOMChildren = Array.from(newVirtualDOM.children);

  const max = Math.max(virtualDOMChildren.length, newVirtualDOMChildren.length);

  for (let i = 0; i < max; i++) {
    reconsile(
      virtualDOM,
      virtualDOMChildren[i] as HTMLElement | Text | undefined,
      newVirtualDOMChildren[i] as HTMLElement | Text | undefined
    );
  }
};

const createVirtualDOM = ($target: DocumentFragment | HTMLElement) => {
  let component: Component | null = null;
  const render = (newComponent?: Component) => {
    requestAnimationFrame(() => {
      if (newComponent) {
        component = newComponent;
      }

      if (!component) return;

      const newVirtualElement = component.getElement();
      const eventFuncSet: Set<Function> = new Set();
      const newVirtualDOM = createDOM(newVirtualElement, eventFuncSet);
      reconsile($target, $target.children[0], newVirtualDOM);
      eventFuncSet.forEach((fn) => fn());
    });
  };

  return { render };
};

export { createElement, createVirtualDOM };
