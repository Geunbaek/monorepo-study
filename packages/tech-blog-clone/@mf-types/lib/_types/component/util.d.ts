import { Component } from "./Component";
declare const getUseState: (render: (component: Component) => void, root: Component) => <T>(initState: T) => [T, (newState: T) => void];
export { getUseState };
