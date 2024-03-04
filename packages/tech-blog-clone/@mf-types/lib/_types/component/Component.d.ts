import { CustomNode } from "../virtualDOM";
declare class Component {
    state?: Record<string, unknown>;
    render: () => void;
    props?: unknown;
    constructor(render: () => void);
    set _props(props: unknown);
    setState: (newState: Record<string, unknown>) => void;
    setEvent: () => void;
    getElement: () => CustomNode;
}
export { Component };
