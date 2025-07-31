import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    style: number;
    backgroundColor: string;
    color: string;
    fontWeight: string;
    font: string;
    borderColor: string;
  }
}
