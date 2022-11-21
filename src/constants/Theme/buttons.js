import { createTheme } from "@mui/material";
import { themePalette, CustomBlue } from "./colors";

export const themeButtons = createTheme(themePalette, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 15,
          padding: "10px 24px",
          textTransform: "none",
          fontFamily: '"PoppinsMedium", "sans-serif"',
          fontSize: "1rem",
          lineHeight: "20px",
          maxwidth: "348px",
          width: "100%",
          height: "40px",
          margin: "auto",
        },
      },
      variants: [
        // CONTAINED COLOR PRIMARY
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: CustomBlue[700],
            "&:hover": {
              backgroundColor: CustomBlue[700],
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: CustomBlue[700],
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: CustomBlue[700],
              boxShadow: "unset",
            },
          },
        },
        // OUTLINED COLOR PRIMARY
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: themePalette.palette.primary.dark,
            "&:hover": {
              backgroundColor: CustomBlue[50],
            },
            "&:focus": {
              backgroundColor: CustomBlue[100],
              borderColor: themePalette.palette.primary.main,
            },
            "&:disabled": {
              backgroundColor: "none",
              borderColor: "#1F1F1F1F",
            },
            "&:active": {
              color: themePalette.palette.primary.light,
              borderColor: themePalette.palette.primary.light,
            },
          },
        },
      ],
    },
    // MUI LOADING BUTTON CUSTOMIZATION
    MuiLoadingButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 15,
          padding: "10px 24px",
          textTransform: "none",
          fontFamily: '"PoppinsMedium", "sans-serif"',
          fontSize: "1rem",
          lineHeight: "20px",
          maxwidth: "348px",
          width: "100%",
          height: "40px",
          margin: "auto",
        },
      },
      variants: [
        // CONTAINED COLOR PRIMARY
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: CustomBlue[700],
            "&:hover": {
              backgroundColor: CustomBlue[700],
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
            "&:focus": {
              backgroundColor: CustomBlue[700],
            },
            "&:disabled": {
              backgroundColor: "#1F1F1F1F",
            },
            "&:active": {
              backgroundColor: CustomBlue[700],
              boxShadow: "unset",
            },
          },
        },
        // OUTLINED COLOR PRIMARY
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: themePalette.palette.primary.dark,
            "&:hover": {
              backgroundColor: CustomBlue[50],
            },
            "&:focus": {
              backgroundColor: CustomBlue[100],
              borderColor: themePalette.palette.primary.main,
            },
            "&:disabled": {
              backgroundColor: "none",
              borderColor: "#1F1F1F1F",
            },
            "&:active": {
              color: themePalette.palette.primary.light,
              borderColor: themePalette.palette.primary.light,
            },
          },
        },
      ],
    },
  },
});
