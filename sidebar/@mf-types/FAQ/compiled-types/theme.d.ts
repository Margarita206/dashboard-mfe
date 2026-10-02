import { ThemeOptions, Theme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
type ColorShades = {
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
export type Tokens = {
    grey: ColorShades;
    primary: ColorShades;
    greenAccent: ColorShades;
    redAccent: ColorShades;
    blueAccent: ColorShades;
};
export type ColorModeContextType = {
    toggleColorMode: () => void;
};
export declare const tokens: (mode: PaletteMode) => Tokens;
export declare const themeSettings: (mode: PaletteMode) => ThemeOptions;
export declare const ColorModeContext: import("react").Context<ColorModeContextType>;
export declare const useMode: () => [Theme, ColorModeContextType];
export {};
