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
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        name="search"
        label="Search"
        variant="outlined"
        onChange={changeFn}
      />
    </Box>

    //  <input
    //             className="inputClass"
    //             type="text"
    //             id="search"
    //             name="search"

    //             // value={medData.name}
    //             onChange={changeFn}
    //           />
  );
}

export default Search;
