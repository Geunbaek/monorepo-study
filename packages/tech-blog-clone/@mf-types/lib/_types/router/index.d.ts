import Component from "../component";
type Renderer = (component?: Component) => void;
export declare const to: (path: string, state?: Record<string, unknown>) => void;
declare const Router: (render: Renderer) => {
    init: () => any;
    to: (path: string, state?: Record<string, unknown>) => void;
    add: (path: string, component: new (render: Renderer) => Component) => any;
    setDefault: (component: new (render: Renderer) => Component) => any;
};
export default Router;
