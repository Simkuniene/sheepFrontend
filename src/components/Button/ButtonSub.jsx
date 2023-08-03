import React from 'react';
import { Button } from "@mui/material";
//import { ThemeProvider } from "@mui/material/styles";
import themeGreen from "../ThemeUi/ThemeUi";
import "./Button.css"

// const ButtonSub = ({ submitEvent}) => (
  const ButtonSub = ({ text}) => (
    <div>
   {/* <div className="btn-wrapper">
    <button type="submit" className="btn">Add</button> */}
  


<Button
             // key={"buttonAddSheep"}
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
//e.target.remove();
 // }

export default ButtonSub