import React, { useEffect } from "react";
import getDesignTokens from "./getDesignTokens";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { PaletteMode, useMediaQuery } from "@mui/material";

const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  useEffect(() => {
    if (prefersDarkMode && mode !== "dark") toggleColorMode();
  }, [prefersDarkMode, mode]);

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(getDesignTokens(mode))),
    [mode]
  );

  return {
    mode,
    toggleColorMode,
    theme,
  };
};

export default useTheme;
