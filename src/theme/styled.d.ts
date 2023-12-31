import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      backOne: string;
      backTwo: string;

      text: string;

      background: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    colorBase: {
      black: string;
      white: string;

      success: string;
      info: string;
      alert: string;
      error: string;
    };
    spaces: {
      defaultSpace: string;
      space: string;
      borderRadius: string;
      defaultHeight: string;
      fontSize: string;
    };
  }
}
