export default class Component {
    private state;
    private props;
    private $target;
    constructor($target: HTMLElement, props?: Record<string, unknown>);
    getTemplate(): string;
    setEvent(): void;
    setState(key: string, value: unknown): void;
    render(): void;
}
