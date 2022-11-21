import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

// SELECTBOX IMPORTS
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React from "react";
import StyledSelect from "./StyledComponents/StyledSelect/StyledSelect";

const ThemeDemo = () => {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 24,
      }}
    >
      <Typography variant="h1" color="primary">
        H1 Hello there!
      </Typography>
      <Typography variant="h2" color="secondary">
        H1 Hello there!
      </Typography>
      <Typography variant="h3" color="error.main">
        H1 Hello there!
      </Typography>
      <Typography variant="h4" color="warning.main">
        H1 Hello there!
      </Typography>
      <Typography
        variant="h5"
        color={"gradiant.pink"}
        sx={{ fontSize: { xs: "2rem", md: "10rem" }, fontWeight: 600 }}
      >
        H1 Hello there!
      </Typography>
      <Typography variant="h6" color="success.main">
        H1 Hello there!
      </Typography>
      <hr />
      <Divider orientation="horizontal" />
      <Stack direction="row" spacing={1} sx={{ my: "3rem" }}>
        <Button>Submit</Button>
        <Divider orientation="vertical" flexItem />
        <Button disabled>Submit</Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button variant="outlined" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="secondary">
          Submit
        </Button>
        <Button variant="outlined" color="primary" disabled>
          Submit
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Stack spacing={2} direction="column" alignItems="flex-start">
          <Box>
            <LoadingButton
              startIcon={<></>}
              fullWidth
              loading
              loadingPosition="start"
            >
              Submit
            </LoadingButton>
          </Box>
          <Box>
            <LoadingButton
              fullWidth
              loading
              startIcon={<></>}
              loadingPosition="start"
              variant="outlined"
            >
              Submit
            </LoadingButton>
          </Box>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack spacing={2} direction="column" alignItems="flex-start">
          <Box>
            <LoadingButton fullWidth loadingPosition="start" startIcon={<></>}>
              Submit
            </LoadingButton>
          </Box>
          <Box>
            <LoadingButton
              fullWidth
              loadingPosition="start"
              startIcon={<></>}
              variant="outlined"
            >
              Submit
            </LoadingButton>
          </Box>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack>
          <TextField
            label="First Name"
            // value="Hey There"
            variant="outlined"
            error
            helperText="hello there"
          />
          <TextField
            label="First Name"
            // value="Hey There"
            variant="outlined"
            helperText="hello there"
          />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack>
          <StyledSelect />
          <StyledSelect error />

          <TextField
            fullWidth
            id="select"
            variant="outlined"
            label="Age"
            select
            helperText="hello there"
          >
            <MenuItem value={10} selected>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ThemeDemo;
