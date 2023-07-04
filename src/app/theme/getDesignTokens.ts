import { PaletteMode, ThemeOptions } from "@mui/material";
import lightPalette from "./lightPalette";
import darkPalette from "./darkPalette";
import breakpoints from "./breakpoints";
import typography from "./typography";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  breakpoints,
  typography,
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
});

export default getDesignTokens;
