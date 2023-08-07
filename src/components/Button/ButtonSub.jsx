import React from 'react';
import { Button } from "@mui/material";
import themeGreen from "../ThemeUi/ThemeUi";
import "./Button.css"

  const ButtonSub = ({ text}) => (
    <div>
 
<Button
             variant="contained"
              type="submit"
              style={{
                backgroundColor: themeGreen.palette.primary.dark,
                marginRight: "10px",
              }}
            >
              {text}
            </Button>
            </div> 
   )


export default ButtonSub