import "styled-components";

import theme from "./theme";

export type Theme = typeof theme;

declare module "tw-elements";
declare module "*";
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
