import type { CustomNode } from "../virtualDOM";
declare const Router: (renderer: (page: CustomNode | string | number) => void) => {
    init: () => any;
    to: (path: string, state?: Record<string, unknown>) => void;
    add: (path: string, getPage: (props?: Record<string, string>) => CustomNode | string | number) => any;
    setDefault: (getPage: (props?: Record<string, string>) => CustomNode | string | number) => any;
};
export default Router;
