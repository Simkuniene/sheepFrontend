import { createTheme } from "@mui/material/styles";

const themeGreen = createTheme({
    palette: {
      background: {
        default: "#c1e29b",
        backgroundColor : 'black',
       // backgroundImage: 'url(/bg.jpg)',
        backgroundPosition: 'center',
        height:'100%'
      },
      primary: {
        superlight: "#c1e29b",
        light: "#a2cf6e",
        middle: "#94b66c",
        main: "#8bc34a",
        dark: "#618833",
        darkText: '#3d5d17',
        contrastText: "#fff",
      },
      secondary: {
        light: "#ffcf33",
        main: "#ffc400",
        dark: "#b28900",
        contrastText: "#000",
      },
  
      zalia: {
        main: "#4caf50",
      },
    },
  });

export default themeGreen;


