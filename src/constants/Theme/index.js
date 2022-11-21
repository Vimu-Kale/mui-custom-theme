import { createTheme } from "@mui/material";
import { themeButtons } from "./buttons";
import { themePalette } from "./colors";
import { themeInputs } from "./inputs";
import { themeLayout } from "./layout";
import { themeTypography } from "./typography";
import { themeSelect } from "./select";

const theme = createTheme(
  themeTypography,
  themeLayout,
  themePalette,
  themeButtons,
  themeInputs,
  themeSelect
);

export default theme;
