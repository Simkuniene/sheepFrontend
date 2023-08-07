import React from "react";
import { Button } from "@mui/material";
import themeGreen from "../ThemeUi/ThemeUi";
import "./Button.css";

const ButtonLinkMui = ({ text, uniqueKey }) => (
  <div>
    <Button
      key={uniqueKey}
      variant="contained"
      style={{
        backgroundColor: themeGreen.palette.primary.dark,
        marginRight: "10px",
      }}
    >
      {text}
    </Button>
  </div>
);

export default ButtonLinkMui;
