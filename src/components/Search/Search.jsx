import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Search({ changeFn }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "25ch",
        },
      }}
      //noValidate0

      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        name="search"
        label="Paieška"
        variant="outlined"
        onChange={changeFn}
      />
    </Box>
  );
}

export default Search;
