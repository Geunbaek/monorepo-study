export type CustomNode = {
    tagName: string;
    props?: Record<string, string>;
    children?: (CustomNode | string | number)[];
};
export type CustomElement = {
    tagName: ((props?: Record<string, string>, children?: (CustomElement | string | number)[]) => CustomNode | string | number) | string;
    props?: Record<string, string>;
    children?: (CustomElement | string | number)[];
};
declare const createElement: (node: CustomElement | string | number) => CustomNode | string | number;
declare const render: ($target: HTMLElement) => (newVirtualElement: CustomNode | string | number) => void;
export { createElement, render };
