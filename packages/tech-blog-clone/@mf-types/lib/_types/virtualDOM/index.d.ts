import Component from "../component";
export type CustomNode = {
    tagName: string;
    props?: Record<string, unknown>;
    children?: (CustomNode | string | number)[];
    component?: InstanceType<typeof Component>;
};
export type CustomElement = {
    tagName: InstanceType<typeof Component> | string;
    props?: Record<string, unknown>;
    children?: (CustomElement | string | number)[];
};
declare const createElement: (node: CustomElement) => CustomNode;
declare const createVirtualDOM: ($target: DocumentFragment | HTMLElement) => {
    render: (newComponent?: Component) => void;
};
export { createElement, createVirtualDOM };
