import { createTheme } from "@mui/material";
export const themeInputs = createTheme({
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            margin: "10px",
            // NORMAL LABEL
            "& label": {
              color: "black",
              fontFamily: '"PoppinsRegular","sans-serif"',
            },

            // HOVER ON TEXT FIELD
            "&:hover": {
              "& label ": {
                color: "yellow",
              },
              "& label.Mui-error": {
                color: "#d32f2f",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "yellow",
                },
              },
              "& .MuiOutlinedInput-root.Mui-error": {
                "& fieldset": {
                  borderColor: "#d32f2f",
                },
              },
            },

            // "& .MuiInput-underline:after": {
            //   borderBottomColor: "green",
            // },

            //  OUTLINED INPUT FIELDSET
            "& .MuiOutlinedInput-root": {
              fontFamily: '"PoppinsMedium","sans-serif"',
              "& fieldset": {
                borderColor: "black",
                borderRadius: "15px",
              },
              // "&:hover fieldset ": {
              //   borderColor: "yellow",
              // },
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
            "& .MuiOutlinedInput-root.Mui-error": {
              "&.Mui-focused fieldset": {
                borderColor: "#d32f2f",
              },
            },

            // LABEL OF FOCUS
            "& label.Mui-focused": {
              color: "green",
            },
            "& label.Mui-focused.Mui-error": {
              color: "#d32f2f",
            },

            // FORM HELPER TEXT
            "& .MuiFormHelperText-root": {
              // color: "blue",
              margin: 0,
              fontFamily: '"PoppinsRegular","sans-serif"',
              // fontWeight: "600",
            },

            ".MuiFormHelperText-contained.Mui-error": {
              color: "#d32f2f",
            },
          },
        },
      ],
    },
  },
});
