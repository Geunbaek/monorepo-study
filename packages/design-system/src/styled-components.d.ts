import theme from "./app/theme";

declare module "styled-components" {
  export type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
