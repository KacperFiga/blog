import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
  }
}
