import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { green } from "@mui/material/colors";

const StyledSelect = (props) => {
  return (
    <TextField
      fullWidth
      id="select"
      variant="outlined"
      label="Age"
      select
      //   helperText="hello there"
      SelectProps={{
        sx: {
          //   "& .MuiSvgIcon-root": {
          //     color: "grey",
          //   },
          //   "&:hover": {
          //     "&& .MuiSvgIcon-root": {
          //       color: "yellow",
          //     },
          //   },
          //   "&.Mui-focused": {
          //     "&& .MuiSvgIcon-root": {
          //       color: "green",
          //     },
          //   },
          //   "&.Mui-focused + :hover": {
          //     "&& .MuiSvgIcon-root": {
          //       color: "green",
          //     },
          //   },
          //   "&.Mui-error": {
          //     ".MuiSvgIcon-root": {
          //       color: "grey",
          //     },
          //   },
          //   "&.Mui-error :hover": {
          //     ".MuiSvgIcon-root": {
          //       color: "grey",
          //     },
          //   },
        },
        MenuProps: {
          PaperProps: {
            sx: {
              marginTop: "8px",
              padding: 0,
              border: `4px solid ${green[500]}`,
              borderRadius: "15px",
              //   backgroundColor: green[100],
              "& .MuiMenuItem-root.Mui-selected": {
                color: "white",
                background: green[400],
              },
              "& .MuiMenuItem-root:hover": {
                background: green[100],
              },
              "& .MuiMenuItem-root.Mui-selected:hover": {
                background: green[500],
              },
            },
          },
        },
      }}
      {...props}
    >
      <MenuItem value={10} selected>
        Ten
      </MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </TextField>
  );
};

export default StyledSelect;
