export type CustomNode = {
  tagName: string;
  props?: Record<string, string>;
  children?: (CustomNode | string | number)[];
};

const createDOM = (node: CustomNode | string | number) => {
  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(node.toString());
  }

  const tagName = node.tagName;
  const props = node.props || {};
  const children = node.children || [];

  const el = document.createElement(tagName);

  for (const key in props) {
    el.setAttribute(key, props[key]);
  }

  for (const child of children) {
    el.appendChild(createDOM(child));
  }

  return el;
};

export type CustomElement = {
  tagName:
    | ((
        props?: Record<string, string>,
        children?: (CustomElement | string | number)[]
      ) => CustomNode | string | number)
    | string;
  props?: Record<string, string>;
  children?: (CustomElement | string | number)[];
};

const createElement = (
  node: CustomElement | string | number
): CustomNode | string | number => {
  if (typeof node === "string" || typeof node === "number") {
    return node;
  }

  if (typeof node.tagName === "function") {
    return node.tagName(node.props, node.children);
  }

  const tagName = node.tagName || "";
  const props = node.props || {};
  const children = (node.children || []) as (CustomNode | string | number)[];

  return { tagName, props, children };
};

const isChangedDOM = (
  virtualDOM: HTMLElement | Text,
  newVirtualDOM: HTMLElement | Text
) => {
  if (virtualDOM instanceof Text && newVirtualDOM instanceof HTMLElement) {
    return true;
  }

  if (virtualDOM instanceof HTMLElement && newVirtualDOM instanceof Text) {
    return true;
  }

  if (
    virtualDOM instanceof Text &&
    newVirtualDOM instanceof Text &&
    virtualDOM.textContent !== newVirtualDOM.textContent
  ) {
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
  virtualDOM: HTMLElement | Text,
  newVirtualDOM: HTMLElement | Text
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
  parentDOM: HTMLElement,
  virtualDOM: HTMLElement | Text | undefined,
  newVirtualDOM: HTMLElement | Text | undefined
) => {
  if (!virtualDOM || !newVirtualDOM) {
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

const render = ($target: HTMLElement) => {
  let virtualDOM: HTMLElement | Text | null = null;
  return (newVirtualElement: CustomNode | string | number) => {
    const newVirtualDOM = createDOM(newVirtualElement);
    if (virtualDOM === null) {
      virtualDOM = newVirtualDOM;
      $target.appendChild(newVirtualDOM);
    } else {
      reconsile($target, virtualDOM, newVirtualDOM);
    }
  };
};

export { createElement, render };
