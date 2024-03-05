import * as React from "react";
import type { Typograph } from "./index.type";
interface Props {
    className?: string;
    text: string;
    typography: Typograph;
}
declare const Text: ({ className, text, typography }: Props) => React.JSX.Element;
export default Text;
