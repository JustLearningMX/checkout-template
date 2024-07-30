import {PaletteMode} from "@mui/material";

export interface ToggleCustomThemeProps {
    showCustomTheme: boolean;
    toggleCustomTheme: () => void;
}

export interface ThemeContextProps {
    mode: PaletteMode;
    showCustomTheme: boolean;
    customTheme: any;
    defaultTheme: any;
    toggleColorMode: () => void;
    toggleCustomTheme: () => void;
}